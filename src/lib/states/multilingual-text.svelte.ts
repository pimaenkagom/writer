import { Collection } from '$lib/models/collection.model.svelte';
import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';

export const multilingualTexts = new Collection<MultilingualText>('multilingual_texts');
