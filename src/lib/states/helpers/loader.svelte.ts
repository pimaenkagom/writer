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

export const loader = $state<State<number>>({
	state: 'init',
	value: 100
});

export async function load() {
	loader.state = 'loading';

	loadSettingsIfNotLoaded();

	await libraries.loadIfNotLoaded();
	loader.value /= 2;

	await collections.loadIfNotLoaded();
	loader.value /= 2;

	await books.loadIfNotLoaded();
	loader.value /= 2;

	await parts.loadIfNotLoaded();
	loader.value /= 2;

	await chapters.loadIfNotLoaded();
	loader.value /= 2;

	await sections.loadIfNotLoaded();
	loader.value /= 2;

	await paragraphs.loadIfNotLoaded();
	loader.value /= 2;

	await clauses.loadIfNotLoaded();
	loader.value /= 2;

	await multilingualTexts.loadIfNotLoaded();
	loader.value /= 2;

	await languages.loadIfNotLoaded();
	loader.value /= 2;

	await statuses.loadIfNotLoaded();
	loader.value = 0;

	loader.state = 'ready';
}
