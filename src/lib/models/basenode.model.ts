import type { ContentType } from '$lib/models/contents/content-type.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { NodeType } from '$lib/models/node-type.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: NodeType;
	content: string;
	contentType: ContentType;
	shown: boolean;
	tags: string[];
	children: string[][];
	// TODO Add level, specific types, footnote and meta data
	// TODO Add field an image or icon.
}
