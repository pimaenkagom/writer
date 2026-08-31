import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
import '$lib/utilities/initializer/books';
import { pendingNodes, pendingTexts } from '$lib/utilities/initializer/registry';
import '$lib/utilities/initializer/sections-the-liturgy-according-to-basil';
import '$lib/utilities/initializer/sections/section-a-prayer-of-reconciliation';
import '$lib/utilities/initializer/shared/clauses-someone-says';
import '$lib/utilities/initializer/shared/section-the-call-to-prayer';
import '$lib/utilities/initializer/shared/texts-empty';

export async function initializeLibrary() {
	for (const text of pendingTexts) {
		await multilingualTexts.createOrReplace(text);
	}

	for (const node of pendingNodes) {
		await getCollectionForNodeType(node.type).createOrReplace(node);
	}
}
