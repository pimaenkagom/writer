import type { id } from '$lib/models/helpers/id.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Text extends Identifiable {
	readonly id: id;
	readonly language: string;
	value: string;
	strongWordsIndices: number[];
	emphasizedWordsIndices: number[];
	status: string;
}
