import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheWashingOfTheHands = await makeMultilingualTextWithId(
	'CF0E91E8-0D78-4B77-BDF0-6C24B050A4CE',
	'11B27CB8-C356-446F-9986-C39EEA073A9F',
	'Ἡ Νίψις τῶν Χειρῶν',
	'475EC0B9-1177-4F68-BEDE-F5C45051805A',
	'Ⲡⲓⲉⲓⲁ ⲛ̀ⲧⲉ ⲛⲓϫⲓϫ',
	'64C92348-C428-4FDD-948B-DEF0C8DACFFC',
	'غَسْلُ الْيَدَيْنِ',
	'511AACD1-E8F5-4963-83CE-49A6C6EDA478',
	'The Washing of the Hands',
	'5797BAB7-8B4B-4AB3-A7B2-B8715A217B9C',
	'Die Waschung der Hände'
);

export const sectionTheWashingOfTheHands = registerNode<Basenode>({
	id: 'F40B02F0-01FA-44DF-AD0E-CA9077E192FC',
	users: [],
	type: NodeType.Section,
	value: textTheWashingOfTheHands.id,
	valueType: ContentType.MultilingualText,
	children: []
});
