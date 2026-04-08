import { Selection } from '$lib/models/selection.model.svelte';
import { State } from '$lib/models/helpers/state.model.svelte';
import { NodeType } from '$lib/models/node-type.model';
import type { Basenode } from '$lib/models/basenode.model';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// ---- Hoisted mock state (must exist before vi.mock factories run) ----

type MockCollection = { values: Partial<Basenode>[]; items: Record<string, Partial<Basenode>> };

const { nodeCollections, mockSettings, setSetting } = vi.hoisted(() => {
	const nodeTypes = [
		'library',
		'collection',
		'book',
		'part',
		'chapter',
		'section',
		'paragraph',
		'clause'
	] as const;

	const nodeCollections = Object.fromEntries(
		nodeTypes.map((t) => [t, { values: [], items: {} }])
	) as Record<string, MockCollection>;

	const mockSettings = {
		value: Object.fromEntries(nodeTypes.map((t) => [t, { current: 'null' }])) as Record<
			string,
			{ current: string }
		>
	};

	const setSetting = vi.fn();

	return { nodeCollections, mockSettings, setSetting };
});

// ---- Mocks ----

vi.mock('svelte', () => ({
	untrack: (fn: () => unknown) => fn()
}));

const order = [
	NodeType.Library,
	NodeType.Collection,
	NodeType.Book,
	NodeType.Part,
	NodeType.Chapter,
	NodeType.Section,
	NodeType.Paragraph,
	NodeType.Clause
];

vi.mock('$lib/states/nodes.svelte', () => ({
	getCollectionForNodeType: vi.fn((nodeType: string) => nodeCollections[nodeType]),
	subtypeOf: (nodeType: string) => {
		const types = [
			'library',
			'collection',
			'book',
			'part',
			'chapter',
			'section',
			'paragraph',
			'clause'
		];
		const i = types.indexOf(nodeType);
		return i === -1 || i >= types.length - 1 ? types[0] : types[i + 1];
	},
	supertypeOf: (nodeType: string) => {
		const types = [
			'library',
			'collection',
			'book',
			'part',
			'chapter',
			'section',
			'paragraph',
			'clause'
		];
		const i = types.indexOf(nodeType);
		return i < 1 ? types[0] : types[i - 1];
	}
}));

vi.mock('$lib/states/settings.svelte', () => ({
	settings: mockSettings,
	setSetting
}));

// ---- Helpers ----

function makeNode(id: string, children: string[][] = []): Partial<Basenode> {
	return { id, children } as Partial<Basenode>;
}

/** Creates a Selection and waits for the lazy-load microtask to complete. */
async function readySelection(): Promise<Selection> {
	const sel = new Selection();
	sel.indices; // triggers lazy load
	await Promise.resolve();
	return sel;
}

function resetMocks() {
	for (const nodeType of order) {
		nodeCollections[nodeType] = { values: [], items: {} };
		mockSettings.value[nodeType] = { current: 'null' };
	}
	setSetting.mockClear();
}

beforeEach(resetMocks);

// ---- state ----

describe('state', () => {
	it('starts as Initializing', () => {
		const sel = new Selection();
		expect(sel.state).toBe(State.Initializing);
	});

	it('becomes Ready after lazy load triggered via indices', async () => {
		const sel = await readySelection();
		expect(sel.state).toBe(State.Ready);
	});

	it('becomes Ready after lazy load triggered via nodes', async () => {
		const sel = new Selection();
		sel.nodes;
		await Promise.resolve();
		expect(sel.state).toBe(State.Ready);
	});

	it('does not load again once already Ready', async () => {
		const { getCollectionForNodeType } = await import('$lib/states/nodes.svelte');
		const spy = vi.mocked(getCollectionForNodeType);
		spy.mockClear();

		const sel = await readySelection();
		const callsAfterFirstLoad = spy.mock.calls.length;

		sel.indices; // access again – should not re-trigger load
		await Promise.resolve();

		expect(spy.mock.calls.length).toBe(callsAfterFirstLoad);
	});
});

// ---- loading from settings ----

describe('loadSelectionFromSettings', () => {
	it('loads a library index from settings on first access', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		mockSettings.value[NodeType.Library] = { current: '[1,0]' };

		const sel = new Selection();
		sel.indices;
		await Promise.resolve();

		expect(sel.indices[NodeType.Library]).toEqual([1, 0]);
		expect(sel.nodes[NodeType.Library]).toBe(lib1);
	});

	it('loads a nested (non-root) selection from settings', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		mockSettings.value[NodeType.Library] = { current: '[0,0]' };
		mockSettings.value[NodeType.Collection] = { current: '[0,0]' };

		const sel = new Selection();
		sel.indices;
		await Promise.resolve();

		expect(sel.nodes[NodeType.Library]).toBe(lib0);
		expect(sel.nodes[NodeType.Collection]).toBe(col0);
	});

	it('leaves all indices null when settings contain null', async () => {
		const sel = await readySelection();

		for (const nodeType of order) {
			expect(sel.indices[nodeType]).toBeNull();
		}
	});
});

// ---- isRoot ----

describe('isRoot', () => {
	it('is true when nothing is selected', async () => {
		const sel = await readySelection();
		expect(sel.isRoot).toBe(true);
	});

	it('is false after selecting a library', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(sel.isRoot).toBe(false);
	});

	it('is true again after unselecting', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		sel.unselect();
		expect(sel.isRoot).toBe(true);
	});
});

// ---- node ----

describe('node', () => {
	it('returns null when nothing is selected', async () => {
		const sel = await readySelection();
		expect(sel.node).toBeNull();
	});

	it('returns the selected library', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(sel.node).toBe(lib0);
	});

	it('returns the selected collection (deepest selected type wins)', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		expect(sel.node).toBe(col0);
	});
});

// ---- parent ----

describe('parent', () => {
	it('returns null when nothing is selected', async () => {
		const sel = await readySelection();
		expect(sel.parent).toBeNull();
	});

	it('returns null when the root library is selected', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(sel.parent).toBeNull();
	});

	it('returns the parent library when a collection is selected', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		expect(sel.parent).toBe(lib0);
	});
});

// ---- select ----

describe('select', () => {
	it('selects the first library when nothing is selected', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(sel.nodes[NodeType.Library]).toBe(lib0);
		expect(sel.indices[NodeType.Library]).toEqual([0, 0]);
	});

	it('selects the second library by index', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		const sel = await readySelection();
		sel.select(1);
		expect(sel.nodes[NodeType.Library]).toBe(lib1);
		expect(sel.indices[NodeType.Library]).toEqual([1, 0]);
	});

	it('selects a child collection of the current library', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		expect(sel.nodes[NodeType.Collection]).toBe(col0);
		expect(sel.indices[NodeType.Collection]).toEqual([0, 0]);
	});

	it('selects a child with a non-zero alternative index', async () => {
		const col0 = makeNode('col0');
		const col1 = makeNode('col1');
		const lib0 = makeNode('lib0', [['col0', 'col1']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0, col1 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0, 1); // alternative col1
		expect(sel.nodes[NodeType.Collection]).toBe(col1);
		expect(sel.indices[NodeType.Collection]).toEqual([0, 1]);
	});

	it('calls setSetting with the correct key and JSON value', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(setSetting).toHaveBeenCalledWith(NodeType.Library, '[0,0]');
	});

	it('leaves state as Ready after selecting', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		expect(sel.state).toBe(State.Ready);
	});
});

// ---- selectFirstChild ----

describe('selectFirstChild', () => {
	it('selects the first library when nothing is selected', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		const sel = await readySelection();
		sel.selectFirstChild();
		expect(sel.node).toBe(lib0);
	});

	it('selects the first child of the selected library', async () => {
		const col0 = makeNode('col0');
		const col1 = makeNode('col1');
		const lib0 = makeNode('lib0', [['col0'], ['col1']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0, col1 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0);
		sel.selectFirstChild();
		expect(sel.node).toBe(col0);
		expect(sel.indices[NodeType.Collection]).toEqual([0, 0]);
	});
});

// ---- selectLastChild ----

describe('selectLastChild', () => {
	it('selects the last library when nothing is selected', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		const lib2 = makeNode('lib2');
		nodeCollections[NodeType.Library].values = [lib0, lib1, lib2] as Basenode[];
		const sel = await readySelection();
		sel.selectLastChild();
		expect(sel.node).toBe(lib2);
	});

	it('selects the last child of the selected library', async () => {
		const col0 = makeNode('col0');
		const col1 = makeNode('col1');
		const lib0 = makeNode('lib0', [['col0'], ['col1']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0, col1 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0);
		sel.selectLastChild();
		expect(sel.node).toBe(col1);
		expect(sel.indices[NodeType.Collection]).toEqual([1, 0]);
	});
});

// ---- unselect ----

describe('unselect', () => {
	it('does nothing when nothing is selected', async () => {
		const sel = await readySelection();
		expect(() => sel.unselect()).not.toThrow();
		expect(sel.isRoot).toBe(true);
	});

	it('deselects the currently selected library', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		sel.unselect();
		expect(sel.isRoot).toBe(true);
		expect(sel.nodes[NodeType.Library]).toBeNull();
		expect(sel.indices[NodeType.Library]).toBeNull();
	});

	it('calls setSetting with null for the deselected type', async () => {
		const lib0 = makeNode('lib0');
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		setSetting.mockClear();
		sel.unselect();
		expect(setSetting).toHaveBeenCalledWith(NodeType.Library, 'null');
	});

	it('only deselects the deepest selected type, leaving parent intact', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		sel.unselect(); // remove col0
		expect(sel.nodes[NodeType.Collection]).toBeNull();
		expect(sel.nodes[NodeType.Library]).toBe(lib0);
	});
});

// ---- unselectUntilType ----

describe('unselectUntilType', () => {
	it('does nothing when nothing is selected', async () => {
		const sel = await readySelection();
		expect(() => sel.unselectUntilType(NodeType.Library)).not.toThrow();
		expect(sel.isRoot).toBe(true);
	});

	it('does nothing when the current type already matches the target', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		sel.unselectUntilType(NodeType.Collection);
		expect(sel.nodes[NodeType.Collection]).toBe(col0);
	});

	it('deselects children until reaching the target type', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		sel.unselectUntilType(NodeType.Library);
		expect(sel.nodes[NodeType.Collection]).toBeNull();
		expect(sel.nodes[NodeType.Library]).toBe(lib0);
	});
});

// ---- next / previous ----

describe('next', () => {
	it('does nothing when nothing is selected', async () => {
		const sel = await readySelection();
		expect(() => sel.next()).not.toThrow();
		expect(sel.isRoot).toBe(true);
	});

	it('deselects the root library (no parent context to validate range)', async () => {
		// At the library level there is no parent node, so isOutOfRange returns true
		// and no new library is selected even when siblings exist.
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		const sel = await readySelection();
		sel.select(0);
		sel.next();
		expect(sel.isRoot).toBe(true);
	});

	it('moves to the next sibling collection', async () => {
		const col0 = makeNode('col0');
		const col1 = makeNode('col1');
		const lib0 = makeNode('lib0', [['col0'], ['col1']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0, col1 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0
		sel.next();
		expect(sel.node).toBe(col1);
		expect(sel.indices[NodeType.Collection]).toEqual([1, 0]);
	});

	it('leaves parent selected and child null when moving past the last sibling', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0 – the only child
		sel.next();
		expect(sel.nodes[NodeType.Collection]).toBeNull();
		expect(sel.nodes[NodeType.Library]).toBe(lib0);
	});
});

describe('previous', () => {
	it('does nothing when nothing is selected', async () => {
		const sel = await readySelection();
		expect(() => sel.previous()).not.toThrow();
		expect(sel.isRoot).toBe(true);
	});

	it('deselects the root library (no parent context to validate range)', async () => {
		const lib0 = makeNode('lib0');
		const lib1 = makeNode('lib1');
		nodeCollections[NodeType.Library].values = [lib0, lib1] as Basenode[];
		const sel = await readySelection();
		sel.select(1);
		sel.previous();
		expect(sel.isRoot).toBe(true);
	});

	it('moves to the previous sibling collection', async () => {
		const col0 = makeNode('col0');
		const col1 = makeNode('col1');
		const lib0 = makeNode('lib0', [['col0'], ['col1']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0, col1 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(1); // col1
		sel.previous();
		expect(sel.node).toBe(col0);
		expect(sel.indices[NodeType.Collection]).toEqual([0, 0]);
	});

	it('leaves parent selected and child null when moving before the first sibling', async () => {
		const col0 = makeNode('col0');
		const lib0 = makeNode('lib0', [['col0']]);
		nodeCollections[NodeType.Library].values = [lib0] as Basenode[];
		nodeCollections[NodeType.Collection].items = { col0 } as Record<string, Basenode>;
		const sel = await readySelection();
		sel.select(0); // lib0
		sel.select(0); // col0 – the only child
		sel.previous();
		expect(sel.nodes[NodeType.Collection]).toBeNull();
		expect(sel.nodes[NodeType.Library]).toBe(lib0);
	});
});
