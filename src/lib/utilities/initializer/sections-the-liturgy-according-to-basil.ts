import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
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

export const partLiturgyOfTheFaithful = registerNode<Basenode>({
	id: 'A02E3E6F-B76F-4A8F-A299-04E538E7476A',
	users: [bookTheLiturgyAccordingToBasil.id],
	type: NodeType.Part,
	value: textLiturgyOfTheFaithful.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
});

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

export const chapterTheReconciliation = registerNode<Basenode>({
	id: '5BE6FC3C-DD66-4ACB-8203-B7323F86E9AD',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
});

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

export const sectionAPrayerOfReconciliation = registerNode<Basenode>({
	id: '8263DDD5-3242-498E-B389-AEB0DA87C79A',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAPrayerOfReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAnotherPrayerOfReconciliation = await makeMultilingualTextWithId(
	'15DAD81A-F9C2-438B-8A6C-A1679623DFE6',
	'E14A2A6A-17D6-4F95-831F-257F352F18FE',
	'Ἄλλη Εὐχὴ τῆς Καταλλαγῆς',
	'713A2DB3-122C-4067-9108-F029ACC62875',
	'Ⲟⲩⲕⲉϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲧⲡ',
	'CB7FD2B5-589A-4C59-AC46-9B9617859EF8',
	'صَلاَةٌ أُخْرَى لِلصُّلْحِ',
	'4E909FCB-1D05-4FC0-AE47-81AEEA10298C',
	'Another Prayer of Reconciliation',
	'E5800477-169A-47FA-A6D2-110BF9C4F9C1',
	'Ein anderes Gebet der Versöhnung'
);

export const sectionAnotherPrayerOfReconciliation = registerNode<Basenode>({
	id: 'E3FEBFD9-A4E6-4548-A6D4-EE046666468B',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAnotherPrayerOfReconciliation.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'C250C95D-1D25-49AE-AD8F-30D046268B6C',
	'1F2F2E01-8B6D-42F4-9072-E04063DF7003',
	'Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας',
	'FE6EA251-9628-43BA-8B33-388A61BC2838',
	'Ⲟⲩⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'4CAE8243-3D9E-447E-86C9-CE3A0A9025F3',
	'أَسْبَاسْمُوسْ آدَمْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'719FFC00-69CD-44F0-81C4-BECD1A982882',
	'An Aspasmos Adam for the Ordinary Days',
	'A4E7D2C7-12F0-4EEF-832C-FFED39D341D1',
	'Ein Aspasmos Adam für die gewöhnlichen Tage'
);

export const sectionAspasmosAdamForTheOrdinaryDays = registerNode<Basenode>({
	id: '71DC6B78-75AE-423C-BBF2-30BEC933B153',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'0D706B6D-152E-4DB3-8C47-973BD4DB64E0',
	'8582790A-00C7-4593-AB72-DE7F2269E361',
	'Δεύτερος Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας',
	'5C2599F2-4647-4ABF-89A8-86DF7ADC02DB',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'B40EAE4B-F675-47C9-9AEC-A418EEA49409',
	'أَسْبَاسْمُوسْ آدَمْ ثَانِي لِلْأَيَّامِ السَّنَوِيَّةِ',
	'B901058E-2B05-4BBB-A58F-15BE79F87781',
	'A Second Aspasmos Adam for the Ordinary Days',
	'170B8144-E072-406E-846F-0192B9F20C48',
	'Ein zweiter Aspasmos Adam für die gewöhnlichen Tage'
);

export const sectionASecondAspasmosAdamForTheOrdinaryDays = registerNode<Basenode>({
	id: '2FDE561B-D395-4206-B143-82F38A9C028C',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textASecondAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'CCCC779D-C27E-49FB-94A7-53347502EA89',
	'5A8C501C-F821-470E-8226-A9C2A19517D1',
	'Τρίτος Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας',
	'B68D3FF8-458C-4A1A-AF5A-80CF4E681E69',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'FE9111B1-61D3-475E-8CA8-E321769BCFC2',
	'أَسْبَاسْمُوسْ آدَمْ ثَالِثْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'29F3D6F9-F0E4-491D-A85C-3F100DC32B59',
	'A Third Aspasmos Adam for the Ordinary Days',
	'708BB899-29C2-461B-AE54-E67A188F6C9F',
	'Ein dritter Aspasmos Adam für die gewöhnlichen Tage'
);

export const sectionAThirdAspasmosAdamForTheOrdinaryDays = registerNode<Basenode>({
	id: 'E832A61E-446D-4BFD-9292-63A2FA353FB1',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAThirdAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFourthAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'71CEFF2E-8100-46D7-B84E-2927C116F691',
	'975DF102-9B2B-478D-9465-E2C9FA35C831',
	'Τέταρτος Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας',
	'347AC1F5-23EF-4F51-9F34-3D216EA6A9F3',
	'Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'F05BD61E-08E3-42A0-9418-5B91355514D0',
	'أَسْبَاسْمُوسْ آدَمْ رَابِعْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'CC3285E9-1D18-4BF7-B164-3018D7D3B9FF',
	'A Fourth Aspasmos Adam for the Ordinary Days',
	'7F56ECD9-CE19-4708-BC79-5609E1B8B53B',
	'Ein vierter Aspasmos Adam für die gewöhnlichen Tage'
);

export const sectionAFourthAspasmosAdamForTheOrdinaryDays = registerNode<Basenode>({
	id: 'D21F42D5-5C79-42B1-B4B1-E4320C3650AD',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAFourthAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFifthAspasmosAdamForTheOrdinaryDays = await makeMultilingualTextWithId(
	'BAA17D48-E0FF-4112-A17B-EBF7C7061F94',
	'C2161884-D36B-45F0-AE99-55E937A104AE',
	'Πέμπτος Ἀσπασμὸς Ἀδὰμ διὰ τὰς κοινὰς ἡμέρας ἐκ τῆς Λειτουργίας κατὰ Κύριλλον',
	'E30A7F55-B3D5-4AA3-9F74-25BA52AC12A4',
	'Ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲇⲁⲙ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲕⲁⲧⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ',
	'1786E761-B3D0-4A93-AA52-B2194C7F018B',
	'أَسْبَاسْمُوسْ آدَمْ خَامِسْ لِلْأَيَّامِ السَّنَوِيَّةِ مِنَ الْقُدَّاسِ الْكِيرِلُّسِيِّ',
	'2A060E7F-D2DF-43A9-9EEF-7DF372356C3E',
	'A Fifth Aspasmos Adam for the Ordinary Days from the Liturgy according to Cyril',
	'DF6FD869-4636-472D-B633-C531DD6F13F7',
	'Ein fünfter Aspasmos Adam für die gewöhnlichen Tage aus der Liturgie nach Kyrillus'
);

export const sectionAFifthAspasmosAdamForTheOrdinaryDays = registerNode<Basenode>({
	id: '56F1E7EB-B94D-447A-BF1C-1324E1A1F55E',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textAFifthAspasmosAdamForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntercessionsOfSaintMary = await makeMultilingualTextWithId(
	'E51A24CE-4F16-4FED-966B-AF409BE3D497',
	'AA207625-5EC2-4CEE-9B11-07FFC18A3268',
	'Αἱ Πρεσβεῖαι τῆς Ἁγίας Μαρίας',
	'1ACC46E1-4112-4D9F-A077-81F7C59C410F',
	'Ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ ⲛ̀ⲧⲉ ϯⲁⲅⲓⲁ Ⲙⲁⲣⲓⲁ',
	'A1300047-6A5B-4978-AA4A-BB14627AFAA5',
	'شَفَاعَاتُ الْقِدِّيسَةِ مَرْيَمَ',
	'B108CCB4-DB07-489B-9B71-F68AC69012C2',
	'The Intercessions of Saint Mary',
	'D695A78D-965B-4F94-A4C3-3758A2105D33',
	'Die Fürbitten der Heiligen Maria'
);

export const sectionTheIntercessionsOfSaintMary = registerNode<Basenode>({
	id: '907EE96A-F43C-486D-BD18-A922BFE930D3',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textTheIntercessionsOfSaintMary.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheResponseOfThePeopleWeWorshipYouOChrist = await makeMultilingualTextWithId(
	'44B0C4C4-0B55-473B-AB20-391E2F33528F',
	'A5A8461B-F257-4138-B4CF-56A9DBC000FD',
	'Ἡ Ἀπόκρισις τοῦ Λαοῦ· Προσκυνοῦμέν σε, ὦ Χριστέ',
	'188CF048-E1A7-4E0E-85A9-E46F1128604D',
	'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ϫⲉ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
	'32EF319D-7EA3-424E-BED0-F95F0CC53D3F',
	'مَرَدُّ الشَّعْبِ: نَسْجُدُ لَكَ أَيُّهَا الْمَسِيحُ',
	'1FBA5052-0722-442A-ADD5-FAEBC9C82FE4',
	'The Response of the People: We Worship You, O Christ',
	'25DD97A0-1DB6-4F74-9504-B04915EC5550',
	'Die Erwiderung des Volkes: Wir beten dich an, o Christus'
);

export const sectionTheResponseOfThePeopleWeWorshipYouOChrist = registerNode<Basenode>({
	id: '852E5B1F-E0BB-47F1-AFF2-BAF2D36BA7CE',
	users: [chapterTheReconciliation.id],
	type: NodeType.Section,
	value: textTheResponseOfThePeopleWeWorshipYouOChrist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReconciliation.children = [
	[sectionTheCallToPrayer.id],
	[sectionAPrayerOfReconciliation.id, sectionAnotherPrayerOfReconciliation.id],
	[
		sectionAspasmosAdamForTheOrdinaryDays.id,
		sectionASecondAspasmosAdamForTheOrdinaryDays.id,
		sectionAThirdAspasmosAdamForTheOrdinaryDays.id,
		sectionAFourthAspasmosAdamForTheOrdinaryDays.id,
		sectionAFifthAspasmosAdamForTheOrdinaryDays.id
	],
	[sectionTheIntercessionsOfSaintMary.id],
	[sectionTheResponseOfThePeopleWeWorshipYouOChrist.id]
];
