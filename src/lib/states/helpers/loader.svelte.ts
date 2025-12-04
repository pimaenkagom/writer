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

export const dataLoader = $state<State<number>>({
	state: 'init',
	value: 100
});

export async function loadData() {
	dataLoader.state = 'loading';

	loadSettingsIfNotLoaded();

	await libraries.loadIfNotLoaded();
	dataLoader.value /= 2;

	await collections.loadIfNotLoaded();
	dataLoader.value /= 2;

	await books.loadIfNotLoaded();
	dataLoader.value /= 2;

	await parts.loadIfNotLoaded();
	dataLoader.value /= 2;

	await chapters.loadIfNotLoaded();
	dataLoader.value /= 2;

	await sections.loadIfNotLoaded();
	dataLoader.value /= 2;

	await paragraphs.loadIfNotLoaded();
	dataLoader.value /= 2;

	await clauses.loadIfNotLoaded();
	dataLoader.value /= 2;

	await multilingualTexts.loadIfNotLoaded();
	dataLoader.value /= 2;

	await languages.loadIfNotLoaded();
	dataLoader.value /= 2;

	await statuses.loadIfNotLoaded();
	dataLoader.value = 0;

	dataLoader.state = 'ready';
}
