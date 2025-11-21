import { languages } from '$lib/states/contents/languages.svelte';
import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
import { statuses } from '$lib/states/contents/statuses.svelte';
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

export async function loadDatabaseData() {
	await Promise.all([
		libraries.load(),
		collections.load(),
		books.load(),
		parts.load(),
		chapters.load(),
		sections.load(),
		paragraphs.load(),
		clauses.load(),

		multilingualTexts.load(),
		languages.load(),
		statuses.load()
	]);
}
