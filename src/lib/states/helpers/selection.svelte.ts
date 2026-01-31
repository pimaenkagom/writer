import type { Selection } from '$lib/models/helpers/selection.model';
import type { State } from '$lib/models/helpers/state.model';
import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
import { order } from '$lib/utilities/nodes/order';

export const selection = $state<State<Selection>>({
	state: 'init',
	value: {
		...Object.fromEntries(order.map((type) => [type, null]))
	} as unknown as Selection
});

export function load() {
	selection.state = 'loading';
	for (const type of order) {
		const value = Number(settings.value[type].current);
		selection.value[type] = isNaN(value) ? null : value;
	}
	selection.state = 'ready';
}

export function select(index: number) {
	for (const type of order) {
		if (!selection.value[type]) {
			setSetting(type, String(index));
			break;
		}
	}
}

export function unselect() {
	for (const type of order.toReversed()) {
		if (!selection.value[type]) {
			setSetting(type, String(null));
			break;
		}
	}
}

load();
