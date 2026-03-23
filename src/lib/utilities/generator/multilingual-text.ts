import type { MultilingualText } from '$lib/models/multilingual-text.model';
import { languages } from '$lib/states/languages.svelte';
import { delta } from '$lib/utilities/generator/delta';
import { generateId } from '$lib/utilities/generator/id';
import { capitalize, titleize } from '$lib/utilities/strings';
import { faker } from '@faker-js/faker';

function generateWords(wordCount: number) {
	return faker.lorem.words({ min: wordCount - delta, max: wordCount + delta });
}

function generateMultilingualText(min: number, max: number, isTitlized: boolean = false) {
	const wordCount = faker.number.int({ min: min, max: max });

	return {
		id: generateId(),
		texts: {
			...Object.fromEntries(
				languages.values.map((language) => [
					language.value,
					{
						value: isTitlized
							? titleize(generateWords(wordCount))
							: capitalize(generateWords(wordCount)) + '.',
						strongWordsIndices: [],
						emphasizedWordsIndices: [],
						status: '2FFFCC71-17F9-4D8B-958E-D99BE2366F6B'
					}
				])
			)
		}
	} as MultilingualText;
}

export function generateTitle() {
	const minWords = 1;
	const maxWords = 6;
	const isTitlized = true;
	return generateMultilingualText(minWords, maxWords, isTitlized);
}

export function generateSentence() {
	const minWords = 3;
	const maxWords = 12;
	const isTitlized = false;
	return generateMultilingualText(minWords, maxWords, isTitlized);
}
