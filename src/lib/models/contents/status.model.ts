import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Status extends Identifiable {
	id: string;
	value: string;
}
