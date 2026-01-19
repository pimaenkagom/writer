import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Language extends Identifiable {
	id: string;
	value: string;
}
