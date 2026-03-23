import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { multilingualTexts } from '$lib/states/multilingual-text.svelte';

export function getMultilingualText(node: Basenode) {
	if (node.valueType !== ContentType.MultilingualText) {
		throw Error(`The content type if node ${node.id} (${node.type}) is not a multilingual text.`);
	}

	return multilingualTexts.items[node.value];
}
