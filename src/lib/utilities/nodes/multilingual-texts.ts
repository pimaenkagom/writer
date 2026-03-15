import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/contents/content-type.model';
import { multilingualTexts } from '$lib/states/multilingual-text.svelte';

export function getMultilingualText(node: Basenode) {
	if (node.contentType !== ContentType.MultilingualText) {
		throw Error(
			`The content type if node ${node.id} (${node.nodeType}) is not a multilingual text.`
		);
	}

	return multilingualTexts.items[node.content];
}
