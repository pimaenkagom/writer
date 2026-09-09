import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import {
	makeMultilingualTextWithId,
	makeMultilingualTextWithIdWithoutGreek
} from '$lib/utilities/initializer/constructors';
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
	'Ein Aspasmos Adam an gewöhnlichen Tagen'
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
	'Ein zweiter Aspasmos Adam an gewöhnlichen Tagen'
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
	'Ein dritter Aspasmos Adam an gewöhnlichen Tagen'
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
	'Ein vierter Aspasmos Adam an gewöhnlichen Tagen'
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
	'Ein fünfter Aspasmos Adam an gewöhnlichen Tagen aus der Liturgie nach Kyrillus'
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

export const textTheAnaphora = await makeMultilingualTextWithId(
	'48DF6057-7637-4270-9F68-D43DF30AFE58',
	'B7B9AA73-CA9B-4F2E-B53B-A27665562BB2',
	'Ἡ Ἀναφορά',
	'4471D6AE-18F6-4957-9D6B-7699A3F9BBC2',
	'Ϯⲁⲛⲁⲫⲟⲣⲁ',
	'C55AB494-0859-474D-9571-890303B92C03',
	'اَلْأَنَافُورَا',
	'20293044-6B73-402C-822F-18F3F40834B4',
	'The Anaphora',
	'96271433-5527-4830-9BC7-7017A1C5634E',
	'Das Hochgebet'
);

export const chapterTheAnaphora = registerNode<Basenode>({
	id: '681220C0-4848-4288-9142-F183BAF1CE15',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheAnaphora.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheAnaphoraSection = await makeMultilingualTextWithId(
	'48CF1B7B-99F1-4F7F-81D2-3342D0EA2D96',
	'B1CF16DF-E5E0-4EFF-80D2-455242A686E7',
	'Ἡ Ἀναφορά',
	'B36FE7EF-AB8A-442C-B7E5-71BE93151CEB',
	'Ϯⲁⲛⲁⲫⲟⲣⲁ',
	'9AEB41A0-4588-42C9-A01B-E37D34AC529F',
	'اَلْأَنَافُورَا',
	'3C4A1140-DCA5-4CAA-A04D-E6C9F0D45DA3',
	'The Anaphora',
	'05F49A6B-A918-457A-818E-71165AB23575',
	'Die Anaphora'
);

export const sectionTheAnaphora = registerNode<Basenode>({
	id: 'F76C8477-C0FA-471A-A166-522ABF35EE9A',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textTheAnaphoraSection.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'37C5FA3C-0B0A-4AD7-BEF8-7810842C0D32',
	'A7F9E452-800C-4E2B-814E-C2C56B123606',
	'Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'843B3995-8154-45C3-A785-B58264614004',
	'Ⲟⲩⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'47886FD8-B671-4A42-B2BD-BAD32AFCAA62',
	'أَسْبَاسْمُوسْ وَاطُسْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'B4482BF3-0395-4945-A8FC-F583F6BA12A1',
	'An Aspasmos Watos for the Ordinary Days',
	'4F888B16-0882-4A5B-BC6A-1F0F15F970EB',
	'Ein Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: '01933292-9F6E-4BB1-9D36-5FB44C74A253',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'2ADEF37E-6B6E-4326-B185-C7FBB9D19667',
	'20C7C9FA-F156-47FF-A4D3-C852E22F2420',
	'Δεύτερος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'63D96F5A-BD81-4F50-B91F-A16480C1DBB2',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'2FEA01CE-01E2-416B-A057-74CD468CA482',
	'أَسْبَاسْمُوسْ وَاطُسْ ثَانِي لِلْأَيَّامِ السَّنَوِيَّةِ',
	'E4E66F89-D655-4E55-B901-F4C9C99FD1AC',
	'A Second Aspasmos Watos for the Ordinary Days',
	'E2F54626-83B1-41B4-B6CE-05E04F607B9B',
	'Ein zweiter Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionASecondAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: 'EBA4EB85-36E8-45B9-B80A-2231AEA18238',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textASecondAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'D3BA0C1A-BAA6-4616-9535-2E80E532F637',
	'8BBFBECE-6FC8-4541-BD6D-633E6619B9C7',
	'Τρίτος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'406BF128-2CFC-4C5A-A46D-B3BF8B285BDB',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'845001A1-3560-4C56-854D-8B0B0DD3E662',
	'أَسْبَاسْمُوسْ وَاطُسْ ثَالِثْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'E855F4D0-8C22-496D-89EE-4A59196CDF77',
	'A Third Aspasmos Watos for the Ordinary Days',
	'C78065C4-6CDA-48BC-86C0-7A2C05D64E9D',
	'Ein dritter Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionAThirdAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: '6CA0CCA4-7831-41D8-9AF2-9CAA8195DB8C',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textAThirdAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFourthAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'8540AD14-10C7-42C6-ACAA-4AD68F15D190',
	'738D0BB5-177F-4A4D-A7E5-40A0D4529FBD',
	'Τέταρτος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'6835667B-9CA0-41D9-9F05-98810C4F1866',
	'Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'1F88EDA2-6924-4148-A731-88C93FFC81F8',
	'أَسْبَاسْمُوسْ وَاطُسْ رَابِعْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'E00F003A-9CF1-4688-ABD5-2C055F4AB6CA',
	'A Fourth Aspasmos Watos for the Ordinary Days',
	'FB548CBE-5936-4056-9EA0-E6417A86B107',
	'Ein vierter Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionAFourthAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: '236B070B-53B5-47BE-B391-394C6DEFBB9D',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textAFourthAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFifthAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'C98CA373-E270-4B18-BF8D-269E9B658982',
	'B17A61D8-0714-46A9-AFD6-47C61160B973',
	'Πέμπτος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'46CBA503-1988-459D-9B8F-9D9A4C6D5FA7',
	'Ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'9BAAC4A1-7512-4BAE-B9D0-2863F6578DC7',
	'أَسْبَاسْمُوسْ وَاطُسْ خَامِسْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'FA4CB70D-3751-4CEE-8A6C-914DE87B74C2',
	'A Fifth Aspasmos Watos for the Ordinary Days',
	'BF97C8C4-387C-47A2-A5F6-2A5BB41A44CD',
	'Ein fünfter Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionAFifthAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: '96381733-7473-494A-9F61-39B777E85055',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textAFifthAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASixthAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'1BB952B1-883E-44E6-B8F9-9C16CD90A23B',
	'DE2EA3D4-A6ED-4AA3-A426-355FAF3AAAF5',
	'Ἕκτος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'5603A2C8-2BC0-430B-A179-1A3757DF17C1',
	'Ⲡⲓⲙⲁϩⲥⲟⲟⲩ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'285554E5-C049-44BD-83A9-DE63DBFF8D2B',
	'أَسْبَاسْمُوسْ وَاطُسْ سَادِسْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'02F3A349-D76F-4EB8-82FC-A31E90A26913',
	'A Sixth Aspasmos Watos for the Ordinary Days',
	'C967D884-C50F-4A06-A796-DEA84D239916',
	'Ein sechster Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionASixthAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: 'A99663F7-3161-4F55-A66B-508E50E81946',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textASixthAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASeventhAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'EE739B6F-4D5F-486F-A2E8-1DDE128E7AF7',
	'FE8CE5CF-6EE0-48CE-9CB3-2B98F3232BD8',
	'Ἕβδομος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας',
	'45B27D9A-5FB3-4A5D-896F-395A3048A546',
	'Ⲡⲓⲙⲁϩϣⲁϣϥ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ',
	'A593A435-68E1-4D52-A1C7-560060219C51',
	'أَسْبَاسْمُوسْ وَاطُسْ سَابِعْ لِلْأَيَّامِ السَّنَوِيَّةِ',
	'B6C234F8-AD56-4ECC-8D44-86F63717896E',
	'A Seventh Aspasmos Watos for the Ordinary Days',
	'D6B4A2A4-0A8D-4DC8-AE57-A269611DAB9A',
	'Ein siebter Aspasmos Watos an gewöhnlichen Tagen'
);

export const sectionASeventhAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: '03B4D091-10A9-4E44-A041-90B15BD51405',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textASeventhAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheAnaphora.children = [
	[sectionTheAnaphora.id],
	[
		sectionAspasmosWatosForTheOrdinaryDays.id,
		sectionASecondAspasmosWatosForTheOrdinaryDays.id,
		sectionAThirdAspasmosWatosForTheOrdinaryDays.id,
		sectionAFourthAspasmosWatosForTheOrdinaryDays.id,
		sectionAFifthAspasmosWatosForTheOrdinaryDays.id,
		sectionASixthAspasmosWatosForTheOrdinaryDays.id,
		sectionASeventhAspasmosWatosForTheOrdinaryDays.id
	]
];

export const textAnEighthAspasmosWatosForTheOrdinaryDays = await makeMultilingualTextWithId(
	'F201D10A-39D1-4F2C-BA10-9FCA02481068',
	'9685C54F-753D-4E6B-A2B0-0E6F77E0EA63',
	'Ὄγδοος Ἀσπασμὸς Βάτος διὰ τὰς κοινὰς ἡμέρας ἐκ τῆς Λειτουργίας κατὰ Γρηγόριον',
	'1266E65B-014A-4790-A26F-4B1D83EF1355',
	'Ⲡⲓⲙⲁϩϣⲙⲏⲛ ⲛ̀ⲁⲥⲡⲁⲥⲙⲟⲥ ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲕⲁⲧⲁ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ',
	'6D80C1CB-7D0F-4F0C-8E6D-F132402E336C',
	'أَسْبَاسْمُوسْ وَاطُسْ ثَامِنْ لِلْأَيَّامِ السَّنَوِيَّةِ مِنَ الْقُدَّاسِ الْغْرِيغُورِيِّ',
	'140D6EC9-E0A7-44FD-94BB-C5F1009560C9',
	'An Eighth Aspasmos Watos for the Ordinary Days from the Liturgy according to Gregory',
	'A2C9AC65-F014-4682-AAC1-1279633C4292',
	'Ein achter Aspasmos Watos an gewöhnlichen Tagen aus der Liturgie nach Gregorius'
);

export const sectionAnEighthAspasmosWatosForTheOrdinaryDays = registerNode<Basenode>({
	id: 'E147C3F4-A56C-4593-AE93-01C3C84EFD24',
	users: [chapterTheAnaphora.id],
	type: NodeType.Section,
	value: textAnEighthAspasmosWatosForTheOrdinaryDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheAnaphora.children = [
	[sectionTheAnaphora.id],
	[
		sectionAspasmosWatosForTheOrdinaryDays.id,
		sectionASecondAspasmosWatosForTheOrdinaryDays.id,
		sectionAThirdAspasmosWatosForTheOrdinaryDays.id,
		sectionAFourthAspasmosWatosForTheOrdinaryDays.id,
		sectionAFifthAspasmosWatosForTheOrdinaryDays.id,
		sectionASixthAspasmosWatosForTheOrdinaryDays.id,
		sectionASeventhAspasmosWatosForTheOrdinaryDays.id,
		sectionAnEighthAspasmosWatosForTheOrdinaryDays.id
	]
];

export const textAgios = await makeMultilingualTextWithId(
	'8DC989C2-AAB5-4AAC-98F9-F258C5833A21',
	'743E835F-1FDE-4621-B847-01D4743693B7',
	'Ἅγιος',
	'74F1F1A3-D223-4361-B28E-BABAD425F2AA',
	'Ⲁⲅⲓⲟⲥ',
	'D1A775D2-21BC-47E0-8AD8-DC365D1AB090',
	'أَجِيوسْ',
	'51A3B9C7-1DC1-4FBD-91BE-D7AD1F063C8D',
	'Agios',
	'BAD8F82E-EE7E-4C33-AF5F-F8BF3AB80F75',
	'Agios'
);

export const chapterAgios = registerNode<Basenode>({
	id: '4FF5FC67-300E-48AF-8D4D-250100F6C056',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textAgios.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id]
];

export const textAgiosAgiosAgios = await makeMultilingualTextWithId(
	'52CF95A7-63D0-45FA-B7DA-301F238E6CAD',
	'5326BC6D-209F-4F5E-A37E-D8C4DE0D63F3',
	'Ἅγιος, ἅγιος, ἅγιος',
	'9A00D773-F594-4A12-9B4B-20004E0A3DE4',
	'Ⲁⲅⲓⲟⲥ, ⲁⲅⲓⲟⲥ, ⲁⲅⲓⲟⲥ',
	'1A0E19B3-B395-447D-98CD-2AACE1CBDB1D',
	'أَجِيوسْ، أَجِيوسْ، أَجِيوسْ',
	'E9506687-5EBB-4A80-ABE4-6E25CB93C843',
	'Agios, agios, agios',
	'3665006F-E29A-460C-A93D-D95BB7D0B2F4',
	'Agios, agios, agios'
);

export const sectionAgiosAgiosAgios = registerNode<Basenode>({
	id: '39650C4F-9120-4E61-B1BD-7D9D267C149E',
	users: [chapterAgios.id],
	type: NodeType.Section,
	value: textAgiosAgiosAgios.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHistoryOfSalvation = await makeMultilingualTextWithId(
	'30FEACE3-293A-4060-A960-8F14299585A3',
	'6527BCCB-DF4B-47A5-850F-6721CACA0771',
	'Ἡ Οἰκονομία τῆς Σωτηρίας',
	'C3008B7C-AA3A-4F71-953F-B6CF5915FEC0',
	'Ϯⲟⲓⲕⲟⲛⲟⲙⲓⲁ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ',
	'5C192E68-6B5D-4653-8105-DC90D5CAB610',
	'تَدْبِيرُ الْخَلاَصِ',
	'3423D18B-252C-4538-B072-72D7EAC7F5C3',
	'The History of Salvation',
	'347E1A17-79CF-4480-9158-AEAE674CD945',
	'Die Heilsgeschichte'
);

export const sectionTheHistoryOfSalvation = registerNode<Basenode>({
	id: '3B6F11DF-0B7C-4917-8D77-058D45A6B1A2',
	users: [chapterAgios.id],
	type: NodeType.Section,
	value: textTheHistoryOfSalvation.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHistoryOfSalvationOnMaundyThursdayAndTheSaturdayOfLight =
	await makeMultilingualTextWithId(
		'BC24B3B2-5392-44CA-85B5-56253BBB121D',
		'69558DB3-4CE7-4F1D-9371-EE2A66EA1441',
		'Ἡ Οἰκονομία τῆς Σωτηρίας ἐν τῇ Πέμπτῃ τῆς Διαθήκης καὶ τῷ Σαββάτῳ τοῦ Φωτός',
		'765EA145-879C-4AB1-BB28-68D6BCC82BC5',
		'Ϯⲟⲓⲕⲟⲛⲟⲙⲓⲁ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ ϧⲉⲛ ⲡⲓⲉϩⲟⲟⲩ ⲙ̀ⲡⲓⲉϩⲟⲟⲩ ⲇ̀ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ ⲛⲉⲙ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ',
		'87EDFDEF-1A4E-450D-A831-9D4861158139',
		'تَدْبِيرُ الْخَلاَصِ فِي خَمِيسِ الْعَهْدِ وَسَبْتِ النُّورِ',
		'2F2B22DA-067D-47C2-A2F8-E7E988286976',
		'The History of Salvation on Maundy Thursday and the Saturday of Light',
		'D6150AE8-135A-472D-A217-16CB89AF1477',
		'Die Heilsgeschichte an Gründonnerstag und Lichtsamstag'
	);

export const sectionTheHistoryOfSalvationOnMaundyThursdayAndTheSaturdayOfLight =
	registerNode<Basenode>({
		id: '63E597C0-E246-48E7-97F5-DE1A3AEDBEC3',
		users: [chapterAgios.id],
		type: NodeType.Section,
		value: textTheHistoryOfSalvationOnMaundyThursdayAndTheSaturdayOfLight.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

chapterAgios.children = [
	[sectionAgiosAgiosAgios.id],
	[
		sectionTheHistoryOfSalvation.id,
		sectionTheHistoryOfSalvationOnMaundyThursdayAndTheSaturdayOfLight.id
	]
];

export const textTheInstitutionPrayers = await makeMultilingualTextWithId(
	'3B95CFDC-0F3D-46AF-87F6-3EA6FAD6D65D',
	'E0DDD0C5-B0B5-4FF8-8859-B33991E7A562',
	'Οἱ Λόγοι τῆς Ἱδρύσεως',
	'FC5E0ADE-A584-4873-B52F-1A6D58264B2B',
	'Ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲕⲁⲑⲓⲇⲣⲩⲥⲓⲥ',
	'6CA14608-05AC-4FA9-B6B3-2BD09C2E954B',
	'كَلِمَاتُ التَّأْسِيسِ',
	'89B64140-F5AD-4242-8CB7-5800FD5EF35D',
	'The Words of Institution',
	'3C2C93F4-B5B7-460E-B01D-0045FA6DD3A0',
	'Die Einsetzungsworte'
);

export const chapterTheInstitutionPrayers = registerNode<Basenode>({
	id: '22CC0614-854F-4DF1-9FA1-FF7D388936DE',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheInstitutionPrayers.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id]
];

export const textTheIntroductionToTheWordsOfInstitution = await makeMultilingualTextWithId(
	'1F589439-924F-41F3-A569-29F364D7220B',
	'B11C7D26-B15A-490B-AA77-9BC281DBD261',
	'Ἡ Εἰσαγωγὴ τῶν Λόγων τῆς Ἱδρύσεως',
	'F26BAB81-D1C5-4163-850E-89A146E5C255',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲕⲁⲑⲓⲇⲣⲩⲥⲓⲥ',
	'5AB89FD0-2DA2-45E8-AAB3-D659C1032183',
	'مُقَدِّمَةُ كَلِمَاتِ التَّأْسِيسِ',
	'72CE460B-B152-46DB-9150-3835C5B79332',
	'The Introduction to the Words of Institution',
	'888E0C3E-BA1D-4044-81FA-198D06E96F9B',
	'Die Einleitung der Einsetzungsworte'
);

export const sectionTheIntroductionToTheWordsOfInstitution = registerNode<Basenode>({
	id: 'DAA0FDCE-1DD1-4E11-9D38-584ECB57CE06',
	users: [chapterTheInstitutionPrayers.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheWordsOfInstitution.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheWordsOfInstitutionOverTheBread = await makeMultilingualTextWithId(
	'7BA2D47A-89AB-4C42-A209-6BA267C6F10A',
	'4EA0534B-20C4-4F6B-A97B-CA5CA60CD2CD',
	'Οἱ Λόγοι τῆς Ἱδρύσεως ἐπὶ τοῦ Ἄρτου',
	'BA2F24E0-2926-46DA-85E3-91AFD9D62F5F',
	'Ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲕⲁⲑⲓⲇⲣⲩⲥⲓⲥ ⲉ̀ϫⲉⲛ ⲡⲓⲱⲓⲕ',
	'E3DA96F5-B7CF-4B1D-81E2-1C7CA316B1DB',
	'كَلِمَاتُ التَّأْسِيسِ عَلَى الْخُبْزِ',
	'DE2798D9-1260-4F22-830F-1DF74AA839C9',
	'The Words of Institution over the Bread',
	'CF3C2FE7-D933-4F1E-9DF2-F6AEAD95CB97',
	'Die Einsetzungsworte über dem Brot'
);

export const sectionTheWordsOfInstitutionOverTheBread = registerNode<Basenode>({
	id: 'E8563164-3DB5-40A1-8D03-D10B24896141',
	users: [chapterTheInstitutionPrayers.id],
	type: NodeType.Section,
	value: textTheWordsOfInstitutionOverTheBread.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheWordsOfInstitutionOverTheWine = await makeMultilingualTextWithId(
	'5F8AF667-05AF-4201-A7B0-FE341D307B4A',
	'9BD8E451-1B3D-42C3-9295-71F00623C68C',
	'Οἱ Λόγοι τῆς Ἱδρύσεως ἐπὶ τοῦ Οἴνου',
	'465F6E5F-A1F0-427B-94E2-6E35B99CA064',
	'Ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲕⲁⲑⲓⲇⲣⲩⲥⲓⲥ ⲉ̀ϫⲉⲛ ⲡⲓⲏⲣⲡ',
	'40904F3B-6D85-44B5-B3AF-28137CA70D1A',
	'كَلِمَاتُ التَّأْسِيسِ عَلَى الْخَمْرِ',
	'B5EA31F9-C571-4F00-8ABC-80248F61A296',
	'The Words of Institution over the Wine',
	'E14313AE-9F3B-4594-9765-373299BA3DA5',
	'Die Einsetzungsworte über dem Wein'
);

export const sectionTheWordsOfInstitutionOverTheWine = registerNode<Basenode>({
	id: '8F362BAB-7996-4738-973E-46496463A58E',
	users: [chapterTheInstitutionPrayers.id],
	type: NodeType.Section,
	value: textTheWordsOfInstitutionOverTheWine.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheSolemnRemembrance = await makeMultilingualTextWithId(
	'C13481F6-F6DF-4FE0-9AD3-95EC39667B5B',
	'FC6D34A1-238A-4D44-81D7-1B734DD02FE6',
	'Ἡ Σεμνὴ Ἀνάμνησις',
	'2F733412-5186-4BC0-9F71-8C0DA41D57C3',
	'Ϯⲁ̀ⲛⲁⲙⲛⲏⲥⲓⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ',
	'92FA99A2-760A-4894-B884-1E32A4F1C236',
	'التَّذْكَارُ الْمَهِيبُ',
	'6A5AE036-834D-41DD-892C-F36060532CC1',
	'The Solemn Remembrance',
	'A30BC2AE-E7AB-4AE8-891F-86F012B677DE',
	'Das feierliche Gedächtnis'
);

export const sectionTheSolemnRemembrance = registerNode<Basenode>({
	id: '8C328250-BFF6-4F81-84CF-F1DCD5F0625C',
	users: [chapterTheInstitutionPrayers.id],
	type: NodeType.Section,
	value: textTheSolemnRemembrance.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheInvocationOfTheHolySpirit = await makeMultilingualTextWithId(
	'0EA4BFAE-2E2C-4AF8-B3F2-AC06252AEDBC',
	'BD3AA9F3-AD6E-4E68-A304-FCE531A90B77',
	'Ἡ Ἐπίκλησις τοῦ Ἁγίου Πνεύματος',
	'A4F0D71B-1934-4875-AD9C-F8F5B3E82FDF',
	'Ϯⲉⲡⲓⲕⲗⲏⲥⲓⲥ ⲛ̀ⲧⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ',
	'FA0258E6-C919-440D-8C9D-8627031101A4',
	'حُلُولُ الرُّوحِ الْقُدُسِ',
	'F5F9DC9E-C4A0-465D-8AE7-BBF7957FDD0F',
	'The Invocation of the Holy Spirit',
	'4D87B7DE-913C-4CB1-919D-9ABF5D76FD70',
	'Das Herabrufen des Heiligen Geistes'
);

export const sectionTheInvocationOfTheHolySpirit = registerNode<Basenode>({
	id: '67EA30B4-8EB4-40CD-803D-C67C3A49418D',
	users: [chapterTheInstitutionPrayers.id],
	type: NodeType.Section,
	value: textTheInvocationOfTheHolySpirit.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheInstitutionPrayers.children = [
	[sectionTheIntroductionToTheWordsOfInstitution.id],
	[sectionTheWordsOfInstitutionOverTheBread.id],
	[sectionTheWordsOfInstitutionOverTheWine.id],
	[sectionTheSolemnRemembrance.id],
	[sectionTheInvocationOfTheHolySpirit.id]
];

export const textTheLitanies = await makeMultilingualTextWithId(
	'E703B171-3021-48D4-A904-BB22AFEC3E7B',
	'81E4087E-D4B7-4104-9D82-6F0DA8A9966C',
	'Αἱ Εὐχαί',
	'D5BEF648-0B0A-4D78-884D-9BF342E2AA2C',
	'Ⲛⲓⲉⲩⲭⲏ',
	'27B670EE-05E2-40E5-AB66-77540D932EA0',
	'الْأَوَاشِي',
	'F2455B53-2232-4688-8D6E-77DE0C53EA7D',
	'The Litanies',
	'7B85D32F-D773-4693-954C-052BC697FE71',
	'Die Bittgebete'
);

export const chapterTheLitanies = registerNode<Basenode>({
	id: 'E9DAE59D-1FC2-4A2C-B0A9-2E1ACDA30745',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheLitanies.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id],
	[chapterTheLitanies.id]
];

export const textTheShortPrayerForPeace = await makeMultilingualTextWithId(
	'E1A0C2EF-45FA-4516-9DD5-793BCD304EBF',
	'D811DA57-29BE-4E70-8C3B-CEA0B946BED8',
	'Ἡ Σύντομος Εὐχὴ τῆς Εἰρήνης',
	'233DE55B-F8FB-4677-8E35-1A29A7CBD66F',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ',
	'EF7E2D2C-4DAE-4360-AA7B-94F9CFDD98F4',
	'أُوشِيَةُ السَّلاَمِ الْقَصِيرَةُ',
	'8425BCA9-99D5-49FC-A780-1AFBE171E806',
	'The Short Prayer for Peace',
	'857EFA5F-3C5D-41BC-97CC-E7787D1B1595',
	'Das kurze Gebet für den Frieden'
);

export const sectionTheShortPrayerForPeace = registerNode<Basenode>({
	id: 'B86E8578-0B19-4D03-BC31-42B90EB9F2A8',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textTheShortPrayerForPeace.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheShortPrayerForThePatriarchMetropolitanAndBishop =
	await makeMultilingualTextWithId(
		'E4D3AA67-DBA0-4856-A0DB-48E1CF018BF2',
		'77795BAE-F04E-4418-A4C2-9FFB8C4AA9D2',
		'Ἡ Σύντομος Εὐχὴ ὑπὲρ τοῦ Πατριάρχου, τοῦ Μητροπολίτου καὶ τοῦ Ἐπισκόπου',
		'4946AA8C-6FB7-4D55-B383-4BAD5E30EE69',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ⲧⲉ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲉⲙ ⲡⲓⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲛⲉⲙ ⲡⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'ED15E0DA-34AB-4385-8BF9-EAD7A9A05D3C',
		'أُوشِيَةُ الْبَطْرِيَرْكِ وَالْمُطْرَانِ وَالْأُسْقُفِ الْقَصِيرَةُ',
		'20C51A47-02D4-4D15-954E-760FF303611B',
		'The Short Prayer for the Patriarch, Metropolitan, and Bishop',
		'5BF744C8-BDDB-4178-BF16-6A51E9113522',
		'Das kurze Gebet für den Patriarchen, Metropoliten und Bischof'
	);

export const sectionTheShortPrayerForThePatriarchMetropolitanAndBishop = registerNode<Basenode>({
	id: 'DC5B6414-57D4-4C02-8580-8C7CB8961038',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textTheShortPrayerForThePatriarchMetropolitanAndBishop.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForADepartedPatriarch = await makeMultilingualTextWithId(
	'6876F7DD-A433-4129-B025-CC8102512EF1',
	'66228ECA-B4C3-4AC6-B3D4-AF413CC4D9B2',
	'Ἡ Εὐχὴ ὑπὲρ Πατριάρχου Κεκοιμημένου',
	'7162CAAA-1E58-4351-97F5-5E0DBFCCFBB8',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'023BC65C-4572-4CB9-83F1-9D950123AF6F',
	'أُوشِيَةٌ لِبَطْرِيَرْكٍ مُتَنَيِّحٍ',
	'2EAE56E7-CD42-49E5-8D17-237FF5203A59',
	'The Prayer for a Departed Patriarch',
	'F11F5C7F-A961-4D3D-955C-0EA0D3941EB4',
	'Das Gebet für einen entschlafenen Patriarchen'
);

export const sectionThePrayerForADepartedPatriarch = registerNode<Basenode>({
	id: '4A4A6DCC-58F7-47E0-861F-43A3E626D815',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForADepartedPatriarch.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForADepartedMetropolitan = await makeMultilingualTextWithId(
	'522AF7AE-80A9-4A5B-8154-B2E1776D8DBA',
	'A4A7FDF1-B9AF-4F7A-BDEA-C1D858A3320F',
	'Ἡ Εὐχὴ ὑπὲρ Μητροπολίτου Κεκοιμημένου',
	'10885E68-771E-459B-AF96-5D34EEA0506F',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'7F6E56D1-A60F-41EA-87FA-9395097B32FD',
	'أُوشِيَةٌ لِمُطْرَانٍ مُتَنَيِّحٍ',
	'A13DC7CD-4479-49EB-AA7A-EC216B573276',
	'The Prayer for a Departed Metropolitan',
	'182E0A9C-95AD-4508-9C9A-D07D3F8D74A3',
	'Das Gebet für einen entschlafenen Metropoliten'
);

export const sectionThePrayerForADepartedMetropolitan = registerNode<Basenode>({
	id: '109FAC2D-6F18-4120-A2A6-B938B28E1DB7',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForADepartedMetropolitan.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForADepartedBishop = await makeMultilingualTextWithId(
	'C0FA803C-1F88-4979-AF1C-13F778409B05',
	'C24DC413-B659-4F0D-B2FE-AB92F162F00C',
	'Ἡ Εὐχὴ ὑπὲρ Ἐπισκόπου Κεκοιμημένου',
	'F63403AA-55F6-4640-A127-89BC9FBF04B4',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
	'5DF0B46A-997F-4DC4-9CB1-2A7EB066D0D2',
	'أُوشِيَةٌ لِأُسْقُفٍ مُتَنَيِّحٍ',
	'D234B06B-6104-461E-9A6B-671DF5AF5813',
	'The Prayer for a Departed Bishop',
	'30B2197A-3D2E-4802-B3B2-33670D42E3E5',
	'Das Gebet für einen entschlafenen Bischof'
);

export const sectionThePrayerForADepartedBishop = registerNode<Basenode>({
	id: '71014825-8405-4465-B6ED-38DE215E6CB8',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForADepartedBishop.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForTheServants = await makeMultilingualTextWithId(
	'517608CE-53DC-415A-A002-6039ADFFF0F1',
	'3DC624E1-5F12-434C-837F-1CD126C7E0E2',
	'Ἡ Εὐχὴ ὑπὲρ τῶν Ὑπηρετούντων',
	'CFF234DC-078E-4563-908E-5782F3544199',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲓⲣⲉϥϣⲉⲙϣⲓ',
	'D56EEE98-9818-4CE4-B9D3-4440FC7F3087',
	'أُوشِيَةُ الْخُدَّامِ',
	'F12CBCDC-A1B2-4AC7-9A1E-1A6432166B96',
	'The Prayer for the Servants',
	'5608AF60-6F5E-4FFA-8385-82D2EB55E9EF',
	'Das Gebet für die Diener'
);

export const sectionThePrayerForTheServants = registerNode<Basenode>({
	id: '24045B0A-BA98-45B9-88B1-65C466DAE83E',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForTheServants.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForTheMercyUponUsAll = await makeMultilingualTextWithId(
	'0EDBAFAC-0F81-4279-832A-BF5BA7B1D5CB',
	'4F2D77E9-95E2-49DB-B52A-34A44EB13D36',
	'Ἡ Εὐχὴ ὑπὲρ τοῦ Ἐλέους πάντων ἡμῶν',
	'50D544A4-FBC8-47F0-B271-A80F77BEF346',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲓⲛⲁⲓ ⲉ̀ϫⲱⲛ ⲧⲏⲣⲟⲩ',
	'EB7125E9-B688-43FA-98C2-26E9CACF1FB0',
	'أُوشِيَةُ الرَّحْمَةِ عَلَيْنَا كُلِّنَا',
	'9233BDCE-9241-46DE-871E-3552688303F4',
	'The Prayer for the Mercy upon Us All',
	'9535A82D-41BA-42CC-93D2-5E426FB68417',
	'Das Gebet für das Erbarmen unser aller'
);

export const sectionThePrayerForTheMercyUponUsAll = registerNode<Basenode>({
	id: '28B79594-810C-49B0-9C00-6FCDB2D5B20F',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForTheMercyUponUsAll.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForThePlace = await makeMultilingualTextWithId(
	'1C5EDE37-D726-4F0B-ACAF-4B170A740F3F',
	'1736E826-8DC8-4348-8E0D-8AB6B5224D2E',
	'Ἡ Εὐχὴ ὑπὲρ τῆς Σωτηρίας τοῦ Τόπου τούτου',
	'FFD1D68F-0218-44D4-8CAC-0F1BA124B131',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ ⲛ̀ⲧⲉ ⲡⲁⲓⲙⲁ',
	'FF84545E-1A11-4AF0-9BDD-FAA8FED39436',
	'أُوشِيَةُ خَلاَصِ هَذَا الْمَوْضِعِ',
	'B82EE78A-FF1A-45BA-801B-67B1007522E8',
	'The Prayer for the Salvation of This Place',
	'CB462957-070A-4FC0-8305-0307EC72B6E3',
	'Das Gebet für das Heil dieses Ortes'
);

export const sectionThePrayerForThePlace = registerNode<Basenode>({
	id: '7267A3D6-5715-432B-A732-BEB5C63278AD',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForThePlace.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi =
	await makeMultilingualTextWithId(
		'7F0A2ECF-D30D-4862-9FBE-346745C0600E',
		'1FE32FEA-BB12-49ED-B0A4-E71E6E8FFC5B',
		'Ἡ Εὐχὴ ὑπὲρ τῆς Φύσεως ἀπὸ ἑνδεκάτης Παῦνι ἕως ἐνάτης Παῶφι',
		'AEE4B9A6-FF3D-4E39-97AB-F6B406F59E00',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ϯⲫⲩⲥⲓⲥ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ⲁ̅ ⲙ̀Ⲡⲁⲱⲛⲓ ϣⲁ ⲡⲓⲑ̅ ⲙ̀Ⲡⲁⲱⲡⲓ',
		'64D5E78D-F982-44CB-A171-A5C2631F222D',
		'أُوشِيَةُ الطَّبِيعَةِ مِنَ الْحَادِي عَشَرَ مِنْ بَؤُونَةَ إِلَى التَّاسِعِ مِنْ بَابَةَ',
		'BD07DF49-ACC2-4D4B-8E7D-0A15A4DC7BFC',
		'The Prayer for Nature from the 11th of Paoni to the 9th of Paopi',
		'A83087E0-F87E-4C5A-B092-DA3652B0190C',
		'Das Gebet für die Natur vom 11. Paoni bis zum 9. Paopi'
	);

export const sectionThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi = registerNode<Basenode>({
	id: '88CE88DD-1020-412A-8F5A-0E6D244BD3BC',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi =
	await makeMultilingualTextWithId(
		'4DC0BBE6-8ADA-47E8-B6C4-72A9617CAA03',
		'FDA55855-448B-4531-9426-D1D1F796D774',
		'Ἡ Εὐχὴ ὑπὲρ τῆς Φύσεως ἀπὸ δεκάτης Παῶφι ἕως δεκάτης Τωβί',
		'09DC7EE3-4CB4-41AA-8C97-B3DE8C25931D',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ϯⲫⲩⲥⲓⲥ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ ⲙ̀Ⲡⲁⲱⲡⲓ ϣⲁ ⲡⲓⲓ̅ ⲙ̀Ⲧⲱⲃⲓ',
		'B49A8722-6BB4-48C1-B88F-E4919D63E8FF',
		'أُوشِيَةُ الطَّبِيعَةِ مِنَ الْعَاشِرِ مِنْ بَابَةَ إِلَى الْعَاشِرِ مِنْ طُوبَةَ',
		'60584FE8-A1A3-4AB1-A2E3-D03828F16F5A',
		'The Prayer for Nature from the 10th of Paopi to the 10th of Tobi',
		'57D57CB7-4B87-4D5D-A630-561CB88E0147',
		'Das Gebet für die Natur vom 10. Paopi bis zum 10. Tobi'
	);

export const sectionThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi = registerNode<Basenode>({
	id: '35C5BF7D-95E0-49BE-A25A-044CDDDBC6C8',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni =
	await makeMultilingualTextWithId(
		'ED32B204-81CC-4F45-A04B-6E687F6B3A61',
		'5403C56A-0589-41D5-8B0C-E3AC7D592C46',
		'Ἡ Εὐχὴ ὑπὲρ τῆς Φύσεως ἀπὸ ἑνδεκάτης Τωβὶ ἕως δεκάτης Παῦνι',
		'72A3FF1D-F30B-40E3-9849-7AD0D2939A77',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ϯⲫⲩⲥⲓⲥ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ⲁ̅ ⲙ̀Ⲧⲱⲃⲓ ϣⲁ ⲡⲓⲓ̅ ⲙ̀Ⲡⲁⲱⲛⲓ',
		'F18A8CE8-6422-4B48-B402-92A73A530C27',
		'أُوشِيَةُ الطَّبِيعَةِ مِنَ الْحَادِي عَشَرَ مِنْ طُوبَةَ إِلَى الْعَاشِرِ مِنْ بَؤُونَةَ',
		'7BA33435-860C-46D5-A5BB-640A0D0BD46D',
		'The Prayer for Nature from the 11th of Tobi to the 10th of Paoni',
		'868F3D3E-37C4-4279-9E6E-E08F2ED53B81',
		'Das Gebet für die Natur vom 11. Tobi bis zum 10. Paoni'
	);

export const sectionThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni = registerNode<Basenode>({
	id: '0BA19326-530F-45C6-AA56-CCC1E817EB9E',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheYearRoundPrayerForNature = await makeMultilingualTextWithId(
	'78430D94-5E26-412F-BA2B-9641D900721C',
	'7CABB1E8-499C-448C-81DF-04E4AD1D65C7',
	"Ἡ Εὐχὴ ὑπὲρ τῆς Φύσεως δι' ὅλου τοῦ ἔτους",
	'6E45762D-EA17-44BC-8A06-707435E59871',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ϯⲫⲩⲥⲓⲥ ⲕⲁⲧⲁ ⲣⲟⲙⲡⲓ',
	'5706C981-C060-488E-BECC-F70DB388FB54',
	'أُوشِيَةُ الطَّبِيعَةِ طُولَ السَّنَةِ',
	'6F0BD318-F77E-4E71-8107-7732F002B37E',
	'The Year-Round Prayer for Nature',
	'B8E21806-5505-4142-98DC-2E0648C0C949',
	'Das ganzjährige Gebet für die Natur'
);

export const sectionTheYearRoundPrayerForNature = registerNode<Basenode>({
	id: '39A32ED8-9DAF-4C8F-9FCC-BC90097167F3',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textTheYearRoundPrayerForNature.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheLitanies.children = [
	[sectionTheShortPrayerForPeace.id],
	[sectionTheShortPrayerForThePatriarchMetropolitanAndBishop.id],
	[sectionThePrayerForADepartedPatriarch.id],
	[sectionThePrayerForADepartedMetropolitan.id],
	[sectionThePrayerForADepartedBishop.id],
	[sectionThePrayerForTheServants.id],
	[sectionThePrayerForTheMercyUponUsAll.id],
	[sectionThePrayerForThePlace.id],
	[
		sectionThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi.id,
		sectionThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi.id,
		sectionThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni.id,
		sectionTheYearRoundPrayerForNature.id
	]
];

export const textThePrayerForTheOfferings = await makeMultilingualTextWithId(
	'CD02EAB8-570E-4912-A5C6-59A04946EC94',
	'76BED07F-E59E-4E02-9D31-AB82952DCC3F',
	'Ἡ Εὐχὴ ὑπὲρ τῶν Προσφορῶν',
	'22864825-FD53-4417-AA48-F14E793B4FF4',
	'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲓⲇⲱⲣⲟⲛ',
	'153839BD-F937-4D4B-AC1C-819B0EB19BBA',
	'أُوشِيَةُ الْقَرَابِينِ',
	'207673A0-5BB1-4AC2-8F3D-4004BCD05F75',
	'The Prayer for the Offerings',
	'9D1D08C6-7C6B-455A-A28E-6B0D2722DBC0',
	'Das Gebet für die Opfergaben'
);

export const sectionThePrayerForTheOfferings = registerNode<Basenode>({
	id: '18334C4E-C66F-4B42-9317-02FFD50B091D',
	users: [chapterTheLitanies.id],
	type: NodeType.Section,
	value: textThePrayerForTheOfferings.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheLitanies.children = [
	[sectionTheShortPrayerForPeace.id],
	[sectionTheShortPrayerForThePatriarchMetropolitanAndBishop.id],
	[sectionThePrayerForADepartedPatriarch.id],
	[sectionThePrayerForADepartedMetropolitan.id],
	[sectionThePrayerForADepartedBishop.id],
	[sectionThePrayerForTheServants.id],
	[sectionThePrayerForTheMercyUponUsAll.id],
	[sectionThePrayerForThePlace.id],
	[
		sectionThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi.id,
		sectionThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi.id,
		sectionThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni.id,
		sectionTheYearRoundPrayerForNature.id
	],
	[sectionThePrayerForTheOfferings.id]
];

export const textTheCommemorationOfTheSaints = await makeMultilingualTextWithId(
	'C78013DA-8C0E-4CF8-BE39-870612E2E429',
	'BC486E32-5B4E-426C-BE24-4CA7FB1214A2',
	'Ἡ Μνήμη τῶν Ἁγίων',
	'4FC64A56-B622-4999-AE7C-AFA9245B9645',
	'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲑⲟⲩⲁⲃ',
	'15BE6169-3984-4D4A-848D-F801E8D6AF2E',
	'تَذْكَارُ الْقِدِّيسِينَ',
	'BF5861B3-D0E6-4583-9DF5-16D05FFD0450',
	'The Commemoration of the Saints',
	'EA656F10-48B6-4023-A955-A4A315A4C672',
	'Das Gedächtnis der Heiligen'
);

export const chapterTheCommemorationOfTheSaints = registerNode<Basenode>({
	id: 'A8799636-F33A-46A3-8F83-757BF9AEF332',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheCommemorationOfTheSaints.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id],
	[chapterTheLitanies.id],
	[chapterTheCommemorationOfTheSaints.id]
];

export const textTheCommemorationOfTheSaintsSection = await makeMultilingualTextWithId(
	'6D10026E-2AF2-4BDE-A19F-DC8623F49A48',
	'48C90D48-2193-4D77-AF63-3B28C183BADA',
	'Ἡ Μνήμη τῶν Ἁγίων',
	'986549D7-5B79-4C0A-9C2D-536FDF1B14DB',
	'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲑⲟⲩⲁⲃ',
	'FA611D7B-D058-4B88-90AC-CA7FCC8BF40F',
	'تَذْكَارُ الْقِدِّيسِينَ',
	'FFF0093E-F0F4-4C8B-AE74-AF7CD43B7180',
	'The Commemoration of the Saints',
	'066405D5-712A-4FD9-8F13-F57765CF2A6B',
	'Das Gedächtnis der Heiligen'
);

export const sectionTheCommemorationOfTheSaints = registerNode<Basenode>({
	id: '07984306-54BA-4D47-91D1-92DBCD2C9D93',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheCommemorationOfTheSaintsSection.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheCommemorationOfThePatriarchs = await makeMultilingualTextWithId(
	'E22F0BA8-28E2-4BD9-A12A-E7E2E7D947CC',
	'3730D558-1E26-44A1-B75A-C04AD9392ABA',
	'Ἡ Μνήμη τῶν Πατριαρχῶν',
	'9909A8FD-B68C-4416-B609-ACE4E59E22A8',
	'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ',
	'85E35529-52EA-41D4-840B-5BB02C71887F',
	'تَذْكَارُ الْبَطَارِكَةِ',
	'9136ABE3-B07B-42FD-AFE4-0A677823EE6E',
	'The Commemoration of the Patriarchs',
	'928C9E3A-B4F7-4005-8FA1-6F2833A6A796',
	'Das Gedächtnis der Patriarchen'
);

export const sectionTheCommemorationOfThePatriarchs = registerNode<Basenode>({
	id: 'B189854B-F856-4E3C-AB25-7D94516130AA',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheCommemorationOfThePatriarchs.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheCommemorationOfTheDesertFathers = await makeMultilingualTextWithId(
	'D515C36F-C8DC-425A-8236-01C4E55397A6',
	'C4053212-0CDD-4CBF-8BEE-7DA89E763B95',
	'Ἡ Μνήμη τῶν Πατέρων τῆς Ἐρήμου',
	'EC3CE844-2072-4CC2-A535-82B149D56CF7',
	'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲓⲓⲟϯ ⲛ̀ⲧⲉ ϯⲉⲣⲏⲙⲟⲥ',
	'30E6F71B-5DE8-4852-88C9-9845FA48D2A0',
	'تَذْكَارُ آبَاءِ الْبَرِّيَّةِ',
	'76CE7CD5-231B-46E7-A006-68996D39B9C9',
	'The Commemoration of the Desert Fathers',
	'3C1DCD8F-BA70-4FE5-8C2A-EE23E5A72608',
	'Das Gedächtnis der Wüstenväter'
);

export const sectionTheCommemorationOfTheDesertFathers = registerNode<Basenode>({
	id: 'B24F108D-8734-4329-ACE1-84239FA7B5D1',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheCommemorationOfTheDesertFathers.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfTheCommemorationOfThePatriarchsAndDesertFathers =
	await makeMultilingualTextWithId(
		'64910746-D6F0-4F59-9DB0-9F8998D33DB6',
		'AAE3BF81-8EBC-45C9-99DA-3ECE1534770E',
		'Ἡ Λῆξις τῆς Μνήμης τῶν Πατριαρχῶν καὶ τῶν Πατέρων τῆς Ἐρήμου',
		'0E2A1AE2-235D-4174-978A-D8AB2C225966',
		'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲉⲙ ⲛⲓⲓⲟϯ ⲛ̀ⲧⲉ ϯⲉⲣⲏⲙⲟⲥ',
		'A7B7A971-9B81-4E88-92AA-73D5C378FF1F',
		'خِتَامُ تَذْكَارِ الْبَطَارِكَةِ وَآبَاءِ الْبَرِّيَّةِ',
		'1D90BB16-3E8A-4EDD-9608-3778203C649F',
		'The Conclusion of the Commemoration of the Patriarchs and Desert Fathers',
		'A8442EF7-A6AF-40AA-99CA-701BC7E6BA1C',
		'Der Abschluss des Gedächtnisses der Patriarchen und der Wüstenväter'
	);

export const sectionTheConclusionOfTheCommemorationOfThePatriarchsAndDesertFathers =
	registerNode<Basenode>({
		id: '092D0B50-793F-4347-A869-1B5443175934',
		users: [chapterTheCommemorationOfTheSaints.id],
		type: NodeType.Section,
		value: textTheConclusionOfTheCommemorationOfThePatriarchsAndDesertFathers.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheCommemorationOfTheDepartedPriestsAndLaypeople =
	await makeMultilingualTextWithId(
		'48C64269-CBF9-4981-9621-6CB1732C800B',
		'B18A6D87-3975-4126-9605-6BED72678F72',
		'Ἡ Μνήμη τῶν Κεκοιμημένων Ἱερέων καὶ Λαϊκῶν',
		'D440B938-0BAA-4879-B9C1-C4DABC5336EF',
		'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲏⲃ ⲛⲉⲙ ⲛⲓⲗⲁⲟⲥ ⲉ̀ⲁⲩⲉⲛⲕⲟⲧ',
		'F6DD5F76-2287-4CB0-AB08-6302A73E5722',
		'تَذْكَارُ الْكَهَنَةِ وَالْعَلْمَانِيِّينَ الْمُتَنَيِّحِينَ',
		'F09A72BB-3862-4126-A14F-97D280FF14AD',
		'The Commemoration of the Departed Priests and Laypeople',
		'637485D1-E9CD-4B47-8AEB-975DB252328E',
		'Das Gedächtnis der entschlafenen Priester und Laien'
	);

export const sectionTheCommemorationOfTheDepartedPriestsAndLaypeople = registerNode<Basenode>({
	id: '1ADEAB1C-5DAF-4FFE-B89F-02048C948663',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheCommemorationOfTheDepartedPriestsAndLaypeople.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheCommemorationOfADepartedPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'03866866-A6DB-43C2-976F-5FA738537054',
		'CF16750C-4F0C-4548-8DE5-6CD680BDBE7E',
		'Ἡ Μνήμη Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου Κεκοιμημένου',
		'667A8A55-4D65-46BA-B642-E17E01DB1DC2',
		'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲉ̀ⲁϥⲉⲛⲕⲟⲧ',
		'F148F7DA-CEA1-4311-9EB9-797FC5C40EE7',
		'تَذْكَارُ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ مُتَنَيِّحٍ',
		'F3A87CA9-5A42-4D39-9067-D46432F91DA3',
		'The Commemoration of a Departed Patriarch, Metropolitan, or Bishop',
		'9762B498-428B-4B0A-BB6A-B9193F4D5440',
		'Das Gedächtnis eines entschlafenen Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionTheCommemorationOfADepartedPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '00D5905B-6B6E-4EE9-8469-AE79C1446AB9',
		users: [chapterTheCommemorationOfTheSaints.id],
		type: NodeType.Section,
		value: textTheCommemorationOfADepartedPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheCommemorationOfTheDeparted = await makeMultilingualTextWithId(
	'F163B59D-1367-48CF-8746-105635ABFE71',
	'29F3FE7A-3C3D-4A34-820E-83106755A061',
	'Ἡ Μνήμη τῶν Κεκοιμημένων',
	'3707AB6B-3A08-4A86-A246-15C98DFD2E8A',
	'Ⲡⲓⲉⲣⲫⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲧⲁⲩⲉⲛⲕⲟⲧ',
	'63EDCAA9-F27E-418A-B97B-FCB60D3A8798',
	'تَذْكَارُ الرَّاقِدِينَ',
	'2258E64C-40C1-4D06-9B96-518AFF48DE2D',
	'The Commemoration of the Departed',
	'FED0F09E-86CC-4EA4-B99B-EE277A6ACB7E',
	'Das Gedächtnis der Entschlafenen'
);

export const sectionTheCommemorationOfTheDeparted = registerNode<Basenode>({
	id: 'A4B27C15-B177-41EC-B24D-82F13915C3CB',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheCommemorationOfTheDeparted.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheShortBlessing = await makeMultilingualTextWithId(
	'346D4783-1AE4-4F81-B46F-D6DABE4301B2',
	'C3F5B55E-C593-4DD8-BC89-37EC22742CF3',
	'Ἡ Σύντομος Εὐλογία',
	'13887E16-140B-4D5F-9637-9258A2B7DF5D',
	'Ⲡⲓⲥⲙⲟⲩ ⲛ̀ⲕⲟⲩϫⲓ',
	'A50F19E2-AFC4-4085-9437-AC0381DF7123',
	'الْبَرَكَةُ الْقَصِيرَةُ',
	'DBD60216-5E0D-4796-ABEE-6D30131FA622',
	'The Short Blessing',
	'1D5B9C22-96F1-4B8A-B002-C2A6C0D6B9E3',
	'Der kurze Segen'
);

export const sectionTheShortBlessing = registerNode<Basenode>({
	id: 'A25A4067-0DBA-47DC-93E5-6EE99A09F294',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheShortBlessing.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForTheForgivenessOfSinsAndForTheRestOfTheDeparted =
	await makeMultilingualTextWithId(
		'71110E3A-1E68-485F-8A7F-3838AE269A52',
		'A793AB36-EE68-43E4-85A3-9D91A6A24B87',
		'Ἡ Εὐχὴ ὑπὲρ τῆς Ἀφέσεως τῶν Ἁμαρτιῶν καὶ ὑπὲρ τῆς Ἀναπαύσεως τῶν Κεκοιμημένων',
		'5CDB6BEF-3677-4262-81B6-0CCBE16A36FB',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ ⲛⲉⲙ ⲡⲓⲙ̀ⲧⲟⲛ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲧⲁⲩⲉⲛⲕⲟⲧ',
		'739C62F8-1AF4-4993-A20F-E098B4FDB2E3',
		'أُوشِيَةُ غُفْرَانِ الْخَطَايَا وَنِيَاحَةِ الرَّاقِدِينَ',
		'03C3A0B7-7985-4F67-A1A5-B66FEBBFB35C',
		'The Prayer for the Forgiveness of Sins and for the Rest of the Departed',
		'1A27B1A4-4138-4F3F-AA30-F094D49276ED',
		'Das Gebet für die Vergebung der Sünden und für die Ruhe der Entschlafenen'
	);

export const sectionThePrayerForTheForgivenessOfSinsAndForTheRestOfTheDeparted =
	registerNode<Basenode>({
		id: 'F7A9B4E1-3753-4BAF-A3C5-A2A9FAB8CDE3',
		users: [chapterTheCommemorationOfTheSaints.id],
		type: NodeType.Section,
		value: textThePrayerForTheForgivenessOfSinsAndForTheRestOfTheDeparted.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheResponseOfTheCommemoration = await makeMultilingualTextWithId(
	'D7F7466E-B9A5-4D6B-A250-81F20B99CB7E',
	'0109428A-4501-4520-AE3B-6E92177348C5',
	'Ἡ Ἀπόκρισις τῆς Μνήμης',
	'128C0150-9307-4E9F-BD27-151F72B77FA9',
	'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲉⲣⲫⲙⲉⲩⲓ',
	'F355BB6A-469B-467A-9FA7-F31312865F10',
	'مَرَدُّ التَّذْكَارِ',
	'4070A819-452A-4C04-B68F-7B5BAB8BC976',
	'The Response of the Commemoration',
	'B08BBE72-F014-49CD-9449-AF83C9E832DB',
	'Die Erwiderung des Gedächtnisses'
);

export const sectionTheResponseOfTheCommemoration = registerNode<Basenode>({
	id: '06CFDA61-247F-49BB-90DE-45A7EFA41A6F',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textTheResponseOfTheCommemoration.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForTheLiving = await makeMultilingualTextWithId(
	'DCD7DA70-AC3A-4404-B3E4-86A6C1D03026',
	'720AB6AF-86FC-4390-B4FB-55BD5ADA2164',
	'Ἡ Εὐχὴ ὑπὲρ τῶν Ζώντων',
	'14C25A05-B353-4E07-87FC-3E4968024A06',
	'Ⲡⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲧⲟⲛϧ',
	'EEEFB3BE-38B5-4904-9AB2-69A6BE6403CD',
	'طَلْبَةٌ لِلْأَحْيَاءِ',
	'2F063BB6-6E7A-4D5A-809B-FAE643F4877B',
	'The Prayer for the Living',
	'B3004765-8381-49A8-9284-7C4490499D33',
	'Das Gebet für die noch Lebenden'
);

export const sectionThePrayerForTheLiving = registerNode<Basenode>({
	id: 'C3C55C54-715F-475B-BB6E-6344F07C2575',
	users: [chapterTheCommemorationOfTheSaints.id],
	type: NodeType.Section,
	value: textThePrayerForTheLiving.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheCommemorationOfTheSaints.children = [
	[sectionTheCommemorationOfTheSaints.id],
	[sectionTheCommemorationOfThePatriarchs.id],
	[sectionTheCommemorationOfTheDesertFathers.id],
	[sectionTheConclusionOfTheCommemorationOfThePatriarchsAndDesertFathers.id],
	[sectionTheCommemorationOfTheDepartedPriestsAndLaypeople.id],
	[sectionTheCommemorationOfADepartedPatriarchMetropolitanOrBishop.id],
	[sectionTheCommemorationOfTheDeparted.id],
	[sectionTheShortBlessing.id],
	[sectionThePrayerForTheForgivenessOfSinsAndForTheRestOfTheDeparted.id],
	[sectionTheResponseOfTheCommemoration.id],
	[sectionThePrayerForTheLiving.id]
];

export const textTheBreakingOfTheBread = await makeMultilingualTextWithId(
	'927F50F7-D3DF-40AC-85FF-1AC6296E8498',
	'B5F0F86E-7A9E-4AE9-A901-448C6213AD05',
	'Ὁ Κλασμὸς τοῦ Ἄρτου',
	'7B397A7A-5B5D-42D2-A42D-A95507A6CD4A',
	'Ⲡⲓⲫⲱϣ ⲛ̀ⲧⲉ ⲡⲓⲱⲓⲕ',
	'143C9642-4643-45BB-9A0D-565C0BF31CFF',
	'الْقَسْمَةُ',
	'FB99046B-2D9B-44C9-AEC4-ECEEBC65FEE8',
	'The Breaking of the Bread',
	'44236651-A47F-4C50-93EB-86A12288A5C5',
	'Das Brechen des Brotes'
);

export const chapterTheBreakingOfTheBread = registerNode<Basenode>({
	id: '546D237B-152E-4696-86BA-FFDC2401B8B2',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheBreakingOfTheBread.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToTheBreakingOfTheBread = await makeMultilingualTextWithId(
	'61EB4709-1F42-4582-9A0E-2CEC4DCAC152',
	'1A7DD67E-3A31-4305-849F-142535F78AA5',
	'Ἡ Εἰσαγωγὴ τοῦ Κλασμοῦ τοῦ Ἄρτου',
	'C95A0327-0E19-4D23-A390-0206FB622F47',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲫⲱϣ ⲛ̀ⲧⲉ ⲡⲓⲱⲓⲕ',
	'36D6A194-59BD-4221-8380-EAE14C0C7670',
	'مُقَدِّمَةُ الْقَسْمَةِ',
	'0D4DEEFE-C059-4D9E-BBB1-ED6F01AF7B97',
	'The Introduction to the Breaking of the Bread',
	'007662D4-44CD-47A4-B2E9-A7D91C8723D6',
	'Die Einleitung zum Brechen des Brotes'
);

export const sectionTheIntroductionToTheBreakingOfTheBread = registerNode<Basenode>({
	id: '9C43D121-5D8E-4AA9-AE9F-55A594884CB9',
	users: [chapterTheBreakingOfTheBread.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheBreakingOfTheBread.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfTheFraction = await makeMultilingualTextWithId(
	'2EF3101B-E018-4129-9F70-2F3F47C4E876',
	'94DFF2AF-3FB6-4B67-B6F5-1A1BD15FF761',
	'Ἡ Εὐχὴ τοῦ Κλασμοῦ',
	'419EC3C2-065C-42CB-BA9B-E78DC8DD25F9',
	'Ⲡⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲫⲱϣ',
	'A2D68465-A397-4278-9BD7-2FD728DF9171',
	'صَلاَةُ الْقَسْمَةِ',
	'DA252BCE-1988-4E36-9FC7-81815707D44A',
	'The Prayer of the Fraction',
	'3F3E4C70-B5D9-49FF-8619-F0D1CECD31DE',
	'Das Gebet zum Brechen des Brotes'
);

export const sectionThePrayerOfTheFraction = registerNode<Basenode>({
	id: '3D64E6D6-B8F5-4CF2-A4CA-D06320654658',
	users: [chapterTheBreakingOfTheBread.id],
	type: NodeType.Section,
	value: textThePrayerOfTheFraction.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheBreakingOfTheBread.children = [
	[sectionTheIntroductionToTheBreakingOfTheBread.id],
	[sectionThePrayerOfTheFraction.id]
];

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id],
	[chapterTheLitanies.id],
	[chapterTheCommemorationOfTheSaints.id],
	[chapterTheBreakingOfTheBread.id]
];

export const textTheConfession = await makeMultilingualTextWithId(
	'28D372FD-E8BB-4E0A-8C59-F53942109B81',
	'F28B3BF0-2992-4FF0-AEA5-6DBCB73B9DD5',
	'Ἡ Ὁμολογία',
	'61381B50-1B21-4538-9AD9-EF12FA4B0F46',
	'Ϯⲟⲙⲟⲗⲟⲅⲓⲁ',
	'4AC0A231-1DC7-45B3-849C-1F3DF0A2771B',
	'الاِعْتِرَافُ',
	'46879386-7BBE-4D80-B212-0F4913E98DF2',
	'The Confession',
	'E17EC9FA-3619-48E1-A3C8-37D1E0F44080',
	'Das Bekenntnis'
);

export const chapterTheConfession = registerNode<Basenode>({
	id: 'D8F0BAAD-6760-4B29-9088-832CC7EB706F',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheConfession.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id],
	[chapterTheLitanies.id],
	[chapterTheCommemorationOfTheSaints.id],
	[chapterTheBreakingOfTheBread.id],
	[chapterTheConfession.id]
];

export const textTheLordsPrayer = await makeMultilingualTextWithId(
	'E1FEC3CB-62A5-478C-A796-C19A72A174C3',
	'610B4427-AB79-4CEA-830F-789159EC0D94',
	'Ἡ Κυριακὴ Προσευχή',
	'2B06E038-BFB5-4B10-86C3-9ECF46979FB0',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ',
	'4A978666-794A-4826-9A9F-85B47673522E',
	'صَلاَةُ الرَّبِّ',
	'F0A6698F-03D9-4A8F-9AFC-46DE6547C3EB',
	"The Lord's Prayer",
	'3BBF2349-6313-4FF6-9A0E-506DC6F2952E',
	'Das Gebet des Herrn'
);

export const sectionTheLordsPrayer = registerNode<Basenode>({
	id: '3F369F36-CC76-4D30-BABA-96F64A85D7EF',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textTheLordsPrayer.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerForPreservationFromSinAndTemptation = await makeMultilingualTextWithId(
	'B73F70F1-06FB-4E54-9EE5-01030138EC97',
	'8B5F9B77-BF78-4065-8656-3D47D2BA13B7',
	'Ἡ Εὐχὴ τῆς φυλακῆς ἀπὸ τῆς ἁμαρτίας καὶ τοῦ πειρασμοῦ',
	'34E2A482-5592-4551-932F-E4BB7C5769E0',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲁ̀ⲣⲉϩ ⲉ̀ⲃⲟⲗϩⲁ ⲫ̀ⲛⲟⲃⲓ ⲛⲉⲙ ⲡⲓⲡⲓⲣⲁⲥⲙⲟⲥ',
	'AEDFF534-BEAF-4A1D-9E34-D10CEBA3E2F0',
	'صَلاَةُ الْحِفْظِ مِنَ الْخَطِيَّةِ وَالتَّجْرِبَةِ',
	'F78A0FC4-90A3-43CF-B12B-32830BB18A8A',
	'The Prayer for Preservation from Sin and Temptation',
	'CD84D08A-B781-4A0E-98AA-554A3F2C351B',
	'Das Gebet für die Bewahrung vor der Sünde und der Versuchung'
);

export const sectionThePrayerForPreservationFromSinAndTemptation = registerNode<Basenode>({
	id: '27A9A6AE-21AA-423A-BF29-F74CC447FB4F',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textThePrayerForPreservationFromSinAndTemptation.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfSubmission = await makeMultilingualTextWithId(
	'F690C327-3114-4C7E-8A37-CE7DE22EED40',
	'E50766AA-7068-4C2C-9E00-4B8CC8AB96D4',
	'Ἡ Εὐχὴ τῆς Ὑποταγῆς',
	'2C6E0664-3E40-41E5-B2B4-40E8D61A64AC',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲟⲩⲧ',
	'C1D46ED5-E1B0-4508-B86B-6CEB44BEF28D',
	'صَلاَةُ الْخُضُوعِ',
	'3DC41379-D306-479B-8796-B16A5C212148',
	'The Prayer of Submission',
	'09F73440-0537-40C7-A1B8-6EE787A4B121',
	'Das Gebet der Hingabe'
);

export const sectionThePrayerOfSubmission = registerNode<Basenode>({
	id: 'DF28B664-8D12-48E7-A5E2-6C8998777A5C',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textThePrayerOfSubmission.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfAbsolution = await makeMultilingualTextWithId(
	'BAF86F1E-E3C7-4BC8-B2A4-87EE3F5C622A',
	'B3A233D6-5BCB-461B-B93D-E42C9A8E91EC',
	'Ἡ Εὐχὴ τῆς Ἀπολύσεως',
	'C329C594-ECB5-4280-BE23-321E4CBB5854',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ',
	'6D1622BD-265D-483D-BAD1-D1DECEDA8F66',
	'صَلاَةُ الْحَلِّ',
	'FA0CD121-5951-492A-8A71-B0FBDD66CB89',
	'The Prayer of Absolution',
	'B641809D-542E-4305-9946-B01980767BD8',
	'Das Gebet des Losspruches'
);

export const sectionThePrayerOfAbsolution = registerNode<Basenode>({
	id: 'B2D943B8-163F-4081-AA45-C1365A7DC2B4',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textThePrayerOfAbsolution.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheShortPrayerForThePeaceOfTheChurchThePatriarchTheMetropolitanOrBishopAndTheCongregations =
	await makeMultilingualTextWithId(
		'7F630295-26C9-4F0C-A381-D4ED10FE1104',
		'6BF3C9BE-D056-4FF4-A2F7-1F8ADE6401A7',
		'Ἡ Σύντομος Εὐχὴ ὑπὲρ τῆς εἰρήνης τῆς Ἐκκλησίας, τοῦ Πατριάρχου, τοῦ Μητροπολίτου ἢ τοῦ Ἐπισκόπου, καὶ τῶν Συνάξεων',
		'42E63DB2-1902-4588-B7E1-5684618B69AC',
		'Ϯⲉⲩⲭⲏ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲛⲉⲙ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲉⲙ ⲡⲓⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲡⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲛⲉⲙ ⲛⲓⲑⲱⲟⲩϯ',
		'F6CC379B-1B05-4EA8-ABAF-F2D725DBA97C',
		'أُوشِيَةُ سَلاَمِ الْكَنِيسَةِ وَالْبَطْرِيَرْكِ وَالْمُطْرَانِ أَوِ الْأُسْقُفِ وَالاِجْتِمَاعَاتِ الْقَصِيرَةُ',
		'BF3CDD64-D9A7-466B-B5D1-50935969C555',
		'The Short Prayer for the Peace of the Church, the Patriarch, the Metropolitan or Bishop, and the Congregations',
		'E316F60D-ABA2-4C91-ABBE-F2A345BD6FBD',
		'Das kurze Gebet für den Frieden der Kirche, für den Patriarchen sowie den Metropoliten oder Bischof und für die Versammlungen'
	);

export const sectionTheShortPrayerForThePeaceOfTheChurchThePatriarchTheMetropolitanOrBishopAndTheCongregations =
	registerNode<Basenode>({
		id: '1B13A9F5-100B-45BE-8B78-4AC2854D1EBE',
		users: [chapterTheConfession.id],
		type: NodeType.Section,
		value:
			textTheShortPrayerForThePeaceOfTheChurchThePatriarchTheMetropolitanOrBishopAndTheCongregations.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHolyThingsForTheHoly = await makeMultilingualTextWithId(
	'DB3FC96D-CD39-45D1-A5EC-4D64D4DDD7D5',
	'54C62C48-CBAB-4B19-979D-E035A1BD75CB',
	'Τὰ Ἅγια τοῖς Ἁγίοις',
	'AEFD42A1-FBD8-40A6-8355-80A551CAF18E',
	'Ⲛⲏ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲛⲏ ⲉⲑⲟⲩⲁⲃ',
	'8111396E-A3B7-4982-A820-D51BAFC9CE69',
	'الْقُدْسَاتُ لِلْقِدِّيسِينَ',
	'CB603533-E7F2-4A6A-83EA-AC521094A7F4',
	'The Holy Things for the Holy',
	'877065C5-A678-4B15-9698-E4F463659354',
	'Das Heilige den Heiligen'
);

export const sectionTheHolyThingsForTheHoly = registerNode<Basenode>({
	id: 'AA0902E6-4C34-4B35-B844-9626EEC779D7',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textTheHolyThingsForTheHoly.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConfessionSection = await makeMultilingualTextWithId(
	'E09219FE-9ACE-463B-A44E-4B7A089B79BF',
	'ED1EA9EA-9837-4347-967A-E692F6FB6CAF',
	'Ἡ Ὁμολογία',
	'0D076200-3F78-4F95-9DD5-81A16513F14D',
	'Ϯⲟⲙⲟⲗⲟⲅⲓⲁ',
	'DA12381B-8CF3-4BFB-A6EA-E6BB8BA7DDAC',
	'الاِعْتِرَافُ',
	'521F58CD-AD37-4D5F-A3A3-801E270A0208',
	'The Confession',
	'F5846A0A-2119-4EB5-BE6A-D080092172EE',
	'Das Bekenntnis'
);

export const sectionTheConfession = registerNode<Basenode>({
	id: '04172A7E-6E3F-4C1B-9358-AE3EC51CF5C9',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textTheConfessionSection.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAResponseOfTheConfession = await makeMultilingualTextWithId(
	'AD39DBFA-90F2-4D06-A879-74758D77C469',
	'0570714E-8464-4C4D-8912-D5627E7CE751',
	'Ἀπόκρισις τῆς Ὁμολογίας',
	'71954216-A0BB-4C19-A8FA-703CCE4EBFDC',
	'Ⲟⲩⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲟⲙⲟⲗⲟⲅⲓⲁ',
	'5B45BC35-5374-4160-894B-A13057E9E587',
	'مَرَدٌّ عَلَى الاِعْتِرَافِ',
	'2678F803-6B33-4D14-B0B6-6763E5B76A9B',
	'A Response to the Confession',
	'F2A92237-CCF9-48C4-981D-48684DC176ED',
	'Eine Erwiderung des Bekenntnisses'
);

export const sectionAResponseOfTheConfession = registerNode<Basenode>({
	id: '38F967A3-77E3-4576-8431-4E47B87C189F',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textAResponseOfTheConfession.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAnotherResponseOfTheConfession = await makeMultilingualTextWithId(
	'707B38CB-EAD3-40B1-AB71-D3B499265AAA',
	'26B84134-4C1E-44F7-A454-8E4E0EB9F257',
	'Ἄλλη Ἀπόκρισις τῆς Ὁμολογίας',
	'5CDCE310-6B2D-40AE-9A21-8E98A1421226',
	'Ⲕⲉⲉ̀ⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲟⲙⲟⲗⲟⲅⲓⲁ',
	'2CBFC7B9-9B49-473F-8B10-5907ABC4FE01',
	'مَرَدٌّ آخَرُ عَلَى الاِعْتِرَافِ',
	'3F6475BF-41FA-459E-9C95-70CE780C8CCF',
	'Another Response to the Confession',
	'1B3CF4E2-B701-4170-9754-DC1D01890F8D',
	'Eine andere Erwiderung des Bekenntnisses'
);

export const sectionAnotherResponseOfTheConfession = registerNode<Basenode>({
	id: 'EC8B19CC-7435-49F9-8984-D59025412C44',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textAnotherResponseOfTheConfession.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAPrayerForParticipationInTheEucharist = await makeMultilingualTextWithId(
	'B449D021-5D97-48D7-87B5-50391DB01EEE',
	'029B2B39-635C-40E9-8C3D-B3F8FB14AEF9',
	'Εὐχὴ διὰ τὴν μετάληψιν τῆς Εὐχαριστίας',
	'78ACF7CD-F3B9-4817-A2D0-5E4B7A2C93F8',
	'Ⲟⲩϣⲗⲏⲗ ⲉⲑⲃⲉ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
	'48D68604-95E8-45DB-9595-540F42AC12FF',
	'صَلاَةٌ لِلتَّنَاوُلِ مِنَ الإِفْخَارِسْتِيَّا',
	'AB23FD94-649C-444C-88C5-FC7A145057B5',
	'A Prayer for Participation in the Eucharist',
	'05B3B348-7C1B-48D0-BFE8-CB20C4218BCF',
	'Ein Gebet zur Teilnahme an der Eucharistie'
);

export const sectionAPrayerForParticipationInTheEucharist = registerNode<Basenode>({
	id: 'C95193E6-3AF3-4A06-8691-ECD382F395EA',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textAPrayerForParticipationInTheEucharist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondPrayerForParticipationInTheEucharist = await makeMultilingualTextWithId(
	'0AA5B2F9-C73B-4612-828B-F76029121F5E',
	'E225162B-FD92-4A82-8B61-E8B78DAC8FBC',
	'Δευτέρα Εὐχὴ διὰ τὴν μετάληψιν τῆς Εὐχαριστίας',
	'00A4F17D-A0D3-4BB0-9791-F1BBB8AE4BC5',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ϣⲗⲏⲗ ⲉⲑⲃⲉ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
	'7E8B2E2B-46E9-451C-A80B-5D0463DD84E2',
	'صَلاَةٌ ثَانِيَةٌ لِلتَّنَاوُلِ مِنَ الإِفْخَارِسْتِيَّا',
	'B06A91C7-E64B-41E8-AA4C-CF9BA7D65FBA',
	'A Second Prayer for Participation in the Eucharist',
	'AE535AD1-2D91-4132-B13E-6266BBD0E1DD',
	'Ein zweites Gebet zur Teilnahme an der Eucharistie'
);

export const sectionASecondPrayerForParticipationInTheEucharist = registerNode<Basenode>({
	id: 'BADFDF06-1C6D-4E76-A6AD-17C80839F067',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textASecondPrayerForParticipationInTheEucharist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdPrayerForParticipationInTheEucharist = await makeMultilingualTextWithId(
	'0B6E7C7B-1409-4674-8C31-BB5231DAC17C',
	'69898F80-79F0-4870-A1C5-BB2A0599410A',
	'Τρίτη Εὐχὴ διὰ τὴν μετάληψιν τῆς Εὐχαριστίας',
	'A3153B10-5CD2-436B-87E6-473A3E3F0B04',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ϣⲗⲏⲗ ⲉⲑⲃⲉ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
	'420692CA-676E-44DF-B31F-1B9CD7F16FF7',
	'صَلاَةٌ ثَالِثَةٌ لِلتَّنَاوُلِ مِنَ الإِفْخَارِسْتِيَّا',
	'20FEF235-0130-4F57-95BB-4C1DF97767C1',
	'A Third Prayer for Participation in the Eucharist',
	'5948E1A4-F0DB-42A2-BA48-DA6742570408',
	'Ein drittes Gebet zur Teilnahme an der Eucharistie'
);

export const sectionAThirdPrayerForParticipationInTheEucharist = registerNode<Basenode>({
	id: '2C3AE5B3-F8A2-4545-83E1-C1A2F6133AA9',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textAThirdPrayerForParticipationInTheEucharist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFourthPrayerForParticipationInTheEucharist = await makeMultilingualTextWithId(
	'A024BF71-F8C0-4DAF-AE80-4BDBA39358A0',
	'3451E866-7BA1-4341-8871-F7B5A91507D8',
	'Τετάρτη Εὐχὴ διὰ τὴν μετάληψιν τῆς Εὐχαριστίας',
	'CDB11DC8-6FDA-4B6B-BFA8-7E7414EADA66',
	'Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ϣⲗⲏⲗ ⲉⲑⲃⲉ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
	'F639FCF5-6B1F-4E74-BEA2-2B969102D7C2',
	'صَلاَةٌ رَابِعَةٌ لِلتَّنَاوُلِ مِنَ الإِفْخَارِسْتِيَّا',
	'0E416279-7539-420B-AD6B-576744B508E0',
	'A Fourth Prayer for Participation in the Eucharist',
	'A96EC154-0DF2-4978-B53E-D93647CF008C',
	'Ein viertes Gebet zur Teilnahme an der Eucharistie'
);

export const sectionAFourthPrayerForParticipationInTheEucharist = registerNode<Basenode>({
	id: 'F0187AF3-6B7F-42C7-A8FB-BE0C94136B7D',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textAFourthPrayerForParticipationInTheEucharist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfTheConfession = await makeMultilingualTextWithId(
	'E6D048DF-CE9B-40EC-80DE-426954876C3C',
	'88F4C64A-99F5-447D-97E7-3C338CE831BD',
	'Ἡ Λῆξις τῆς Ὁμολογίας',
	'7A410CF0-CC67-43E6-B4E0-DBBF086A77C5',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ϯⲟⲙⲟⲗⲟⲅⲓⲁ',
	'914C3789-0EC9-4615-B431-B85E943B659C',
	'خِتَامُ الاِعْتِرَافِ',
	'9888C5D2-3E41-4F51-BAA9-5FB73A99352F',
	'The Conclusion of the Confession',
	'5EB074FB-A4DB-4B8E-93D5-2EE3CC3B2FF1',
	'Der Abschluss des Bekenntnisses'
);

export const sectionTheConclusionOfTheConfession = registerNode<Basenode>({
	id: 'F97FEA57-539B-4A32-BF59-132BD09079A9',
	users: [chapterTheConfession.id],
	type: NodeType.Section,
	value: textTheConclusionOfTheConfession.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheConfession.children = [
	[sectionTheLordsPrayer.id],
	[sectionThePrayerForPreservationFromSinAndTemptation.id],
	[sectionThePrayerOfSubmission.id],
	[sectionThePrayerOfAbsolution.id],
	[
		sectionTheShortPrayerForThePeaceOfTheChurchThePatriarchTheMetropolitanOrBishopAndTheCongregations.id
	],
	[sectionTheHolyThingsForTheHoly.id],
	[sectionTheConfession.id],
	[sectionAResponseOfTheConfession.id],
	[sectionAnotherResponseOfTheConfession.id],
	[
		sectionAPrayerForParticipationInTheEucharist.id,
		sectionASecondPrayerForParticipationInTheEucharist.id,
		sectionAThirdPrayerForParticipationInTheEucharist.id,
		sectionAFourthPrayerForParticipationInTheEucharist.id
	],
	[sectionTheConclusionOfTheConfession.id]
];

export const textTheDistributionOfTheMysteries = await makeMultilingualTextWithId(
	'C25D3795-674C-4A3B-8E65-9A5DD743611B',
	'827FFE28-1B78-43AB-A90B-776ABBBF8F35',
	'Ἡ Μετάδοσις τῶν Μυστηρίων',
	'8F100ACF-9DFE-4734-A668-FE4F8F70318C',
	'Ϯⲙⲉⲧⲁⲇⲟⲥⲓⲥ ⲛ̀ⲧⲉ ⲛⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ',
	'4FE8C1EC-7926-4C82-948A-0C60422F1132',
	'تَوْزِيعُ الْأَسْرَارِ',
	'19E72272-250F-40AE-B1F2-2F91EDC2E3F0',
	'The Distribution of the Mysteries',
	'EDC66E57-12DE-4204-8117-1F60AD8AF987',
	'Die Spendung der Mysterien'
);

export const chapterTheDistributionOfTheMysteries = registerNode<Basenode>({
	id: '898F0FB0-EB61-4772-8EC7-784F79338D97',
	users: [partLiturgyOfTheFaithful.id],
	type: NodeType.Chapter,
	value: textTheDistributionOfTheMysteries.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAPrayerBeforeReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'61B24ADA-2424-484A-A7FC-81E5A4DAAF26',
	'EE6DD82C-DE7E-4FD9-A059-F2D028B770B5',
	'Εὐχὴ πρὸ τῆς μεταλήψεως τοῦ Σώματος καὶ τοῦ Αἵματος',
	'F0E0437A-8CCB-46EE-918D-0EF8ABCC2091',
	'Ⲟⲩϣⲗⲏⲗ ϧⲁϫⲉⲛ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'535E56A1-E05C-4ACC-BFEF-C3DC31BD5A30',
	'صَلاَةٌ قَبْلَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'D086FD2D-5E17-4E0A-A076-636FCA64D573',
	'A Prayer before Receiving the Body and the Blood',
	'CFE99ABB-2793-4943-A21F-EE712B917FE0',
	'Ein Gebet vor dem Empfangen des Leibes und des Blutes'
);

export const sectionAPrayerBeforeReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: '63369897-513A-43C0-A551-BDFEBAD2099E',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAPrayerBeforeReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondPrayerBeforeReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'35437039-E51D-46AB-BFBD-7CFF1591E0E3',
	'F1400FCE-A19A-4262-AC1D-F777BEED1B8B',
	'Δευτέρα Εὐχὴ πρὸ τῆς μεταλήψεως τοῦ Σώματος καὶ τοῦ Αἵματος',
	'15C8A97D-7404-412A-BC29-A9304FCFC19F',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ϣⲗⲏⲗ ϧⲁϫⲉⲛ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'D721133F-3751-4EBD-9E41-7246733EBFF6',
	'صَلاَةٌ ثَانِيَةٌ قَبْلَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'7B7D6C00-2521-4071-B537-EA7FDD5894C1',
	'A Second Prayer before Receiving the Body and the Blood',
	'8E5352AC-6FE7-4A22-86F0-6B39ECFD1B85',
	'Ein zweites Gebet vor dem Empfangen des Leibes und des Blutes'
);

export const sectionASecondPrayerBeforeReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: 'CFA49F5A-F3DD-45E4-B6B9-F88799C48B9D',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textASecondPrayerBeforeReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdPrayerBeforeReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'AA89C4F2-6B73-49E0-9CB4-0F5AE26FFD90',
	'A3979C88-5585-4AE6-8866-7C5C5EEBC7F6',
	'Τρίτη Εὐχὴ πρὸ τῆς μεταλήψεως τοῦ Σώματος καὶ τοῦ Αἵματος',
	'64F72047-7C3C-4B1A-ACF3-DCD22D0FB0C0',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ϣⲗⲏⲗ ϧⲁϫⲉⲛ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'1EB2C14D-37F8-4F76-B592-200B2A3290A7',
	'صَلاَةٌ ثَالِثَةٌ قَبْلَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'C3CA2460-9A86-4BE5-B8CF-F9AEBD33CC99',
	'A Third Prayer before Receiving the Body and the Blood',
	'643DA9E8-F5AE-4D06-9357-49AE2584354E',
	'Ein drittes Gebet vor dem Empfangen des Leibes und des Blutes'
);

export const sectionAThirdPrayerBeforeReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: '7C76DD29-8DB4-4391-86D7-F94004CFA710',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAThirdPrayerBeforeReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAFourthPrayerBeforeReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'350FC79C-84B9-4D43-BC98-AC4B0E890B1A',
	'210CF6D2-9160-45B4-B133-461692C224A4',
	'Τετάρτη Εὐχὴ πρὸ τῆς μεταλήψεως τοῦ Σώματος καὶ τοῦ Αἵματος',
	'FAE0BC84-FE9A-4F75-9587-37FF78EF4670',
	'Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ϣⲗⲏⲗ ϧⲁϫⲉⲛ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'B9869BED-E55B-4697-9423-C5B8D4ADE332',
	'صَلاَةٌ رَابِعَةٌ قَبْلَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'2EC9D656-4889-486C-87B8-C98F46EAFB57',
	'A Fourth Prayer before Receiving the Body and the Blood',
	'98938DEB-A10D-4B0B-9EF4-2CF10D1FFF72',
	'Ein viertes Gebet vor dem Empfangen des Leibes und des Blutes'
);

export const sectionAFourthPrayerBeforeReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: '246E7751-B9E2-4E7F-AB73-FFFF9259D8FC',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAFourthPrayerBeforeReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheDistributionOfTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'A4B7E960-38A1-41F0-91FB-83EB0CA5EC83',
	'33CB8F78-1E54-439C-868A-BD00C3417B3C',
	'Ἡ Μετάδοσις τοῦ Σώματος καὶ τοῦ Αἵματος',
	'8E0989A8-2C6D-4983-8D0E-5D2CB55A0A1E',
	'Ϯⲙⲉⲧⲁⲇⲟⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'70D487B7-E128-4863-BCAC-D344F04F3FB6',
	'تَوْزِيعُ الْجَسَدِ وَالدَّمِ',
	'FE0E2D29-7165-4DF5-AB3B-5B31183C18F9',
	'The Distribution of the Body and the Blood',
	'692417A3-CBA0-44B0-9F6E-EA0373D1D1EE',
	'Die Spendung des Leibes und des Blutes'
);

export const sectionTheDistributionOfTheBodyAndTheBlood = registerNode<Basenode>({
	id: '971F5871-BCE1-4CC9-9ECE-40B69E672CF1',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheDistributionOfTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAPrayerAfterReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'5CE9AD92-A80F-4CB1-91B0-A3405DDBB13D',
	'46D4810D-151D-4D11-8201-A92462FEA46E',
	'Εὐχὴ μετὰ τὴν μετάληψιν τοῦ Σώματος καὶ τοῦ Αἵματος',
	'B6BA2EDC-9AAF-4F5B-B7D8-BD5B91372865',
	'Ⲟⲩϣⲗⲏⲗ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'1F5386AC-2C93-463B-A69F-38765CA3C479',
	'صَلاَةٌ بَعْدَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'AC81217A-7B6D-484B-8BC1-82A30F79C23F',
	'A Prayer after Receiving the Body and the Blood',
	'1B5A414A-474B-405A-82B8-B7CE214F1338',
	'Ein Gebet nach dem Empfangen des Leibes und des Blutes'
);

export const sectionAPrayerAfterReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: '464CA3B3-946B-4CDC-BF76-84957822C9C2',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAPrayerAfterReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondPrayerAfterReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'D32F01D3-18F4-42B2-BA3E-5E22AF8147C2',
	'3BA0F321-69E0-4FD5-8AE1-816710822D02',
	'Δευτέρα Εὐχὴ μετὰ τὴν μετάληψιν τοῦ Σώματος καὶ τοῦ Αἵματος',
	'6B1E1229-B7D7-41AD-9356-A7E70C6C1C93',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ϣⲗⲏⲗ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'93658BD8-60DA-42B1-BA65-AD9FCD14F094',
	'صَلاَةٌ ثَانِيَةٌ بَعْدَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'7F8B8298-B668-4320-8A51-C07D87EE7F35',
	'A Second Prayer after Receiving the Body and the Blood',
	'568D9BD4-132D-4DD6-A742-B5E16CCA39B1',
	'Ein zweites Gebet nach dem Empfangen des Leibes und des Blutes'
);

export const sectionASecondPrayerAfterReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: '0B2DF8FC-83AE-4317-A38C-E5553A1BC07C',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textASecondPrayerAfterReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdPrayerAfterReceivingTheBodyAndTheBlood = await makeMultilingualTextWithId(
	'5B6FBB43-055B-4CE2-ADFE-9CF8C3008480',
	'75F6BA0D-D468-468B-A09B-516D6C074920',
	'Τρίτη Εὐχὴ μετὰ τὴν μετάληψιν τοῦ Σώματος καὶ τοῦ Αἵματος',
	'068A6B07-00EA-4BD5-899B-5F13F9217E19',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ϣⲗⲏⲗ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓϭⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
	'2521302F-4484-4CF9-880F-27EBD80C8891',
	'صَلاَةٌ ثَالِثَةٌ بَعْدَ تَنَاوُلِ الْجَسَدِ وَالدَّمِ',
	'9353A373-AC64-49B6-86A9-233741B9E6A6',
	'A Third Prayer after Receiving the Body and the Blood',
	'94A11CDD-F050-449D-8C47-FABA07640D71',
	'Ein drittes Gebet nach dem Empfangen des Leibes und des Blutes'
);

export const sectionAThirdPrayerAfterReceivingTheBodyAndTheBlood = registerNode<Basenode>({
	id: 'D5CE5D95-42E4-4380-BDE1-151C21B441DE',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAThirdPrayerAfterReceivingTheBodyAndTheBlood.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheCleaningOfTheHolyVessels = await makeMultilingualTextWithId(
	'FF9255D1-B527-4FE8-BC40-96900D7707E6',
	'72C0CF31-88E0-44C7-A634-87572D53462A',
	'Ἡ Ἀπόπλυσις τῶν Ἁγίων Σκευῶν',
	'45730A60-C65F-416C-8B1E-56B227382AC1',
	'Ⲡⲓⲧⲟⲩⲃⲟ ⲛ̀ⲧⲉ ⲛⲓⲥⲕⲉⲩⲟⲥ ⲉⲑⲟⲩⲁⲃ',
	'288E166E-20F8-41EB-9447-5123C3D2314B',
	'تَنْظِيفُ الآنِيَةِ الْمُقَدَّسَةِ',
	'DC119EEC-39A4-440A-B95D-994201700130',
	'The Cleaning of the Holy Vessels',
	'1F05E1F1-CB11-4DEE-A689-242D924D3F15',
	'Die Reinigung der heiligen Gefäße'
);

export const sectionTheCleaningOfTheHolyVessels = registerNode<Basenode>({
	id: 'D670CBA1-5FE3-4257-8D16-802738BC7991',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheCleaningOfTheHolyVessels.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalm150 = await makeMultilingualTextWithId(
	'2FF519C4-DE64-4051-A362-CE195DC9E06D',
	'0381F9E3-BE60-47FE-85E2-0AA5B10F1948',
	'Ὁ Ψαλμὸς ΡΝʹ',
	'7867BB5C-352D-4C69-BA3D-35B566DDB298',
	'Ⲡⲓⲯⲁⲗⲙⲟⲥ ⲣ̅ⲛ̅',
	'C981DD22-7EEA-4288-8AF0-30C07D323E43',
	'الْمَزْمُورُ ١٥٠',
	'4EB6F466-BC53-4D21-A7DC-DBB5A9F5A536',
	'The Psalm 150',
	'8B02DE57-813C-48C1-8829-86EF4A78272D',
	'Der Psalm 150'
);

export const sectionThePsalm150 = registerNode<Basenode>({
	id: '94144328-B7A6-41DB-8C51-421A1B83228D',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textThePsalm150.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnTrulyBlessed = await makeMultilingualTextWithIdWithoutGreek(
	'3C363325-291A-406C-B398-D020C8946AA3',
	'17D8B58B-28CF-4996-8682-05DD135C0683',
	'Ⲡⲓϫⲱ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ',
	'1FA3DDC8-BBE8-49C2-81CF-5AC82EFC52DD',
	'اللَّحْنُ مُبَارَكٌ أَنْتَ بِالْحَقِيقَةِ',
	'828F2C07-E798-458A-B60C-A47F3170E947',
	'The Hymn Blessed are You indeed',
	'9E819EBC-1B6F-4B62-AAAB-8F3F8BEEDCD4',
	'Das Lied Wahrlich gesegnet'
);

export const sectionTheHymnTrulyBlessed = registerNode<Basenode>({
	id: '77B05D26-AB37-4291-8B3F-9E871824594E',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheHymnTrulyBlessed.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnTheBreadOfLife = await makeMultilingualTextWithIdWithoutGreek(
	'428736B5-4162-40FD-8287-67BC0339E785',
	'C54FA541-11F4-4F1F-B151-F09186820695',
	'Ⲡⲓϫⲱ Ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ',
	'8016C022-A954-49B7-9CD7-6F04341DFBD7',
	'اللَّحْنُ خُبْزُ الْحَيَاةِ',
	'89AC8BDB-03E8-4869-B0D9-C8FAF12B69E7',
	'The Hymn "The Bread of Life"',
	'033182C8-B46F-4C92-87C3-73A27658BC0F',
	'Das Lied Das Brot des Lebens'
);

export const sectionTheHymnTheBreadOfLife = registerNode<Basenode>({
	id: '8A764415-15B5-4609-ACEC-3C64C68B8A4D',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheHymnTheBreadOfLife.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnBlessedBeTheFatherAndTheSonAndTheHolySpirit =
	await makeMultilingualTextWithIdWithoutGreek(
		'B0CC91FA-3DCB-4415-A95D-BFEFC19C6CDE',
		'9521D4A5-B510-4BD2-AD6E-7481A087DF3E',
		'Ⲡⲓϫⲱ Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
		'1775D468-F978-478B-8B8C-4F37DAD2DC9F',
		'اللَّحْنُ مُبَارَكٌ الآبُ وَالاِبْنُ وَالرُّوحُ الْقُدُسُ',
		'419319F5-615C-4357-989E-650BF5A94199',
		'The Hymn "Blessed Be the Father and the Son and the Holy Spirit"',
		'827370DB-CC97-46E4-B885-3A82185FD9A8',
		'Das Lied Gesegnet sei der Vater und der Sohn und der Heilige Geist'
	);

export const sectionTheHymnBlessedBeTheFatherAndTheSonAndTheHolySpirit = registerNode<Basenode>({
	id: '796B59A5-B8F5-4AA1-B66B-EB485671C093',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheHymnBlessedBeTheFatherAndTheSonAndTheHolySpirit.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnMyStrengthAndMyPraise = await makeMultilingualTextWithIdWithoutGreek(
	'A6146CA4-8CEF-49CE-A565-9046AC410FDB',
	'AA95DCFE-1BF4-404E-A8A7-6E0070A50635',
	'Ⲡⲓϫⲱ Ⲧⲁϫⲟⲙ ⲛⲉⲙ ⲡⲁⲥ̀ⲙⲟⲩ',
	'49DCA9F1-0707-45FF-B0E0-68D58A265D0F',
	'التَّرْتِيلَةُ قُوَّتِي وَتَسْبِحَتِي',
	'08269A0C-3F06-45CD-A55E-8DCB1B6E4F46',
	'The Hymn "My Strength and My Praise"',
	'2D8E091C-77C5-4281-9CB8-D35DEA73D8F8',
	'Das Lied Meine Stärke und mein Lied'
);

export const sectionTheHymnMyStrengthAndMyPraise = registerNode<Basenode>({
	id: '6A52BBC5-6E58-429A-83ED-3BA4F754529D',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheHymnMyStrengthAndMyPraise.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBloodOnMaundyThursday =
	await makeMultilingualTextWithId(
		'94EF2E7A-0304-4D8E-BDE1-7FFB10A9D714',
		'F3689E98-AAE8-4079-AC3E-E058F0715073',
		'Ἡ Εὐχὴ τῆς Εὐχαριστίας μετὰ τὴν Μετάδοσιν τοῦ Σώματος καὶ τοῦ Αἵματος ἐν τῇ Μεγάλῃ Πέμπτῃ',
		'798427AE-E18C-455B-A53E-9BDF66987D2F',
		'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ Ⲡⲓϣⲉⲡϩⲙⲟⲧ ⲙⲉⲛⲉⲛⲥⲁ ϯⲙⲉⲧⲁⲇⲟⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ ϧⲉⲛ ⲡⲓⲡⲉⲙⲯⲓ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ',
		'980D476B-581A-4603-80D7-C0E988AC0BD7',
		'صَلاَةُ الشُّكْرِ بَعْدَ تَوْزِيعِ الْجَسَدِ وَالدَّمِ فِي خَمِيسِ الْعَهْدِ',
		'FF4BC851-7BF3-49E7-A3C9-F3C843B08279',
		'The Prayer of Thanksgiving after the Distribution of the Body and the Blood on Maundy Thursday',
		'CCED7D88-81F0-45E5-92A8-E5D5D28D84A3',
		'Das Gebet der Danksagung nach der Spendung des Leibes und des Blutes an Gründonnerstag'
	);

export const sectionThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBloodOnMaundyThursday =
	registerNode<Basenode>({
		id: '216F9A0C-2562-413B-A4A0-F9D5F8F2345F',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value: textThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBloodOnMaundyThursday.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBlood =
	await makeMultilingualTextWithId(
		'734129D7-B2E3-4C99-AB4A-748E4A385B18',
		'85D32047-EFCE-4464-A9EA-32D863D43197',
		'Ἡ Εὐχὴ τῆς Εὐχαριστίας μετὰ τὴν Μετάδοσιν τοῦ Σώματος καὶ τοῦ Αἵματος',
		'F0B0E947-9D05-4BEF-A80B-E6030BEE954D',
		'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ Ⲡⲓϣⲉⲡϩⲙⲟⲧ ⲙⲉⲛⲉⲛⲥⲁ ϯⲙⲉⲧⲁⲇⲟⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ',
		'707ABA69-0EAC-44FF-922A-8D5377904BA6',
		'صَلاَةُ الشُّكْرِ بَعْدَ تَوْزِيعِ الْجَسَدِ وَالدَّمِ',
		'6957A01B-81AE-4942-BAAB-D6BEB8BB7BFF',
		'The Prayer of Thanksgiving after the Distribution of the Body and the Blood',
		'991F7F19-0CD3-4CCA-95D1-1C6858D74E70',
		'Das Gebet der Danksagung nach der Spendung des Leibes und des Blutes'
	);

export const sectionThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBlood =
	registerNode<Basenode>({
		id: 'C2808149-8C37-4A97-A1C1-1446B728C56B',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value: textThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBlood.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textThePrayerOfSubmissionAfterTheDistributionOfTheBodyAndTheBloodAndBeforeTheLayingOnOfHands =
	await makeMultilingualTextWithId(
		'44A144CA-CBAF-4F09-ABF2-DB9A7E5412D9',
		'F5A2C33E-D490-4157-91F7-F1D17388FF65',
		'Ἡ Εὐχὴ τῆς Ὑποταγῆς μετὰ τὴν Μετάδοσιν τοῦ Σώματος καὶ τοῦ Αἵματος καὶ πρὸ τῆς Χειροθεσίας',
		'CE99BFFF-8A32-4C03-8235-6BC66744C823',
		'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲟⲩⲧ ⲙⲉⲛⲉⲛⲥⲁ ϯⲙⲉⲧⲁⲇⲟⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥⲛⲟϥ ⲟⲩⲟϩ ϧⲁϫⲉⲛ ϯⲭⲓⲣⲟⲑⲉⲥⲓⲁ',
		'AB1AB60A-C2A6-400F-B136-05B41B73ABBB',
		'صَلاَةُ الْخُضُوعِ بَعْدَ تَوْزِيعِ الْجَسَدِ وَالدَّمِ وَقَبْلَ وَضْعِ الأَيَادِي',
		'729C3DE5-8FFB-469D-A924-AEA5A9710F16',
		'The Prayer of Submission after the Distribution of the Body and the Blood and before the Laying on of Hands',
		'F75CD162-DFB1-409B-8E53-9FDE6B09E429',
		'Das Gebet der Unterwerfung nach der Spendung des Leibes und des Blutes und vor der Handauflegung'
	);

export const sectionThePrayerOfSubmissionAfterTheDistributionOfTheBodyAndTheBloodAndBeforeTheLayingOnOfHands =
	registerNode<Basenode>({
		id: 'EEB03F5B-1217-4C8D-B88E-C5BAAB2B4E99',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value:
			textThePrayerOfSubmissionAfterTheDistributionOfTheBodyAndTheBloodAndBeforeTheLayingOnOfHands.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheDismissal = await makeMultilingualTextWithId(
	'B5FFF6C4-1E8B-43D6-BCE7-872E2BAF4C65',
	'694F0B2E-9185-49F4-B377-87AA56D1FD68',
	'Ἡ Ἀπόλυσις',
	'D2958190-9CA6-460F-8444-8E4F110EC833',
	'Ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ',
	'69B7F093-9FE0-4184-B1CD-AB79B7B551FF',
	'الْإِطْلاَقُ',
	'42551D81-3086-4DE7-B688-BC74EF9D5C5E',
	'The Dismissal',
	'586CE7B9-8C28-4FD6-ABEA-43120210CF59',
	'Die Entlassung'
);

export const sectionTheDismissal = registerNode<Basenode>({
	id: '56968D95-8209-42C2-A299-1EADFF8B5C93',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheDismissal.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConcludingHymnForTheOrdinaryDaysFromThe11thOfPaoniToThe9thOfPaopi =
	await makeMultilingualTextWithId(
		'6FE9121C-1B50-4AB1-99B3-D636305885CF',
		'D897F573-9796-4C04-887A-35C75354C06C',
		'Ὁ Ὕμνος τῆς Λήξεως διὰ τὰς κοινὰς ἡμέρας ἀπὸ ια΄ Παωνὶ ἕως θ΄ Παωπί',
		'D704864C-52B5-478E-9BF0-2D1BAC11156C',
		'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ⲁ̅ ⲙ̀Ⲡⲁⲱⲛⲓ ϣⲁ ⲡⲓⲑ̅ ⲙ̀Ⲡⲁⲟⲡⲓ',
		'47AF9723-0A18-4B62-90F7-FED96335E485',
		'قَانُونُ الْخِتَامِ لِلْأَيَّامِ السَّنَوِيَّةِ مِنَ ١١ بُؤُونَةَ إِلَى ٩ بَابَه',
		'45FB5C94-1E92-4854-AE98-F2F2AB3FFA05',
		'The Concluding Hymn for the Ordinary Days from the 11th of Paoni to the 9th of Paopi',
		'C5B9DBCB-C72F-4E3D-B149-94C44461F8AC',
		'Das Lied zum Abschluss an gewöhnlichen Tagen vom 11. Paoni bis zum 9. Paopi'
	);

export const sectionTheConcludingHymnForTheOrdinaryDaysFromThe11thOfPaoniToThe9thOfPaopi =
	registerNode<Basenode>({
		id: 'F5ECFC4C-4C94-4983-B477-16364085154B',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value: textTheConcludingHymnForTheOrdinaryDaysFromThe11thOfPaoniToThe9thOfPaopi.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheConcludingHymnForTheOrdinaryDaysFromThe10thOfPaopiToThe10thOfTobi =
	await makeMultilingualTextWithId(
		'B1792B1A-2225-4F92-AB51-3BAECDA964C3',
		'FA24E670-DCBC-4C8B-9936-782B3D0B925E',
		'Ὁ Ὕμνος τῆς Λήξεως διὰ τὰς κοινὰς ἡμέρας ἀπὸ ι΄ Παωπὶ ἕως ι΄ Τωβί',
		'CE64CDB5-88CD-42B5-B63C-8A40F0132736',
		'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ ⲙ̀Ⲡⲁⲟⲡⲓ ϣⲁ ⲡⲓⲓ̅ ⲙ̀Ⲧⲱⲃⲓ',
		'1E9209A5-3FA6-4648-A31F-7811A6ACE8B2',
		'قَانُونُ الْخِتَامِ لِلْأَيَّامِ السَّنَوِيَّةِ مِنَ ١٠ بَابَه إِلَى ١٠ طُوبَة',
		'3A05EDEA-0B3A-4261-BC2B-4B228D6616C9',
		'The Concluding Hymn for the Ordinary Days from the 10th of Paopi to the 10th of Tobi',
		'C987B302-A1BE-400D-9D19-8E3B7F946096',
		'Das Lied zum Abschluss an gewöhnlichen Tagen vom 10. Paopi bis zum 10. Tobi'
	);

export const sectionTheConcludingHymnForTheOrdinaryDaysFromThe10thOfPaopiToThe10thOfTobi =
	registerNode<Basenode>({
		id: '6E30EC44-4DD1-4281-886C-D45B98A41A0A',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value: textTheConcludingHymnForTheOrdinaryDaysFromThe10thOfPaopiToThe10thOfTobi.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheConcludingHymnForTheOrdinaryDaysFromThe11thOfTobiToThe10thOfPaoni =
	await makeMultilingualTextWithId(
		'333D5B7C-371A-4B9B-B756-076DAD6655DA',
		'F97EC60F-056B-42FD-B6B3-9FC50933FF95',
		'Ὁ Ὕμνος τῆς Λήξεως διὰ τὰς κοινὰς ἡμέρας ἀπὸ ια΄ Τωβὶ ἕως ι΄ Παωνί',
		'8BB4A798-3C22-45DA-AD82-EFA0DD423CEB',
		'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲓⲥϫⲉⲛ ⲡⲓⲓ̅ⲁ̅ ⲙ̀Ⲧⲱⲃⲓ ϣⲁ ⲡⲓⲓ̅ ⲙ̀Ⲡⲁⲱⲛⲓ',
		'27BFDF62-3FD0-40F5-9C9B-CD3324185A13',
		'قَانُونُ الْخِتَامِ لِلْأَيَّامِ السَّنَوِيَّةِ مِنَ ١١ طُوبَة إِلَى ١٠ بُؤُونَةَ',
		'22E54F02-4E72-48C6-9673-7211390E4F7A',
		'The Concluding Hymn for the Ordinary Days from the 11th of Tobi to the 10th of Paoni',
		'60A16D8A-957D-4492-B222-023A642AA4B6',
		'Das Lied zum Abschluss an gewöhnlichen Tagen vom 11. Tobi bis zum 10. Paoni'
	);

export const sectionTheConcludingHymnForTheOrdinaryDaysFromThe11thOfTobiToThe10thOfPaoni =
	registerNode<Basenode>({
		id: '8D02380B-EC17-4464-A241-E7D4DA8CEB46',
		users: [chapterTheDistributionOfTheMysteries.id],
		type: NodeType.Section,
		value: textTheConcludingHymnForTheOrdinaryDaysFromThe11thOfTobiToThe10thOfPaoni.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheConcludingHymnForTheOrdinaryDaysOfTheWholeYear =
	await makeMultilingualTextWithId(
		'9F4565C7-7DBC-40A7-819D-47BBF7ADA6EF',
		'4206F9DA-2528-416B-9242-0CF202366DE7',
		'Ὁ Ὕμνος τῆς Λήξεως διὰ τὰς κοινὰς ἡμέρας τοῦ ὅλου ἐνιαυτοῦ',
		'BDF16016-2D6E-4CC7-A436-F11FE3877534',
		'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ⲧⲏⲣⲥ',
		'BD1DE8AC-5DC0-4446-AAE9-45A7606ECCCE',
		'قَانُونُ الْخِتَامِ لِلْأَيَّامِ السَّنَوِيَّةِ طَوَالَ السَّنَةِ',
		'9C3811B8-92D9-46FE-8D81-D6153EE3F744',
		'The Concluding Hymn for the Ordinary Days of the Whole Year',
		'9ECE75B1-A955-4649-AC3F-FFE751C3CB98',
		'Das Lied zum Abschluss an gewöhnlichen Tagen des ganzen Jahres'
	);

export const sectionTheConcludingHymnForTheOrdinaryDaysOfTheWholeYear = registerNode<Basenode>({
	id: 'EB12A861-C693-4D9D-8F01-0DCC5895ED3A',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheConcludingHymnForTheOrdinaryDaysOfTheWholeYear.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheLordsPrayerWithTheConcludingDoxology = await makeMultilingualTextWithId(
	'32034035-672E-4360-812C-443C3C839AA9',
	'49B78EFE-E496-4EF7-8413-5E3BF25C4B67',
	'Ἡ Κυριακὴ Προσευχὴ μετὰ τῆς Δοξολογίας',
	'574810BE-10C4-43BA-9680-B062D21369F7',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ ⲛⲉⲙ ϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ',
	'27B38BE0-6C74-47B1-BED1-E45847984C8F',
	'صَلاَةُ الرَّبِّ مَعَ التَّمْجِيدِ الْخِتَامِيِّ',
	'1F24FCDE-773F-4C20-BE70-4A43513EE6A0',
	"The Lord's Prayer with the Concluding Doxology",
	'6619A61B-1201-40DA-962C-151FD043BE61',
	'Das Gebet des Herrn mit Schlusslob'
);

export const sectionTheLordsPrayerWithTheConcludingDoxology = registerNode<Basenode>({
	id: '7C2EF024-4337-47BE-B09B-AFD6B0C21AB0',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheLordsPrayerWithTheConcludingDoxology.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textABlessingAtParting = await makeMultilingualTextWithId(
	'A232FAF8-69BA-460E-8559-07F85718DA48',
	'FA6302B6-371F-4DD8-B877-5D113DE9E7E9',
	'Εὐλογία εἰς Ἀποχαιρετισμόν',
	'FC55DCD5-2810-4607-A4D3-E4CE08BE8D6A',
	'Ⲟⲩⲥⲙⲟⲩ ⲉⲑⲃⲉ ⲡⲓϫⲓⲛϣⲉ',
	'D159B6A5-4AB0-49F8-B581-7EF83294E373',
	'بَرَكَةٌ لِلْوَدَاعِ',
	'FB3AD0A6-0216-452F-99AF-0D3DE3CE3E99',
	'A Blessing at Parting',
	'F0056F71-E002-494B-AF1F-02679F7DC719',
	'Ein Segen zum Abschied'
);

export const sectionABlessingAtParting = registerNode<Basenode>({
	id: '616BF531-BCB9-4765-ADEE-A93431687461',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textABlessingAtParting.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAnotherBlessingAtParting = await makeMultilingualTextWithId(
	'631E9A9B-E63E-46A9-9510-4289C66E752A',
	'DC776E3C-D1B2-447B-9B60-491FD3F69469',
	'Ἄλλη Εὐλογία εἰς Ἀποχαιρετισμόν',
	'D05C216E-5123-4F04-93A3-5762A6A32E92',
	'Ⲕⲉⲥⲙⲟⲩ ⲉⲑⲃⲉ ⲡⲓϫⲓⲛϣⲉ',
	'DED00D48-4C44-48E9-A059-560867992613',
	'بَرَكَةٌ أُخْرَى لِلْوَدَاعِ',
	'C8067EDD-8AB9-4BBB-B924-9F5A89E54BD7',
	'Another Blessing at Parting',
	'4E99A279-38CF-4038-AC5A-AF7A236B0487',
	'Ein weiterer Segen zum Abschied'
);

export const sectionAnotherBlessingAtParting = registerNode<Basenode>({
	id: 'DBC113DF-730A-4CB0-A7CE-436F005C5E4F',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textAnotherBlessingAtParting.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheVeilingOfTheHolyOfHolies = await makeMultilingualTextWithId(
	'CF66634D-4370-4F49-9E2C-09797B1F1BA3',
	'2285D40D-50A1-4196-90C8-C9724BBBDA42',
	'Ἡ Κάλυψις τῶν Ἁγίων τῶν Ἁγίων',
	'A3E76CC4-39C7-4C8D-B0D5-2A69506B437E',
	'Ⲡⲓϩⲱⲃⲥ ⲛ̀ⲧⲉ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲟⲩⲁⲃ',
	'C4E577DA-109A-4EB7-8503-341E9DE75CA2',
	'تَغْطِيَةُ قُدْسِ الأَقْدَاسِ',
	'D4119F58-C3C7-4A4B-B0A0-5F69CDF41CF2',
	'The Veiling of the Holy of Holies',
	'6CB51155-623F-4535-9736-0B96BC24B179',
	'Die Verhüllung des Allerheiligsten'
);

export const sectionTheVeilingOfTheHolyOfHolies = registerNode<Basenode>({
	id: '6028811F-56AB-4AF2-80F5-4CEF22517610',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheVeilingOfTheHolyOfHolies.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheDistributionOfTheBlessedBread = await makeMultilingualTextWithId(
	'CEE98AB1-C0A3-4C6A-A58B-F300A412F163',
	'8F66DF85-4208-4BFD-9D4B-FD42730B7A7A',
	'Ἡ Διανομὴ τοῦ Εὐλογημένου Ἄρτου',
	'01253341-1CA6-4D9B-BB80-4C73576B959E',
	'Ⲡⲓⲫⲱϣ ⲛ̀ⲧⲉ ⲡⲓⲱⲓⲕ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ',
	'4B0DC10B-F2C4-43A7-9B1A-3D238E325E4A',
	'تَوْزِيعُ الْقُرْبَانِ',
	'2B75A906-4EBC-427B-A9C1-CF099B97CD7D',
	'The Distribution of the Blessed Bread',
	'E0A7FE2F-FA7F-4F41-9924-753FF7E03F89',
	'Die Austeilung des gesegneten Brotes'
);

export const sectionTheDistributionOfTheBlessedBread = registerNode<Basenode>({
	id: '77E852CA-6CB3-4DEB-90ED-7BE798B4FBA9',
	users: [chapterTheDistributionOfTheMysteries.id],
	type: NodeType.Section,
	value: textTheDistributionOfTheBlessedBread.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheDistributionOfTheMysteries.children = [
	[
		sectionAPrayerBeforeReceivingTheBodyAndTheBlood.id,
		sectionASecondPrayerBeforeReceivingTheBodyAndTheBlood.id,
		sectionAThirdPrayerBeforeReceivingTheBodyAndTheBlood.id,
		sectionAFourthPrayerBeforeReceivingTheBodyAndTheBlood.id
	],
	[sectionTheDistributionOfTheBodyAndTheBlood.id],
	[
		sectionAPrayerAfterReceivingTheBodyAndTheBlood.id,
		sectionASecondPrayerAfterReceivingTheBodyAndTheBlood.id,
		sectionAThirdPrayerAfterReceivingTheBodyAndTheBlood.id
	],
	[sectionTheCleaningOfTheHolyVessels.id],
	[sectionThePsalm150.id],
	[sectionTheHymnTrulyBlessed.id],
	[sectionTheHymnTheBreadOfLife.id],
	[sectionTheHymnBlessedBeTheFatherAndTheSonAndTheHolySpirit.id],
	[sectionTheHymnMyStrengthAndMyPraise.id],
	[sectionThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBloodOnMaundyThursday.id],
	[sectionThePrayerOfThanksgivingAfterTheDistributionOfTheBodyAndTheBlood.id],
	[
		sectionThePrayerOfSubmissionAfterTheDistributionOfTheBodyAndTheBloodAndBeforeTheLayingOnOfHands.id
	],
	[sectionTheDismissal.id],
	[
		sectionTheConcludingHymnForTheOrdinaryDaysFromThe11thOfPaoniToThe9thOfPaopi.id,
		sectionTheConcludingHymnForTheOrdinaryDaysFromThe10thOfPaopiToThe10thOfTobi.id,
		sectionTheConcludingHymnForTheOrdinaryDaysFromThe11thOfTobiToThe10thOfPaoni.id,
		sectionTheConcludingHymnForTheOrdinaryDaysOfTheWholeYear.id,
		sectionTheShortBlessing.id
	],
	[sectionTheLordsPrayerWithTheConcludingDoxology.id],
	[sectionABlessingAtParting.id],
	[sectionAnotherBlessingAtParting.id],
	[sectionTheVeilingOfTheHolyOfHolies.id],
	[sectionTheDistributionOfTheBlessedBread.id]
];

partLiturgyOfTheFaithful.children = [
	[chapterTheReconciliation.id],
	[chapterTheAnaphora.id],
	[chapterAgios.id],
	[chapterTheInstitutionPrayers.id],
	[chapterTheLitanies.id],
	[chapterTheCommemorationOfTheSaints.id],
	[chapterTheBreakingOfTheBread.id],
	[chapterTheConfession.id],
	[chapterTheDistributionOfTheMysteries.id]
];
