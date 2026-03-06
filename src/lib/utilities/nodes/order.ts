import { NodeType } from '$lib/models/helpers/node-types.model';

export const order = [
	NodeType.Library,
	NodeType.Collection,
	NodeType.Book,
	NodeType.Part,
	NodeType.Chapter,
	NodeType.Section,
	NodeType.Paragraph,
	NodeType.Clause
] satisfies Array<NodeType>;
