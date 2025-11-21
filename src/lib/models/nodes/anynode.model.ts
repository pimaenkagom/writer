import type { Book } from './book.model';
import type { Chapter } from './chapter.model';
import type { Clause } from './clause.model';
import type { Collection } from './collection.model';
import type { Library } from './library.model';
import type { Paragraph } from './paragraph.model';
import type { Part } from './part.model';
import type { Section } from './section.model';

type Anynode = Library | Collection | Book | Part | Chapter | Section | Paragraph | Clause;
