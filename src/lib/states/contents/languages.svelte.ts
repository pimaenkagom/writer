import type { Language } from '$lib/models/contents/language.model';
import { Collection } from '$lib/models/helpers/collection.model.svelte';

export const languages = new Collection<Language>('languages');
