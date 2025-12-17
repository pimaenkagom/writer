import type { Identifiable } from '../helpers/identifiable.model';

export interface Status extends Identifiable {
	id: string;
	value: string;
}
