import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { Selection } from '$lib/models/helpers/selection.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: keyof Selection;
	value: string;
	shown: boolean;
	tags: string[];
	// TODO Make it 2D.
	children: string[];
	childrenTypes: string[];
	// TODO Add field an image or icon.
}
