import { Type } from '$lib/models/type.model';
import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
import { getCollectionForType, subtypeOf } from '$lib/states/nodes/nodes.svelte';
import { generateSentence, generateTitle } from '$lib/utilities/generator/multilingual-text';
import { faker } from '@faker-js/faker';

function getMinAndMax(type: Type) {
	switch (type) {
		case Type.Library:
			return { min: 1, max: 1 };

		case Type.Collection:
			return { min: 1, max: 3 };

		case Type.Book:
			return { min: 1, max: 3 };

		case Type.Part:
			return { min: 1, max: 3 };

		case Type.Chapter:
			return { min: 1, max: 4 };

		case Type.Section:
			return { min: 1, max: 1 };

		case Type.Paragraph:
			return { min: 1, max: 1 };

		case Type.Clause:
			return { min: 0, max: 0 };
	}
}

async function generateMultilingualTextAndGetId(type: Type) {
	const value = await multilingualTexts.create(
		type === Type.Clause ? generateSentence() : generateTitle()
	);

	return value!.id;
}

async function generateChildrenAndGetIds(type: Type, users: string[] = []) {
	const result = [];

	const count = faker.number.int(getMinAndMax(type));
	for (let i = 0; i < count; ++i) {
		result.push([await generateNode(subtypeOf(type), users)]);
	}

	return result;
}

async function generateNode(type: Type, users: string[] = []) {
	const collection = getCollectionForType(type);

	const node = await collection.create({
		users: users,
		type: type,
		value: await generateMultilingualTextAndGetId(type),
		shown: true,
		tags: [],
		children: []
	});

	const id = node!.id;
	await collection.update(id, { children: await generateChildrenAndGetIds(type, [id]) });

	return id;
}

export async function generateLibrary() {
	await generateNode(Type.Library);
}
