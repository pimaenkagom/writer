import type { Identifiable } from './identifiable.model';

export interface Basenode extends Identifiable {
	readonly id: string;
	users: string[];
	type: string;
	value: string;
	shown: boolean;
	tags: string[];
	children: string[];
	// TODO Add image or icon field
}
