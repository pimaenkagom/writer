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

export function getCollectionForNodeType(nodeType: NodeType) {
	switch (nodeType) {
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
			throw new Error(`No collection found for type: ${nodeType}`);
	}
}

export function subtypeOf(nodeType: NodeType) {
	const index = order.indexOf(nodeType);
	if (index === -1 || index > order.length - 2) {
		console.log('Aye', order[0]);
		return order[0];
	}
	return order[index + 1];
}
