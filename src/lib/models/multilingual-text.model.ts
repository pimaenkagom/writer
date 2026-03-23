import type { id } from '$lib/models/helpers/id.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { Text } from '$lib/models/text.model';

export interface MultilingualText extends Identifiable {
	readonly id: id;
	texts: Record<string, Text>;
}
