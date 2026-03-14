import { NodeType } from '$lib/models/node-type.model';
import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { getCollectionForType, subtypeOf } from '$lib/states/nodes.svelte';
import { generateSentence, generateTitle } from '$lib/utilities/generator/multilingual-text';
import { faker } from '@faker-js/faker';

function getMinAndMax(type: NodeType) {
	switch (type) {
		case NodeType.Library:
			return { min: 1, max: 1 };

		case NodeType.Collection:
			return { min: 1, max: 3 };

		case NodeType.Book:
			return { min: 1, max: 3 };

		case NodeType.Part:
			return { min: 1, max: 3 };

		case NodeType.Chapter:
			return { min: 1, max: 4 };

		case NodeType.Section:
			return { min: 1, max: 1 };

		case NodeType.Paragraph:
			return { min: 1, max: 1 };

		case NodeType.Clause:
			return { min: 0, max: 0 };
	}
}

async function generateMultilingualTextAndGetId(type: NodeType) {
	const value = await multilingualTexts.create(
		type === NodeType.Clause ? generateSentence() : generateTitle()
	);

	return value!.id;
}

async function generateChildrenAndGetIds(type: NodeType, users: string[] = []) {
	const result = [];

	const count = faker.number.int(getMinAndMax(type));
	for (let i = 0; i < count; ++i) {
		result.push([await generateNode(subtypeOf(type), users)]);
	}

	return result;
}

async function generateNode(type: NodeType, users: string[] = []) {
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
	await generateNode(NodeType.Library);
}
