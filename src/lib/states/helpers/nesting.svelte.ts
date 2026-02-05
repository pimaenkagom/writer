import type { State } from '$lib/models/helpers/state.model';
import { selection } from '$lib/states/helpers/selection.svelte';
import { settings } from '$lib/states/helpers/settings.svelte';
import { order } from '$lib/utilities/nodes/order';

const nesting = $derived<State<number>>({
	state: 'ready',
	value: Number(settings.value.nesting.current)
});

export function getNesting() {
	return nesting.value;
}

const currentNesting = $derived(order.filter((type) => selection.value[type] !== null).length);

export function getCurrentNesting() {
	return currentNesting;
}
