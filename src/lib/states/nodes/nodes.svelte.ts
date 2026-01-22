import { Collection } from '$lib/models/helpers/collection.model.svelte';
import type { Anynode } from '$lib/models/nodes/anynode.model';
import type { Book } from '$lib/models/nodes/book.model';
import type { Chapter } from '$lib/models/nodes/chapter.model';
import type { Clause } from '$lib/models/nodes/clause.model';
import type { Collection as NodeCollection } from '$lib/models/nodes/collection.model';
import type { Library } from '$lib/models/nodes/library.model';
import type { Paragraph } from '$lib/models/nodes/paragraph.model';
import type { Part } from '$lib/models/nodes/part.model';
import type { Section } from '$lib/models/nodes/section.model';

export const libraries = new Collection<Library>('libraries');

export const collections = new Collection<NodeCollection>('collections');

export const books = new Collection<Book>('books');

export const parts = new Collection<Part>('parts');

export const chapters = new Collection<Chapter>('chapters');

export const sections = new Collection<Section>('sections');

export const paragraphs = new Collection<Paragraph>('paragraphs');

export const clauses = new Collection<Clause>('clauses');

export function getTypeFromId(id: string) {
	if (Object.keys(libraries.items).includes(id)) {
		return 'library';
	}
	if (Object.keys(collections.items).includes(id)) {
		return 'collection';
	}
	if (Object.keys(books.items).includes(id)) {
		return 'book';
	}
	if (Object.keys(parts.items).includes(id)) {
		return 'part';
	}
	if (Object.keys(chapters.items).includes(id)) {
		return 'chapter';
	}
	if (Object.keys(sections.items).includes(id)) {
		return 'section';
	}
	if (Object.keys(paragraphs.items).includes(id)) {
		return 'paragraph';
	}
	if (Object.keys(clauses.items).includes(id)) {
		return 'clause';
	}
	throw new Error(`No type found for id: ${id}`);
}

export function getModelById(id: string): Anynode {
	const type = getTypeFromId(id);
	const collection = getCollectionForType(type);
	const model = collection.items[id];

	return model;
}

export function getCollectionForType(type: string): Collection<Anynode> {
	switch (type) {
		case 'library':
			return libraries;
		case 'collection':
			return collections;
		case 'book':
			return books;
		case 'part':
			return parts;
		case 'chapter':
			return chapters;
		case 'section':
			return sections;
		case 'paragraph':
			return paragraphs;
		case 'clause':
			return clauses;
		default:
			throw new Error(`No collection found for type: ${type}`);
	}
}

export function subtypeOf(type: string): string {
	switch (type) {
		case 'library':
			return 'collection';
		case 'collection':
			return 'book';
		case 'book':
			return 'part';
		case 'part':
			return 'chapter';
		case 'chapter':
			return 'section';
		case 'section':
			return 'paragraph';
		case 'paragraph':
			return 'clause';
		default:
			throw new Error(`No collection found for type: ${type}`);
	}
}
