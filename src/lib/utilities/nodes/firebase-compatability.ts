import type { Basenode } from '$lib/models/basenode.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { Type } from '$lib/models/type.model';

export interface FirebaseNode extends Identifiable {
	readonly id: string;
	users: string[];
	type: Type;
	value: string;
	shown: boolean;
	tags: string[];
	children: string[];
}

export function toBasenode(node: FirebaseNode): Basenode {
	return {
		id: node.id,
		users: node.users,
		type: node.type,
		value: node.value,
		shown: node.shown,
		tags: node.tags,
		children: node.children.map((group) => JSON.parse(group) as string[])
	};
}

export function toFirebaseNode(node: Basenode): FirebaseNode {
	return {
		id: node.id,
		users: node.users,
		type: node.type,
		value: node.value,
		shown: node.shown,
		tags: node.tags,
		children: node.children.map((group) => JSON.stringify(group))
	};
}
