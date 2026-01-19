import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Tag extends Identifiable {
	id: string;
	value: string;
}
