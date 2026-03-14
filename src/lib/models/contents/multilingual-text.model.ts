import type { Text } from '$lib/models/contents/text.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface MultilingualText extends Identifiable {
	readonly id: string;
	texts: Record<string, Text>;
}
