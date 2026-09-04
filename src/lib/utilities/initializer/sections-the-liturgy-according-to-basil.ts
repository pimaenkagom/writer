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
	'Ein Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein zweiter Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein dritter Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein vierter Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein fünfter Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein sechster Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein siebter Aspasmos Watos für die gewöhnlichen Tage'
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
	'Ein achter Aspasmos Watos für die gewöhnlichen Tage aus der Liturgie nach Gregorius'
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
	[sectionThePrayerForNatureFromThe11thOfPaoniToThe9thOfPaopi.id],
	[sectionThePrayerForNatureFromThe10thOfPaopiToThe10thOfTobi.id],
	[sectionThePrayerForNatureFromThe11thOfTobiToThe10thOfPaoni.id],
	[sectionTheYearRoundPrayerForNature.id]
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

chapterTheCommemorationOfTheSaints.children = [
	[sectionTheCommemorationOfTheSaints.id],
	[sectionTheCommemorationOfThePatriarchs.id],
	[sectionTheCommemorationOfTheDesertFathers.id]
];
