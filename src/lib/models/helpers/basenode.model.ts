import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { Type } from '$lib/models/helpers/type.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: Type;
	value: string;
	shown: boolean;
	tags: string[];
	children: string[][];
	// TODO Add field an image or icon.
}
