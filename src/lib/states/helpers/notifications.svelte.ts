import type { State } from '$lib/models/helpers/state.model';

export const notifications = $state<State<string[]>>({
	state: 'ready',
	value: []
});

export function notify(message: string, type: 'info' | 'warning' | 'error' = 'info') {
	notifications.value = [...notifications.value, message];
}

export function clearNotification(index: number) {
	notifications.value = notifications.value.filter((_, i) => i !== index);
}
