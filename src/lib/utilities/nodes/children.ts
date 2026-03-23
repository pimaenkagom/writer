import type { Basenode } from '$lib/models/basenode.model';
import { getCollectionForNodeType, subtypeOf } from '$lib/states/nodes.svelte';

export function getChildnodes(node: Basenode) {
	const childrenType = subtypeOf(node.type);
	const collection = getCollectionForNodeType(childrenType);
	const children = node.children.map((alternatives) =>
		alternatives.map((id) => collection.items[id])
	);

	return children;
}
