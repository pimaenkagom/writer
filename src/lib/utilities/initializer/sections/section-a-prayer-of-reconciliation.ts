import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithIdWithoutGreek } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionAPrayerOfReconciliation } from '$lib/utilities/initializer/sections-the-liturgy-according-to-basil';
import { emptyText } from '$lib/utilities/initializer/shared/texts-empty';

export const paragraphInPrayerOfReconciliation = registerNode<Basenode>({
	id: 'E06742AE-0B8A-4770-BD1A-564F2A7BEFB4',
	users: [sectionAPrayerOfReconciliation.id],
	type: NodeType.Paragraph,
	value: emptyText.id,
	valueType: ContentType.MultilingualText,
	children: []
});

sectionAPrayerOfReconciliation.children = [[paragraphInPrayerOfReconciliation.id]];

export const textGodTheGreatTheEternal = await makeMultilingualTextWithIdWithoutGreek(
	'4F96A5C1-4C73-4A85-9B2B-9EB5EE784CF7',
	'A104FA6A-2369-4B23-AA13-F3475E886387',
	'Ⲫⲛⲟⲩϯ ⲡⲓⲛⲓϣϯ ⲡⲓϣⲁⲉⲛⲉϩ ⲫⲏⲉⲧⲁϥⲕⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲉ̀ϩⲣⲏⲓ ⲉϫⲉⲛ ϯⲙⲉⲧⲁⲧⲧⲁⲕⲟ.',
	'1D7DBB4B-A96C-4BB2-9E2B-50DBE2F65F0A',
	'يَا اللهُ الْعَظِيمُ الْأَبَدِيُّ الَّذِي جَبَلَ الْإِنْسَانَ عَلَى غَيْرِ فَسَادٍ.',
	'7CA35758-2101-4D3D-A6A7-D7D217459A32',
	'O God, the Great, the Eternal, who formed man in incorruption;',
	'81824B87-C0F4-4775-BA04-289A044D5F50',
	'O Gott, der Große, der Ewige, der den Menschen schuf ohne Verderbnis;'
);

export const clauseGodTheGreatTheEternal = registerNode<Basenode>({
	id: 'B728B32F-4FD3-4DE4-A3BA-735EFA7CD044',
	users: [paragraphInPrayerOfReconciliation.id],
	type: NodeType.Clause,
	value: textGodTheGreatTheEternal.id,
	valueType: ContentType.MultilingualText,
	children: []
});

paragraphInPrayerOfReconciliation.children = [[clauseGodTheGreatTheEternal.id]];
