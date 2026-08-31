import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import type { MultilingualText } from '$lib/models/multilingual-text.model';
import type { NodeType } from '$lib/models/node-type.model';
import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
import { generateId } from '$lib/utilities/generator/id';
import { registerText } from '$lib/utilities/initializer/registry';

export async function makeMultilingualTextWithId(
	id: string,
	ancientGreekId: string,
	ancientGreek: string,
	copticId: string,
	coptic: string,
	arabicId: string,
	arabic: string,
	englishId: string,
	english: string,
	germanId: string,
	german: string
): Promise<MultilingualText> {
	const multilingualText = {
		id: id,
		texts: {
			ancient_greek: {
				id: ancientGreekId,
				language: 'ancient_greek',
				value: ancientGreek,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			coptic: {
				id: copticId,
				language: 'coptic',
				value: coptic,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			arabic: {
				id: arabicId,
				language: 'arabic',
				value: arabic,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			english: {
				id: englishId,
				language: 'english',
				value: english,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			german: {
				id: germanId,
				language: 'german',
				value: german,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			}
		}
	};

	return registerText(multilingualText);
}

export async function makeMultilingualTextWithIdWithoutGreek(
	id: string,
	copticId: string,
	coptic: string,
	arabicId: string,
	arabic: string,
	englishId: string,
	english: string,
	germanId: string,
	german: string
): Promise<MultilingualText> {
	const multilingualText = {
		id: id,
		texts: {
			coptic: {
				id: copticId,
				language: 'coptic',
				value: coptic,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			arabic: {
				id: arabicId,
				language: 'arabic',
				value: arabic,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			english: {
				id: englishId,
				language: 'english',
				value: english,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			},
			german: {
				id: germanId,
				language: 'german',
				value: german,
				strongWordsIndices: [],
				emphasizedWordsIndices: [],
				status: 'FAC8DA02-072C-45A1-A1C9-2435D797A3B5'
			}
		}
	};

	return registerText(multilingualText);
}

export async function makeMultilingualText(
	ancientGreek: string,
	coptic: string,
	arabic: string,
	english: string,
	german: string
): Promise<MultilingualText> {
	return makeMultilingualTextWithId(
		generateId(),
		generateId(),
		ancientGreek,
		generateId(),
		coptic,
		generateId(),
		arabic,
		generateId(),
		english,
		generateId(),
		german
	);
}

export async function makeAnsSaveMultilingualTextWithId(
	id: string,
	ancientGreekId: string,
	ancientGreek: string,
	copticId: string,
	coptic: string,
	arabicId: string,
	arabic: string,
	englishId: string,
	english: string,
	germanId: string,
	german: string
): Promise<MultilingualText> {
	const multilingualText = await makeMultilingualTextWithId(
		id,
		ancientGreekId,
		ancientGreek,
		copticId,
		coptic,
		arabicId,
		arabic,
		englishId,
		english,
		germanId,
		german
	);
	multilingualTexts.createOrReplace(multilingualText);
	return multilingualText;
}

export async function makeAnsSaveMultilingualText(
	ancientGreek: string,
	coptic: string,
	arabic: string,
	english: string,
	german: string
): Promise<MultilingualText> {
	const multilingualText = await makeMultilingualTextWithId(
		generateId(),
		generateId(),
		ancientGreek,
		generateId(),
		coptic,
		generateId(),
		arabic,
		generateId(),
		english,
		generateId(),
		german
	);
	multilingualTexts.createOrReplace(multilingualText);
	return multilingualText;
}

export async function makeNodeWithId(
	id: string,
	nodeType: NodeType,
	multilingualText: MultilingualText
): Promise<Basenode> {
	const node: Basenode = {
		id: id,
		users: [],
		type: nodeType,
		value: multilingualText.id,
		valueType: ContentType.MultilingualText,
		children: []
	};

	await getCollectionForNodeType(nodeType).createOrReplace(node);
	return node;
}

export async function makeNode(
	nodeType: NodeType,
	multilingualText: MultilingualText
): Promise<Basenode> {
	return await makeNodeWithId(generateId(), nodeType, multilingualText);
}

export async function addChildnode(node: Basenode, childNodeRow: Basenode[]) {
	await getCollectionForNodeType(node.type).update(node.id, {
		children: [...node.children, childNodeRow.map((childNode) => childNode.id)]
	});

	for (const childNode of childNodeRow) {
		await getCollectionForNodeType(childNode.type).update(childNode.id, {
			users: [...childNode.users, node.id]
		});
	}
}
