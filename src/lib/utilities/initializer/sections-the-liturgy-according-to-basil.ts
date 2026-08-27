import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { sectionTheCallToPrayer } from '$lib/utilities/initializer/shared/section-the-call-to-prayer';

export const textLiturgyOfTheFaithful = await makeMultilingualTextWithId(
	'3D13ECE5-662E-4052-8C72-0847F405A541',
	'7C6E2990-DA5D-4D96-8CD9-AB9381F98096',
	'Ἡ Λειτουργία τῶν Πιστῶν',
	'0E9F1139-2E53-4981-ABEA-A7D850D36143',
	'Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ',
	'55C0286A-70C3-4B14-951E-0DDA1E2A7FAE',
	'قُدَّاسُ الْمُؤْمِنِينَ',
	'F06D6CEE-4CA8-471C-8298-7FBDAF3C4283',
	'The Liturgy of the Faithful',
	'98462255-4C72-4D6C-857F-766ABCFF9C29',
	'Die Liturgie der Gläubigen'
);

export const partLiturgyOfTheFaithful: Basenode = {
	id: 'A02E3E6F-B76F-4A8F-A299-04E538E7476A',
	users: [bookTheLiturgyAccordingToBasil.id],
	type: NodeType.Part,
	value: textLiturgyOfTheFaithful.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
};

bookTheLiturgyAccordingToBasil.children = [[partLiturgyOfTheFaithful.id]];

export const textTheReconciliation = await makeMultilingualTextWithId(
	'CD320193-240A-492D-BE3B-224CE1F28558',
	'676BD206-602B-40AF-BF8C-F3311CD0E69F',
	'Ἡ Καταλλαγή',
	'F65095EA-0B0B-48D0-B368-6B509CBCB1D8',
	'Ⲡⲓϩⲱⲧⲡ',
	'9DEF9CE8-C7DD-42D8-B31B-3474FEE42EF9',
	'اَلصُّلْحُ',
	'99907C5B-F558-4A20-8290-D5A8F5AC1CAC',
	'The Reconciliation',
	'290FCEAF-B003-4EB6-BBCC-CBD8802384DF',
	'Die Versöhnung'
);

export const chapterTheReconciliation: Basenode = {
	id: '5BE6FC3C-DD66-4ACB-8203-B7323F86E9AD',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
};

partLiturgyOfTheFaithful.children = [[chapterTheReconciliation.id]];

export const textAPrayerOfReconciliation = await makeMultilingualTextWithId(
	'5DDC7807-9042-486C-B908-309D6A76786A',
	'1F9C9067-643D-4154-86A3-D1CCD4C5028C',
	'Εὐχὴ τῆς Καταλλαγῆς',
	'D6A959B8-E52F-471C-BEA8-8B1F8416E32E',
	'Ⲟⲩϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲧⲡ',
	'6EF94B80-939C-48A5-95BE-582EB4CEA135',
	'صَلاَةُ الصُّلْحِ',
	'8E9F452D-CDD8-49DE-B9EB-F725FD2B2C80',
	'A Prayer of Reconciliation',
	'D499E980-B41C-4C90-9A77-A5725A21A2A3',
	'Ein Gebet der Versöhnung'
);

export const sectionAPrayerOfReconciliation: Basenode = {
	id: '8263DDD5-3242-498E-B389-AEB0DA87C79A',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAPrayerOfReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
};

export const textAnotherPrayerOfReconciliation = await makeMultilingualTextWithId(
	'15DAD81A-F9C2-438B-8A6C-A1679623DFE6',
	'E14A2A6A-17D6-4F95-831F-257F352F18FE',
	'Ἄλλη Εὐχὴ τῆς Καταλλαγῆς',
	'713A2DB3-122C-4067-9108-F029ACC62875',
	'Ⲕⲉϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲧⲡ',
	'CB7FD2B5-589A-4C59-AC46-9B9617859EF8',
	'صَلاَةٌ أُخْرَى لِلصُّلْحِ',
	'4E909FCB-1D05-4FC0-AE47-81AEEA10298C',
	'Another Prayer of Reconciliation',
	'E5800477-169A-47FA-A6D2-110BF9C4F9C1',
	'Ein anderes Gebet der Versöhnung'
);

export const sectionAnotherPrayerOfReconciliation: Basenode = {
	id: 'E3FEBFD9-A4E6-4548-A6D4-EE046666468B',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAnotherPrayerOfReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
};

export const textAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'C250C95D-1D25-49AE-AD8F-30D046268B6C',
	'1F2F2E01-8B6D-42F4-9072-E04063DF7003',
	'Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας',
	'FE6EA251-9628-43BA-8B33-388A61BC2838',
	'Ⲡⲓⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲡⲗⲟⲩⲛ',
	'4CAE8243-3D9E-447E-86C9-CE3A0A9025F3',
	'اَلْأَسْبَسْمُسُ الآدَامُ لِلْأَيَّامِ الْعَادِيَّةِ',
	'719FFC00-69CD-44F0-81C4-BECD1A982882',
	'An Aspasmos Adam for the Ordinary Days',
	'A4E7D2C7-12F0-4EEF-832C-FFED39D341D1',
	'Ein Aspasmos Adam für die gewöhnlichen Tage'
);

export const sectionAspasmosAdamForTheOrdinaryDays: Basenode = {
	id: '71DC6B78-75AE-423C-BBF2-30BEC933B153',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
};

chapterTheReconciliation.children = [
	[sectionTheCallToPrayer.id],
	[sectionAPrayerOfReconciliation.id, sectionAnotherPrayerOfReconciliation.id],
	[sectionAspasmosAdamForTheOrdinaryDays.id]
];
