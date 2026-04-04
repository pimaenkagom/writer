import { Collection } from '$lib/models/collection.model.svelte';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// ---- Firebase mock ----

const firestore = {
	docs: [] as { id: string; data: () => Record<string, unknown> }[],
	setDocData: null as Record<string, unknown> | null,
	updateDocData: null as Record<string, unknown> | null,
	deletedDocId: null as string | null,
	error: null as Error | null
};

vi.mock('firebase/firestore', () => ({
	getFirestore: vi.fn(() => ({})),

	collection: vi.fn((_, name) => ({ _name: name })),

	doc: vi.fn((_, name, id) => ({ _name: name, id: id ?? 'generated-id' })),

	getDocs: vi.fn(async () => {
		if (firestore.error) throw firestore.error;
		return { docs: firestore.docs };
	}),

	setDoc: vi.fn(async (ref, data) => {
		if (firestore.error) throw firestore.error;
		firestore.setDocData = data;
	}),

	updateDoc: vi.fn(async (ref, data) => {
		if (firestore.error) throw firestore.error;
		firestore.updateDocData = data;
	}),

	deleteDoc: vi.fn(async () => {
		if (firestore.error) throw firestore.error;
	})
}));

vi.mock('$lib/states/notifications.svelte', () => ({
	notify: vi.fn()
}));

vi.mock('$lib/utilities/generator/id', () => ({
	generateId: vi.fn(() => 'generated-id')
}));

// ---- test types ----

interface Item extends Identifiable {
	readonly id: string;
	name: string;
	tags: string[][];
}

// ---- helpers ----

function firestoreDoc(id: string, data: Record<string, unknown>) {
	return { id, data: () => data };
}

function resetFirestore() {
	firestore.docs = [];
	firestore.setDocData = null;
	firestore.updateDocData = null;
	firestore.deletedDocId = null;
	firestore.error = null;
}

beforeEach(resetFirestore);

// ---- state ----

describe('state', () => {
	it('starts at init', () => {
		const col = new Collection<Item>('items');
		expect(col.state).toBe('init');
	});

	it('is ready after successful load', async () => {
		const col = new Collection<Item>('items');
		await col.load();
		expect(col.state).toBe('ready');
	});

	it('is error after failed load', async () => {
		firestore.error = new Error('Firestore down');
		const col = new Collection<Item>('items');
		await col.load();
		expect(col.state).toBe('error');
	});
});

// ---- load ----

describe('load', () => {
	it('populates items from Firestore docs', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha' }), firestoreDoc('b2', { name: 'Beta' })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(col.items['a1']).toMatchObject({ id: 'a1', name: 'Alpha' });
		expect(col.items['b2']).toMatchObject({ id: 'b2', name: 'Beta' });
	});

	it('deserializes nested arrays stored as JSON strings', async () => {
		firestore.docs = [firestoreDoc('n1', { name: 'Node', tags: ['["x","y"]', '["z"]'] })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(col.items['n1'].tags).toEqual([['x', 'y'], ['z']]);
	});

	it('leaves plain string arrays as-is', async () => {
		firestore.docs = [firestoreDoc('n1', { name: 'Node', tags: ['not-json', 'also-not-json'] })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(col.items['n1'].tags).toEqual(['not-json', 'also-not-json']);
	});

	it('leaves string arrays that parse to non-arrays as-is', async () => {
		firestore.docs = [firestoreDoc('n1', { name: 'Node', tags: ['"string"', '42'] })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(col.items['n1'].tags).toEqual(['"string"', '42']);
	});

	it('notifies on error', async () => {
		const { notify } = await import('$lib/states/notifications.svelte');
		firestore.error = new Error('boom');
		const col = new Collection<Item>('items');
		await col.load();

		expect(notify).toHaveBeenCalledWith('boom');
	});
});

// ---- values ----

describe('values', () => {
	it('returns empty array initially', () => {
		const col = new Collection<Item>('items');
		expect(col.values).toEqual([]);
	});

	it('returns all loaded items as array', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha' }), firestoreDoc('b2', { name: 'Beta' })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(col.values).toHaveLength(2);
	});
});

// ---- loadIfNotLoaded ----

describe('loadIfNotLoaded', () => {
	it('calls load when state is init', async () => {
		const col = new Collection<Item>('items');
		const spy = vi.spyOn(col, 'load');
		await col.loadIfNotLoaded();

		expect(spy).toHaveBeenCalledOnce();
	});

	it('does not call load again when already ready', async () => {
		const col = new Collection<Item>('items');
		await col.load();
		const spy = vi.spyOn(col, 'load');
		await col.loadIfNotLoaded();

		expect(spy).not.toHaveBeenCalled();
	});
});

// ---- create ----

describe('create', () => {
	it('adds the new item to items with the generated id', async () => {
		const col = new Collection<Item>('items');
		const result = await col.create({ name: 'New', tags: [] });

		expect(result).not.toBeNull();
		expect(result!.id).toBe('generated-id');
		expect(col.items['generated-id']).toMatchObject({ name: 'New' });
	});

	it('serializes nested arrays when writing to Firestore', async () => {
		const col = new Collection<Item>('items');
		await col.create({ name: 'Node', tags: [['x', 'y'], ['z']] });

		expect(firestore.setDocData?.tags).toEqual(['["x","y"]', '["z"]']);
	});

	it('returns null and notifies on Firestore error', async () => {
		const { notify } = await import('$lib/states/notifications.svelte');
		firestore.error = new Error('write failed');
		const col = new Collection<Item>('items');
		const result = await col.create({ name: 'New', tags: [] });

		expect(result).toBeNull();
		expect(notify).toHaveBeenCalledWith('write failed');
	});
});

// ---- update ----

describe('update', () => {
	it('updates the item in the local cache', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();

		await col.update('a1', { name: 'Updated' });

		expect(col.items['a1'].name).toBe('Updated');
	});

	it('serializes nested arrays on update', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();

		await col.update('a1', { tags: [['x'], ['y', 'z']] });

		expect(firestore.updateDocData?.tags).toEqual(['["x"]', '["y","z"]']);
	});

	it('returns true on success', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(await col.update('a1', { name: 'X' })).toBe(true);
	});

	it('returns false and notifies on error', async () => {
		const { notify } = await import('$lib/states/notifications.svelte');
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();
		firestore.error = new Error('update failed');

		const result = await col.update('a1', { name: 'X' });

		expect(result).toBe(false);
		expect(notify).toHaveBeenCalledWith('update failed');
	});
});

// ---- remove ----

describe('remove', () => {
	it('removes the item from the local cache', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();

		await col.remove('a1');

		expect(col.items['a1']).toBeUndefined();
	});

	it('returns true on success', async () => {
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();

		expect(await col.remove('a1')).toBe(true);
	});

	it('returns false and notifies on error', async () => {
		const { notify } = await import('$lib/states/notifications.svelte');
		firestore.docs = [firestoreDoc('a1', { name: 'Alpha', tags: [] })];
		const col = new Collection<Item>('items');
		await col.load();
		firestore.error = new Error('delete failed');

		const result = await col.remove('a1');

		expect(result).toBe(false);
		expect(notify).toHaveBeenCalledWith('delete failed');
	});
});
