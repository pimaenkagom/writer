import type { Language } from '$lib/models/contents/language.model';
import { Collection } from '$lib/models/helpers/collection.model.svelte';
import { settings } from '$lib/states/helpers/settings.svelte';

export const languages = new Collection<Language>('languages');

export const delimiter = ',';

const selectedLanguages = $derived(settings.value.languages.current.split(delimiter));

export function getSelectedLanguages() {
	return selectedLanguages;
}

const availableLanguanges = $derived(languages.values.map((lang) => lang.value));

export function getAvailablesLanguages() {
	return availableLanguanges;
}
