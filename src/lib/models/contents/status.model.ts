import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Status extends Identifiable {
	readonly id: string;
	value: string;
}
