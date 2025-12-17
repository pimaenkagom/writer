import { Collection } from '$lib/models/helpers/collection.model.svelte';
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
