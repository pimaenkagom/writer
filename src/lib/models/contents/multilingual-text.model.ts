import type { Text } from './text.model';

export interface MultilingualText {
	readonly id: string;
	texts: Record<string, Text>;
}
