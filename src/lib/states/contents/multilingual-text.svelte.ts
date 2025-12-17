import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
import { Collection } from '$lib/models/helpers/collection.model.svelte';

export const multilingualTexts = new Collection<MultilingualText>('multilingual_texts');
