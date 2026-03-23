import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { getCollectionForNodeType, subtypeOf } from '$lib/states/nodes.svelte';
import { generateSentence, generateTitle } from '$lib/utilities/generator/multilingual-text';
import { faker } from '@faker-js/faker';

function getMinAndMax(nodeType: NodeType) {
	switch (nodeType) {
		case NodeType.Library:
			return { min: 1, max: 1 };

		case NodeType.Collection:
			return { min: 1, max: 2 };

		case NodeType.Book:
			return { min: 2, max: 3 };

		case NodeType.Part:
			return { min: 1, max: 3 };

		case NodeType.Chapter:
			return { min: 2, max: 4 };

		case NodeType.Section:
			return { min: 3, max: 7 };

		case NodeType.Paragraph:
			return { min: 1, max: 7 };

		case NodeType.Clause:
			return { min: 0, max: 0 };
	}
}

async function generateMultilingualTextAndGetId(nodeType: NodeType) {
	const value = await multilingualTexts.create(
		nodeType === NodeType.Clause ? generateSentence() : generateTitle()
	);

	return value!.id;
}

async function generateChildrenAndGetIds(nodeType: NodeType, users: string[] = []) {
	const result = [];

	const count = faker.number.int(getMinAndMax(nodeType));
	for (let i = 0; i < count; ++i) {
		result.push([await generateNode(subtypeOf(nodeType), users)]);
	}

	return result;
}

async function generateNode(nodeType: NodeType, users: string[] = []) {
	const collection = getCollectionForNodeType(nodeType);

	const node = await collection.create({
		users: users,
		type: nodeType,
		value: await generateMultilingualTextAndGetId(nodeType),
		valueType: ContentType.MultilingualText,
		children: []
	});

	const id = node!.id;
	await collection.update(id, { children: await generateChildrenAndGetIds(nodeType, [id]) });

	return id;
}

export async function generateLibrary() {
	await generateNode(NodeType.Library);
}
