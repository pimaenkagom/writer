import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Language extends Identifiable {
	readonly id: string;
	value: string;
}
