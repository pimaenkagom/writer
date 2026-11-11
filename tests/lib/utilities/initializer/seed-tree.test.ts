import type { Basenode } from '$lib/models/basenode.model';
import { beforeAll, describe, expect, it, vi } from 'vitest';

// ---- State mocks (the seed files must not touch Firebase) ----

vi.mock('$lib/states/multilingual-text.svelte', () => ({ multilingualTexts: {} }));
vi.mock('$lib/states/nodes.svelte', () => ({ getCollectionForNodeType: () => ({}) }));

// ---- Helpers ----

const seedFiles = import.meta.glob('/src/lib/utilities/initializer/**/*.ts');

let nodes: Basenode[] = [];

function parentsByChildId(nodesById: Map<string, Basenode>): Map<string, Set<string>> {
	const parents = new Map<string, Set<string>>();
	for (const node of nodesById.values()) {
		for (const slot of node.children) {
			for (const childId of slot) {
				if (!parents.has(childId)) parents.set(childId, new Set());
				parents.get(childId)!.add(node.id);
			}
		}
	}
	return parents;
}

beforeAll(async () => {
	for (const load of Object.values(seedFiles)) await load();
	const { pendingNodes } = await import('$lib/utilities/initializer/registry');
	nodes = pendingNodes;
});

// ---- Tests ----

describe('seed tree', () => {
	it('loads the seed nodes', () => {
		expect(nodes.length).toBeGreaterThan(0);
	});

	it('registers every node id only once', () => {
		const ids = nodes.map((node) => node.id);
		const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
		expect(duplicates).toEqual([]);
	});

	it('only references existing nodes in children', () => {
		const ids = new Set(nodes.map((node) => node.id));
		const dangling = nodes.flatMap((node) =>
			node.children
				.flat()
				.filter((childId) => !ids.has(childId))
				.map((childId) => `${node.id} -> ${childId}`)
		);
		expect(dangling).toEqual([]);
	});

	it('lists exactly the parents of every node in users', () => {
		const nodesById = new Map(nodes.map((node) => [node.id, node]));
		const parents = parentsByChildId(nodesById);
		const mismatches = nodes
			.map((node) => {
				const expected = parents.get(node.id) ?? new Set<string>();
				const actual = new Set(node.users);
				return {
					id: node.id,
					missing: [...expected].filter((id) => !actual.has(id)),
					extra: [...actual].filter((id) => !expected.has(id))
				};
			})
			.filter((result) => result.missing.length > 0 || result.extra.length > 0);
		expect(mismatches).toEqual([]);
	});
});
