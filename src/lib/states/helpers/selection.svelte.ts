import type { Basenode } from '$lib/models/helpers/basenode.model';
import type { State } from '$lib/models/helpers/state.model';
import type { Type } from '$lib/models/helpers/type.model';
import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
import { getCollectionForType } from '$lib/states/nodes/nodes.svelte';
import { order } from '$lib/utilities/nodes/order';

function getSettingsValue(type: Type) {
	const value = Number(settings.value[type].current);
	return isNaN(value) ? null : value;
}

export const selection = $state<State<Record<Type, number | null>>>({
	state: 'init',
	value: Object.fromEntries(order.map((type) => [type, null])) as Record<Type, number | null>
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
			result.push(getCollectionForType(type).values[selected]);
		} else {
			const nextNodeId = result[result.length - 1].children[selected];
			result.push(getCollectionForType(type).items[nextNodeId]);
		}
	}

	return result;
}

export function select(index: number) {
	for (const type of order) {
		if (selection.value[type] === null) {
			setSetting(type, String(index));
			selection.value[type] = index;
			break;
		}
	}
}

export function unselect() {
	for (const type of order.toReversed()) {
		if (selection.value[type] !== null) {
			setSetting(type, String(null));
			selection.value[type] = null;
			break;
		}
	}
}

export function unselectUntilType(type: Type) {
	const startIndex = order.indexOf(type) + 1;

	for (let i = startIndex; i < order.length; ++i) {
		const currentType = order[i];
		setSetting(currentType, String(null));
		selection.value[currentType] = null;
	}
}
