import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Tag extends Identifiable {
	readonly id: string;
	value: string;
}
