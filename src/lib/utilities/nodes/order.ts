import { Type } from '$lib/models/type.model';

export const order = [
	Type.Library,
	Type.Collection,
	Type.Book,
	Type.Part,
	Type.Chapter,
	Type.Section,
	Type.Paragraph,
	Type.Clause
] satisfies Array<Type>;
