import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';

export const textTheLiturgicalLibraryOfTheCopticOrthodoxChurch = await makeMultilingualTextWithId(
	'18692DD0-E2C0-41FE-B5DB-EDD96177A6B0',
	'6E700DF0-D070-43EE-8369-FD6A4E94A575',
	'Ἡ Λειτουργικὴ Βιβλιοθήκη τῆς Αἰγυπτίας Ὀρθοδόξου Ἐκκλησίας',
	'C7101DEC-57D5-4B4F-9A60-DF08177855DA',
	'Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ ϯⲉⲕ̀ⲕⲗⲏⲥⲓⲁ ⲛ̀ⲣⲉⲙⲛ̀ⲭⲏⲙⲓ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ',
	'46D7A1B7-FB5C-4F97-9AC7-0AA814ABAEFB',
	'اَلْمَكْتَبَةُ اللِّيتُورْجِيَّةُ لِلْكَنِيسَةِ الْقِبْطِيَّةِ الْأُرْثُوذُكْسِيَّةِ',
	'72FF7262-41FE-46D7-81CE-C61A3B24DA2D',
	'The liturgical library of the Coptic Orthodox Church',
	'210B99A8-55DB-48A9-9012-E9F2C82852C6',
	'Die liturgische Bücherei der koptisch-orthodoxen Kirche'
);

export const libraryTheLiturgicalLibraryOfTheCopticOrthodoxChurch: Basenode = {
	id: '5D16CE25-DD0D-43C0-9BF3-EDF0019B09B0',
	users: [],
	type: NodeType.Library,
	value: textTheLiturgicalLibraryOfTheCopticOrthodoxChurch.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

export const textTheLiturgicalDay = await makeMultilingualTextWithId(
	'135C2498-54A6-4910-820C-135FA7E7127E',
	'590F8293-7662-4847-8CE7-3FD452E621A0',
	'Ἡ Λειτουργικὴ Ἡμέρα',
	'2164DA25-C6D5-4B0D-A44B-B0C1C317568C',
	'Ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲓⲕⲟⲛ',
	'97D642DA-8AFF-4930-8B4F-7C7CFBAB542E',
	'اَلْيَوْمُ اللِّيتُورْجِيُّ',
	'ABD954DF-0724-4EF3-A7B2-E973759668F0',
	'The Liturgical Day',
	'CEDB4B47-26A6-449E-A70B-13B976C8D1E4',
	'Der liturgische Tag'
);

export const collectionTheLiturgicalDay: Basenode = {
	id: 'F6EA0608-C55F-4C6C-94BB-8724FA327848',
	users: [libraryTheLiturgicalLibraryOfTheCopticOrthodoxChurch.id],
	type: NodeType.Collection,
	value: textTheLiturgicalDay.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

libraryTheLiturgicalLibraryOfTheCopticOrthodoxChurch.children = [[collectionTheLiturgicalDay.id]];

export const textTheLiturgyAccordingToBasil = await makeMultilingualTextWithId(
	'8E10B61C-D144-4184-A8A1-2538D81E86AA',
	'5C31ABE0-DAC6-488E-B2A6-C5378B5CDB0C',
	'Ἡ Λειτουργία κατὰ Βασίλειον',
	'C430E438-9088-4D21-9E87-46C952104489',
	'Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲕⲁⲧⲁ Ⲃⲁⲥⲓⲗⲓⲟⲥ',
	'5B974A8E-2104-4829-A510-B460A8715C40',
	'اَلْقُدَّاسُ الْبَاسِيلِيُّ',
	'9B22C4AE-5253-47F5-A255-D14D37E66186',
	'The Liturgy according to Basil',
	'5467B2B0-55A9-4331-BF87-E722E90F0565',
	'Die Liturgie nach Basilius'
);

export const bookTheLiturgyAccordingToBasil: Basenode = {
	id: 'B574C51E-DBCC-4A91-BF37-81747CE222EA',
	users: [collectionTheLiturgicalDay.id],
	type: NodeType.Book,
	value: textTheLiturgyAccordingToBasil.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

export const textLiturgyAccordingToGregory = await makeMultilingualTextWithId(
	'21AB49EB-2C12-4C3B-B4EB-5695BA73CE71',
	'D430BB46-F2A2-4DA2-9237-FBC7BB2A044B',
	'Ἡ Λειτουργία κατὰ Γρηγόριον',
	'03E57828-8C5D-43CF-9CC6-16779C0BEBED',
	'Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲕⲁⲧⲁ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ',
	'91EE0B32-AAFE-448D-9F35-54F128D0AE9C',
	'اَلْقُدَّاسُ الْغْرِيغُورِيُّ',
	'79ECFB92-DD9C-40D8-A143-8375814DD37C',
	'The Liturgy according to Gregory',
	'B202E4A7-8520-4F33-9A3E-8E4E6B6A322C',
	'Die Liturgie nach Gregorius'
);

export const bookTheLiturgyAccordingToGregory: Basenode = {
	id: 'BEDEE816-771A-438C-BB15-E8E8BFDB6FF4',
	users: [collectionTheLiturgicalDay.id],
	type: NodeType.Book,
	value: textLiturgyAccordingToGregory.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

export const textLiturgyAccordingToCyril = await makeMultilingualTextWithId(
	'3F22FFFD-E4D5-4918-9C93-C5FBC48023E9',
	'945206E2-A50B-4208-8184-83FC3FD0466F',
	'Ἡ Λειτουργία κατὰ Κύριλλον',
	'B19BFFD2-0A27-405B-A26C-9AF428F57D0D',
	'Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲕⲁⲧⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ',
	'69468254-2509-47E5-A2D7-CD4930097F70',
	'اَلْقُدَّاسُ الْكِيرِلُّسِيُّ',
	'DA3D8EEC-545D-49F2-80B6-A4934E8EB5CD',
	'The Liturgy according to Cyril',
	'3372E850-0A39-4C01-AF1C-115E9C61730E',
	'Die Liturgie nach Kyrillus'
);

export const bookTheLiturgyAccordingToCyril: Basenode = {
	id: '38E4A273-D423-4B87-B6CB-4C31E94669F3',
	users: [collectionTheLiturgicalDay.id],
	type: NodeType.Book,
	value: textLiturgyAccordingToCyril.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

collectionTheLiturgicalDay.children = [
	[
		bookTheLiturgyAccordingToBasil.id,
		bookTheLiturgyAccordingToGregory.id,
		bookTheLiturgyAccordingToCyril.id
	]
];
