import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheLitanyForADepartedPatriarch = await makeMultilingualTextWithId(
	'6876F7DD-A433-4129-B025-CC8102512EF1',
	'66228ECA-B4C3-4AC6-B3D4-AF413CC4D9B2',
	'Ἡ Εὐχὴ ὑπὲρ Πατριάρχου Κεκοιμημένου',
	'7162CAAA-1E58-4351-97F5-5E0DBFCCFBB8',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'023BC65C-4572-4CB9-83F1-9D950123AF6F',
	'أُوشِيَةٌ لِبَطْرِيَرْكٍ مُتَنَيِّحٍ',
	'2EAE56E7-CD42-49E5-8D17-237FF5203A59',
	'The Litany for a Departed Patriarch',
	'F11F5C7F-A961-4D3D-955C-0EA0D3941EB4',
	'Das Gebet für einen entschlafenen Patriarchen'
);

export const sectionTheLitanyForADepartedPatriarch = registerNode<Basenode>({
	id: '4A4A6DCC-58F7-47E0-861F-43A3E626D815',
	users: [],
	type: NodeType.Section,
	value: textTheLitanyForADepartedPatriarch.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheLitanyForADepartedMetropolitan = await makeMultilingualTextWithId(
	'522AF7AE-80A9-4A5B-8154-B2E1776D8DBA',
	'A4A7FDF1-B9AF-4F7A-BDEA-C1D858A3320F',
	'Ἡ Εὐχὴ ὑπὲρ Μητροπολίτου Κεκοιμημένου',
	'10885E68-771E-459B-AF96-5D34EEA0506F',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'7F6E56D1-A60F-41EA-87FA-9395097B32FD',
	'أُوشِيَةٌ لِمُطْرَانٍ مُتَنَيِّحٍ',
	'A13DC7CD-4479-49EB-AA7A-EC216B573276',
	'The Litany for a Departed Metropolitan',
	'182E0A9C-95AD-4508-9C9A-D07D3F8D74A3',
	'Das Gebet für einen entschlafenen Metropoliten'
);

export const sectionTheLitanyForADepartedMetropolitan = registerNode<Basenode>({
	id: '109FAC2D-6F18-4120-A2A6-B938B28E1DB7',
	users: [],
	type: NodeType.Section,
	value: textTheLitanyForADepartedMetropolitan.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheLitanyForADepartedBishop = await makeMultilingualTextWithId(
	'C0FA803C-1F88-4979-AF1C-13F778409B05',
	'C24DC413-B659-4F0D-B2FE-AB92F162F00C',
	'Ἡ Εὐχὴ ὑπὲρ Ἐπισκόπου Κεκοιμημένου',
	'F63403AA-55F6-4640-A127-89BC9FBF04B4',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'5DF0B46A-997F-4DC4-9CB1-2A7EB066D0D2',
	'أُوشِيَةٌ لِأُسْقُفٍ مُتَنَيِّحٍ',
	'D234B06B-6104-461E-9A6B-671DF5AF5813',
	'The Litany for a Departed Bishop',
	'30B2197A-3D2E-4802-B3B2-33670D42E3E5',
	'Das Gebet für einen entschlafenen Bischof'
);

export const sectionTheLitanyForADepartedBishop = registerNode<Basenode>({
	id: '71014825-8405-4465-B6ED-38DE215E6CB8',
	users: [],
	type: NodeType.Section,
	value: textTheLitanyForADepartedBishop.id,
	valueType: ContentType.MultilingualText,
	children: []
});
