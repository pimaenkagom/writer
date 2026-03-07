import { Collection } from '$lib/models/helpers/collection.model.svelte';
import { NodeType } from '$lib/models/helpers/node-types.model';
import type { Anynode } from '$lib/models/nodes/anynode.model';
import type { Book } from '$lib/models/nodes/book.model';
import type { Chapter } from '$lib/models/nodes/chapter.model';
import type { Clause } from '$lib/models/nodes/clause.model';
import type { Collection as NodeCollection } from '$lib/models/nodes/collection.model';
import type { Library } from '$lib/models/nodes/library.model';
import type { Paragraph } from '$lib/models/nodes/paragraph.model';
import type { Part } from '$lib/models/nodes/part.model';
import type { Section } from '$lib/models/nodes/section.model';
import { order } from '$lib/utilities/nodes/order';

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

export function getModelById(id: string): Anynode {
	const type = getTypeFromId(id);
	const collection = getCollectionForType(type);
	const model = collection.items[id];

	return model;
}

export function getCollectionForType(type: NodeType): Collection<Anynode> {
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

export function subtypeOf(type: NodeType): NodeType {
	const index = order.indexOf(type);
	if (index === -1 || index > order.length) {
		return order[0];
	}
	return order[index + 1];
}
