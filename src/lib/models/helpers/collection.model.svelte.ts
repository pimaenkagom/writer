import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	getFirestore,
	setDoc,
	updateDoc
} from 'firebase/firestore';

import { notify } from '$lib/states/helpers/notifications.svelte';
import type { Identifiable } from './identifiable.model';

export class Collection<T extends Identifiable> {
	private _collectionName: string;

	private _items: Record<string, T> = $state({});

	private _state: 'init' | 'loading' | 'ready' | 'error' = $state('init');

	private get collectionName() {
		return this._collectionName;
	}

	public get items() {
		return this._items;
	}

	private set items(value: Record<string, T>) {
		this._items = value;
	}

	public get values() {
		return Object.values(this.items);
	}

	public get state() {
		return this._state;
	}

	private set state(value: 'init' | 'loading' | 'ready' | 'error') {
		this._state = value;
	}

	constructor(collectionName: string) {
		this._collectionName = collectionName;
	}

	private getCollectionReference() {
		const db = getFirestore();
		return collection(db, this.collectionName);
	}

	private getDocumentReference(id: string) {
		const db = getFirestore();
		return doc(db, this.collectionName, id);
	}

	public async load(): Promise<void> {
		try {
			this.state = 'loading';
			const snapshot = await getDocs(this.getCollectionReference());
			snapshot.docs.forEach((doc) => (this.items[doc.id] = { ...doc.data(), id: doc.id } as T));
			// this.items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }) as T);
			this.state = 'ready';
		} catch (error) {
			this.state = 'error';
			notify(error instanceof Error ? error.message : 'Unknown error while loading a collection');
		}
	}

	public async loadIfNotLoaded() {
		if (this.state !== 'ready') {
			await this.load();
		}
	}

	public async getAll() {
		this.loadIfNotLoaded();
		return this.values;
	}

	public async create(item: Omit<T, 'id'>): Promise<T | null> {
		try {
			const id = crypto.randomUUID().toUpperCase();
			const docRef = doc(this.getCollectionReference(), id);
			const newItem = { ...item, id: docRef.id } as T;

			await setDoc(docRef, newItem);

			this.items[id] = newItem;
			// this.items = [...this.items, newItem];

			return newItem;
		} catch (error) {
			notify(error instanceof Error ? error.message : 'Unknown error while creating a document');
			return null;
		}
	}

	async update(id: string, updates: Partial<Omit<T, 'id'>>): Promise<boolean> {
		try {
			const docRef = this.getDocumentReference(id);
			await updateDoc(docRef, updates);

			this.items[id] = { ...this.items[id], ...updates } as T;
			// this.items = this.items.map((item) => (item.id === id ? { ...item, ...updates } : item));

			return true;
		} catch (error) {
			notify(error instanceof Error ? error.message : 'Unknown error while updating a document');
			return false;
		}
	}

	async remove(id: string): Promise<boolean> {
		try {
			const docRef = this.getDocumentReference(id);
			await deleteDoc(docRef);
			delete this.items[id];
			// this.items = this.items.filter((item) => item.id !== id);
			return true;
		} catch (error) {
			notify(error instanceof Error ? error.message : 'Unknown error while removing a document');
			return false;
		}
	}
}
