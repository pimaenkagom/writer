import type { Basenode } from '$lib/models/basenode.model';
import { Collection } from '$lib/models/collection.model.svelte';
import { Type } from '$lib/models/type.model';
import { order } from '$lib/utilities/nodes/order';

export const libraries = new Collection<Basenode>('libraries');

export const collections = new Collection<Basenode>('collections');

export const books = new Collection<Basenode>('books');

export const parts = new Collection<Basenode>('parts');

export const chapters = new Collection<Basenode>('chapters');

export const sections = new Collection<Basenode>('sections');

export const paragraphs = new Collection<Basenode>('paragraphs');

export const clauses = new Collection<Basenode>('clauses');

export function getTypeFromId(id: string) {
	if (Object.keys(libraries.items).includes(id)) {
		return Type.Library;
	}
	if (Object.keys(collections.items).includes(id)) {
		return Type.Collection;
	}
	if (Object.keys(books.items).includes(id)) {
		return Type.Book;
	}
	if (Object.keys(parts.items).includes(id)) {
		return Type.Part;
	}
	if (Object.keys(chapters.items).includes(id)) {
		return Type.Chapter;
	}
	if (Object.keys(sections.items).includes(id)) {
		return Type.Section;
	}
	if (Object.keys(paragraphs.items).includes(id)) {
		return Type.Paragraph;
	}
	if (Object.keys(clauses.items).includes(id)) {
		return Type.Clause;
	}
	throw new Error(`No type found for id: ${id}`);
}

export function getModelById(id: string) {
	const type = getTypeFromId(id);
	const collection = getCollectionForType(type);
	const model = collection.items[id];

	return model;
}

export function getCollectionForType(type: Type) {
	switch (type) {
		case Type.Library:
			return libraries;
		case Type.Collection:
			return collections;
		case Type.Book:
			return books;
		case Type.Part:
			return parts;
		case Type.Chapter:
			return chapters;
		case Type.Section:
			return sections;
		case Type.Paragraph:
			return paragraphs;
		case Type.Clause:
			return clauses;
		default:
			throw new Error(`No collection found for type: ${type}`);
	}
}

export function subtypeOf(type: Type) {
	const index = order.indexOf(type);
	if (index === -1 || index > order.length) {
		return order[0];
	}
	return order[index + 1];
}
