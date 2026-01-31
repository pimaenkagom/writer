import type { State } from '$lib/models/helpers/state.model';
import { settings } from '$lib/states/helpers/settings.svelte';

export const nesting = $derived<State<number>>({
	state: 'ready',
	value: Number(settings.value.nesting.current)
});
