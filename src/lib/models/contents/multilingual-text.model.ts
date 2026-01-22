import type { Text } from '$lib/models/contents/text.model';

export interface MultilingualText {
	readonly id: string;
	texts: Record<string, Text>;
}
