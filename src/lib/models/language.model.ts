import type { id } from '$lib/models/helpers/id.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Language extends Identifiable {
	readonly id: id;
	value: string;
}
