import { Collection } from '$lib/models/helpers/collection.model.svelte';
import { Type } from '$lib/models/helpers/type.model';
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

export function getModelById(id: string): Anynode {
	const type = getTypeFromId(id);
	const collection = getCollectionForType(type);
	const model = collection.items[id];

	return model;
}

export function getCollectionForType(type: Type): Collection<Anynode> {
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
