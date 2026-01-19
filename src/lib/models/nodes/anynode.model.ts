import type { Book } from '$lib/models/nodes/book.model';
import type { Chapter } from '$lib/models/nodes/chapter.model';
import type { Clause } from '$lib/models/nodes/clause.model';
import type { Collection } from '$lib/models/nodes/collection.model';
import type { Library } from '$lib/models/nodes/library.model';
import type { Paragraph } from '$lib/models/nodes/paragraph.model';
import type { Part } from '$lib/models/nodes/part.model';
import type { Section } from '$lib/models/nodes/section.model';

export type Anynode = Library | Collection | Book | Part | Chapter | Section | Paragraph | Clause;
