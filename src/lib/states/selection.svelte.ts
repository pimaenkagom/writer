import type { Basenode } from '$lib/models/basenode.model';
import type { State } from '$lib/models/helpers/state.model';
import type { Type } from '$lib/models/type.model';
import { getCollectionForType } from '$lib/states/nodes.svelte';
import { setSetting, settings } from '$lib/states/settings.svelte';
import { order } from '$lib/utilities/nodes/order';

function getSettingsValue(type: Type) {
	return JSON.parse(settings.value[type].current) as [number, number] | null;
}

export const selection = $state<State<Record<Type, [number, number] | null>>>({
	state: 'init',
	value: Object.fromEntries(order.map((type) => [type, null])) as Record<
		Type,
		[number, number] | null
	>
});

export function loadSelectionFromSettings() {
	selection.state = 'loading';
	for (const type of order) {
		selection.value[type] = getSettingsValue(type);
	}
	selection.state = 'ready';
}

export function getSelectedNodes() {
	const result: Basenode[] = [];

	for (const type of order) {
		const selected = selection.value[type];

		if (selected === null) {
			break;
		}

		const isRoot = result.length === 0;
		if (isRoot) {
			result.push(getCollectionForType(type).values[selected[0]]);
		} else {
			const nextNodeId = result[result.length - 1].children[selected[0]][selected[1]];
			result.push(getCollectionForType(type).items[nextNodeId]);
		}
	}

	return result;
}

export function select(index: number, alternative: number = 0) {
	for (const type of order) {
		if (selection.value[type] === null) {
			setSetting(type, JSON.stringify([index, alternative]));
			selection.value[type] = [index, alternative];
			break;
		}
	}
}

export function unselect() {
	for (const type of order.toReversed()) {
		if (selection.value[type] !== null) {
			setSetting(type, JSON.stringify(null));
			selection.value[type] = null;
			break;
		}
	}
}

export function unselectUntilType(type: Type) {
	const startIndex = order.indexOf(type) + 1;

	for (let i = startIndex; i < order.length; ++i) {
		const currentType = order[i];
		setSetting(currentType, JSON.stringify(null));
		selection.value[currentType] = null;
	}
}
