import type { State } from '$lib/models/helpers/state.model';

import { languages } from '$lib/states/contents/languages.svelte';
import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
import { statuses } from '$lib/states/contents/statuses.svelte';
import { loadSettingsIfNotLoaded } from '$lib/states/helpers/settings.svelte';
import {
	books,
	chapters,
	clauses,
	collections,
	libraries,
	paragraphs,
	parts,
	sections
} from '$lib/states/nodes/nodes.svelte';

export const dataLoaderMaxValue = 100;

export const dataLoader = $state<State<number>>({
	state: 'init',
	value: 0
});

function increase() {
	dataLoader.value = (dataLoaderMaxValue + dataLoader.value) / 2;
}

export async function loadData() {
	dataLoader.state = 'loading';

	await libraries.loadIfNotLoaded();
	increase();

	await collections.loadIfNotLoaded();
	increase();

	await books.loadIfNotLoaded();
	increase();

	await parts.loadIfNotLoaded();
	increase();

	await chapters.loadIfNotLoaded();
	increase();

	await sections.loadIfNotLoaded();
	increase();

	await paragraphs.loadIfNotLoaded();
	increase();

	await clauses.loadIfNotLoaded();
	increase();

	await multilingualTexts.loadIfNotLoaded();
	increase();

	await languages.loadIfNotLoaded();
	increase();

	await statuses.loadIfNotLoaded();
	increase();

	loadSettingsIfNotLoaded();
	increase();

	dataLoader.value = dataLoaderMaxValue;
	dataLoader.state = 'ready';
}
