import type { Basenode } from '$lib/models/basenode.model';
import { Collection } from '$lib/models/collection.model.svelte';
import { NodeType } from '$lib/models/node-type.model';
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
		return NodeType.Library;
	}
	if (Object.keys(collections.items).includes(id)) {
		return NodeType.Collection;
	}
	if (Object.keys(books.items).includes(id)) {
		return NodeType.Book;
	}
	if (Object.keys(parts.items).includes(id)) {
		return NodeType.Part;
	}
	if (Object.keys(chapters.items).includes(id)) {
		return NodeType.Chapter;
	}
	if (Object.keys(sections.items).includes(id)) {
		return NodeType.Section;
	}
	if (Object.keys(paragraphs.items).includes(id)) {
		return NodeType.Paragraph;
	}
	if (Object.keys(clauses.items).includes(id)) {
		return NodeType.Clause;
	}
	throw new Error(`No type found for id: ${id}`);
}

export function getModelById(id: string) {
	const type = getTypeFromId(id);
	const collection = getCollectionForType(type);
	const model = collection.items[id];

	return model;
}

export function getCollectionForType(type: NodeType) {
	switch (type) {
		case NodeType.Library:
			return libraries;
		case NodeType.Collection:
			return collections;
		case NodeType.Book:
			return books;
		case NodeType.Part:
			return parts;
		case NodeType.Chapter:
			return chapters;
		case NodeType.Section:
			return sections;
		case NodeType.Paragraph:
			return paragraphs;
		case NodeType.Clause:
			return clauses;
		default:
			throw new Error(`No collection found for type: ${type}`);
	}
}

export function subtypeOf(type: NodeType) {
	const index = order.indexOf(type);
	if (index === -1 || index > order.length) {
		return order[0];
	}
	return order[index + 1];
}
