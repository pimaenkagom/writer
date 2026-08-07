import type { State } from '$lib/models/helpers/state.model';

import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { emptyText } from '$lib/utilities/templater/multilingual-texts/texts-empty';
import {
	textTheAbbotSays,
	textTheAnagnostistSays,
	textTheArchdeaconSays,
	textTheBishopSays,
	textTheDeaconSays,
	textTheHegumenSays,
	textTheHighestPriestlyOrderPresentSays,
	textTheHypodeaconSays,
	textTheMetropolitanSays,
	textTheMonkToBeSays,
	textTheNunToBeSays,
	textThePatriarchSays,
	textThePeopleSays,
	textThePresbyterSays,
	textThePriestSays,
	textThePsaltistSays
} from '$lib/utilities/templater/multilingual-texts/texts-someone-says';

export const initializer = $state<State<boolean>>({
	state: 'init',
	value: false
});

export async function initialize() {
	initializer.state = 'loading';

	await multilingualTexts.createOrReplace(emptyText);
	await multilingualTexts.createOrReplace(textThePatriarchSays);
	await multilingualTexts.createOrReplace(textTheMetropolitanSays);
	await multilingualTexts.createOrReplace(textTheBishopSays);
	await multilingualTexts.createOrReplace(textTheHegumenSays);
	await multilingualTexts.createOrReplace(textThePresbyterSays);
	await multilingualTexts.createOrReplace(textTheHighestPriestlyOrderPresentSays);
	await multilingualTexts.createOrReplace(textThePriestSays);
	await multilingualTexts.createOrReplace(textTheArchdeaconSays);
	await multilingualTexts.createOrReplace(textTheDeaconSays);
	await multilingualTexts.createOrReplace(textTheHypodeaconSays);
	await multilingualTexts.createOrReplace(textTheAnagnostistSays);
	await multilingualTexts.createOrReplace(textThePsaltistSays);
	await multilingualTexts.createOrReplace(textThePeopleSays);
	await multilingualTexts.createOrReplace(textTheAbbotSays);
	await multilingualTexts.createOrReplace(textTheMonkToBeSays);
	await multilingualTexts.createOrReplace(textTheNunToBeSays);

	initializer.state = 'ready';
	initializer.value = true;
}
