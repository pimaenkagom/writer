import type { Identifiable } from '../helpers/identifiable.model';

export interface Language extends Identifiable {
	id: string;
	value: string;
}
