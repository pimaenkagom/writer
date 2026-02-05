import type { Selection } from '$lib/models/helpers/selection.model';

export const order = [
	'library',
	'collection',
	'book',
	'part',
	'chapter',
	'section',
	'paragraph',
	'clause'
] satisfies Array<keyof Selection>;
