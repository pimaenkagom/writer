import type { Identifiable } from '../helpers/identifiable.model';

export interface Tag extends Identifiable {
	id: string;
	value: string;
}
