import type { MultilingualText } from '$lib/models/multilingual-text.model';
import { languages } from '$lib/states/languages.svelte';
import { delta } from '$lib/utilities/generator/delta';
import { generateId } from '$lib/utilities/generator/id';
import { capitalize, titleize } from '$lib/utilities/strings';
import { faker } from '@faker-js/faker';

function toCoptic(text: string) {
	const map: Record<string, string> = {
		a: 'ⲁ',
		b: 'ⲃ',
		c: 'ⲕ',
		d: 'ⲇ',
		e: 'ⲉ',
		f: 'ⲫ',
		g: 'ⲅ',
		h: 'ⲏ',
		i: 'ⲓ',
		j: 'ⲓ',
		k: 'ⲕ',
		l: 'ⲗ',
		m: 'ⲙ',
		n: 'ⲛ',
		o: 'ⲟ',
		p: 'ⲡ',
		q: 'ⲕ',
		r: 'ⲣ',
		s: 'ⲥ',
		t: 'ⲧ',
		u: 'ⲩ',
		v: 'ⲃ',
		w: 'ⲱ',
		x: 'ⲝ',
		y: 'ⲩ',
		z: 'ⲍ',
		A: 'Ⲁ',
		B: 'Ⲃ',
		C: 'Ⲕ',
		D: 'Ⲇ',
		E: 'Ⲉ',
		F: 'Ⲫ',
		G: 'Ⲅ',
		H: 'Ⲏ',
		I: 'Ⲓ',
		J: 'Ⲓ',
		K: 'Ⲕ',
		L: 'Ⲗ',
		M: 'Ⲙ',
		N: 'Ⲛ',
		O: 'Ⲟ',
		P: 'Ⲡ',
		Q: 'Ⲕ',
		R: 'Ⲣ',
		S: 'Ⲥ',
		T: 'Ⲧ',
		U: 'Ⲩ',
		V: 'Ⲃ',
		W: 'Ⲱ',
		X: 'Ⲝ',
		Y: 'Ⲩ',
		Z: 'Ⲍ'
	};
	return text
		.split('')
		.map((ch) => map[ch] ?? ch)
		.join('');
}

function toArabic(text: string) {
	const map: Record<string, string> = {
		a: 'ا',
		b: 'ب',
		c: 'ك',
		d: 'د',
		e: 'ي',
		f: 'ف',
		g: 'ج',
		h: 'ه',
		i: 'ي',
		j: 'ج',
		k: 'ك',
		l: 'ل',
		m: 'م',
		n: 'ن',
		o: 'و',
		p: 'ب',
		q: 'ق',
		r: 'ر',
		s: 'س',
		t: 'ت',
		u: 'و',
		v: 'ف',
		w: 'و',
		x: 'خ',
		y: 'ي',
		z: 'ز'
	};
	return text
		.toLowerCase()
		.split('')
		.map((ch) => map[ch] ?? ch)
		.join('');
}

function generateWords(wordCount: number) {
	return faker.lorem.words({ min: wordCount - delta, max: wordCount + delta });
}

function generateMultilingualText(min: number, max: number, isTitlized: boolean = false) {
	const wordCount = faker.number.int({ min: min, max: max });

	return {
		id: generateId(),
		texts: {
			...Object.fromEntries(
				languages.values.map((language) => {
					const text = {
						value: isTitlized
							? titleize(generateWords(wordCount))
							: capitalize(generateWords(wordCount)) + '.',
						strongWordsIndices: [],
						emphasizedWordsIndices: [],
						status: '2FFFCC71-17F9-4D8B-958E-D99BE2366F6B'
					};

					if (language.value == 'coptic') {
						text.value = toCoptic(text.value);
					}

					if (language.value == 'arabic') {
						text.value = toArabic(text.value);
					}

					return [language.value, text];
				})
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
