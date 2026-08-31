import type { Basenode } from '$lib/models/basenode.model';
import type { MultilingualText } from '$lib/models/multilingual-text.model';

export const pendingTexts: MultilingualText[] = [];
export const pendingNodes: Basenode[] = [];

export function registerText<T extends MultilingualText>(text: T): T {
	pendingTexts.push(text);
	return text;
}

export function registerNode<T extends Basenode>(node: T): T {
	pendingNodes.push(node);
	return node;
}
