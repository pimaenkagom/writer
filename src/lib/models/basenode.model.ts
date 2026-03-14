import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { NodeType } from '$lib/models/node-type.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: NodeType;
	value: string;
	shown: boolean;
	tags: string[];
	children: string[][];
	// TODO Add field an image or icon.
}
