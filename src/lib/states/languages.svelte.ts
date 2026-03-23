import { Collection } from '$lib/models/collection.model.svelte';
import type { Language } from '$lib/models/language.model';
import { settings } from '$lib/states/settings.svelte';

export const languages = new Collection<Language>('languages');

export const delimiter = ',';

const selectedLanguages = $derived(settings.value.languages.current.split(delimiter));

export function getSelectedLanguages() {
	return selectedLanguages;
}

const availableLanguanges = $derived(
	languages.values
		.filter((lang) => !selectedLanguages.includes(lang.value))
		.map((lang) => lang.value)
);

export function getAvailablesLanguages() {
	return availableLanguanges;
}

const systemLanguage = $derived(settings.value.systemLanguage.current);

export function getSystemLanguage() {
	return systemLanguage;
}
