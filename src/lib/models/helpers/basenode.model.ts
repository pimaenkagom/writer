import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { NodeType } from '$lib/models/helpers/node-types.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: NodeType;
	value: string;
	shown: boolean;
	tags: string[];
	// TODO Make it 2D.
	children: string[];
	childrenTypes: string[];
	// TODO Add field an image or icon.
}
