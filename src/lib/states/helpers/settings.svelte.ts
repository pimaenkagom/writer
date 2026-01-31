import type { Setting } from '$lib/models/helpers/setting.model';
import type { State } from '$lib/models/helpers/state.model';
import { order } from '$lib/utilities/nodes/order';

export const settings = $state<State<Record<string, Setting>>>({
	state: 'init',
	value: {
		appearance: {
			key: 'appearance',
			current: 'auto',
			availables: ['light', 'dark', 'auto'],
			default: 'auto',
			shown: true
		},
		mode: {
			key: 'mode',
			current: 'scroll',
			availables: ['scroll', 'slides'],
			default: 'scroll',
			shown: true
		},
		languages: {
			key: 'languages',
			current: 'coptic,arabic,english,german',
			availables: [],
			default: 'coptic,arabic,english,german',
			shown: true
		},
		nesting: {
			key: 'nesting',
			current: '4',
			availables: order.map((_, index) => String(index)),
			default: '4',
			shown: true
		},
		...Object.fromEntries(
			order.map((type) => [
				type,
				{
					key: type,
					current: String(null),
					availables: [],
					default: String(null),
					shown: true
				}
			])
		)
	}
});

function cleanUnusedSettings() {
	const validKeys = new Set(Object.keys(settings.value));
	for (let i = 0; i < localStorage.length; ++i) {
		const key = localStorage.key(i);
		if (key != null && !validKeys.has(key)) {
			localStorage.removeItem(key);
		}
	}
}

function settingIsValid(key: keyof typeof settings.value, value: string) {
	const setting = settings.value[key];

	if (setting.availables.length === 0) {
		return true;
	}

	if (setting.availables.includes(value)) {
		return true;
	}

	return false;
}

export function initializeSettings() {
	settings.state = 'loading';
	for (const key of Object.keys(settings.value) as Array<keyof typeof settings.value>) {
		const savedValue = localStorage.getItem(key);

		if (savedValue == null) {
			continue;
		}

		if (settingIsValid(key, savedValue)) {
			settings.value[key].current = savedValue;
		} else {
			settings.value[key].current = settings.value[key].default;
		}
	}

	cleanUnusedSettings();
	settings.state = 'ready';
}

export function loadSettingsIfNotLoaded() {
	if (settings.state !== 'ready') {
		initializeSettings();
	}
}

export function setSetting(key: keyof typeof settings.value, value: string) {
	if (settingIsValid(key, value)) {
		settings.value[key].current = value;
		localStorage.setItem(key, value);
	}
}
