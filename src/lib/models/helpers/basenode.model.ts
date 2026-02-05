import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: string;
	value: string;
	shown: boolean;
	tags: string[];
	// TODO Make it 2D.
	children: string[];
	childrenTypes: string[];
	// TODO Add field an image or icon.
}
