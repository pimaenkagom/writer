import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheShortBlessingForTheOrdinaryDays = await makeMultilingualTextWithId(
	'346D4783-1AE4-4F81-B46F-D6DABE4301B2',
	'C3F5B55E-C593-4DD8-BC89-37EC22742CF3',
	'Ἡ Σύντομος Εὐλογία διὰ τὰς κοινὰς ἡμέρας',
	'13887E16-140B-4D5F-9637-9258A2B7DF5D',
	'Ⲡⲓⲥⲙⲟⲩ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'A50F19E2-AFC4-4085-9437-AC0381DF7123',
	'الْبَرَكَةُ الْقَصِيرَةُ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'DBD60216-5E0D-4796-ABEE-6D30131FA622',
	'The Short Blessing for the Ordinary Days',
	'1D5B9C22-96F1-4B8A-B002-C2A6C0D6B9E3',
	'Der kurze Segen an gewöhnlichen Tagen'
);

export const sectionTheShortBlessingForTheOrdinaryDays = registerNode<Basenode>({
	id: 'A25A4067-0DBA-47DC-93E5-6EE99A09F294',
	users: [],
	type: NodeType.Section,
	value: textTheShortBlessingForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});
