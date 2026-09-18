import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheCallToPrayer } from '$lib/utilities/initializer/shared/section-the-call-to-prayer';

export const textTheOfferingOfTheLamb = await makeMultilingualTextWithId(
	'566FC8F1-FE7E-4C52-8896-83B616F2832D',
	'ADCD683A-10CD-4C5F-8EED-E9C1A9078E0E',
	'Ἡ Πρόθεσις τῶν Δώρων',
	'8F5AA269-B6A5-4CDF-B1D7-EDC5CDEB8EB6',
	'Ϯⲡⲣⲟⲑⲉⲥⲓⲥ ⲛ̀ⲛⲓⲇⲱⲣⲟⲛ',
	'F6837CC3-93D1-4E51-85DA-BA46E37A90DC',
	'تَقْدِيمُ الْقَرَابِينِ',
	'B92268E0-CBC4-4075-A662-41EC2E47045D',
	'The Offering of the Oblations',
	'2E54F240-F870-4476-9BA5-C87F62CE3245',
	'Die Darbringung der Opfergaben'
);

export const partTheOfferingOfTheLamb = registerNode<Basenode>({
	id: '6B18A8DD-2142-4FE6-9874-3DCD942A22BF',
	users: [bookTheLiturgyAccordingToBasil.id],
	type: NodeType.Part,
	value: textTheOfferingOfTheLamb.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
});

export const textThePreparationForTheEucharisticService = await makeMultilingualTextWithId(
	'79731014-B0D6-4238-ADE8-DDFAE1C0B0D4',
	'90AC4529-8BAF-4A8A-888A-E379E9461946',
	'Ἡ Προπαρασκευὴ διὰ τὴν Εὐχαριστιακὴν Διακονίαν',
	'5790A6F5-4F95-45B4-AE48-D53CA140999E',
	'Ⲡⲓⲥⲉⲃⲧⲱⲧ ⲛ̀ⲧⲉ ⲡⲓϣⲉⲙϣⲓ ⲛ̀ⲧⲉ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
	'50E47A5A-0A19-484D-A978-83E77D175C36',
	'اَلاِسْتِعْدَادُ لِلْخِدْمَةِ الْإِفْخَارِسْتِيَّةِ',
	'64BE16BF-EEA2-4C2B-BD19-310250F048DE',
	'The Preparation for the Eucharistic Service',
	'B5E350D4-9CC7-498B-88F4-7A930F5825EE',
	'Die Vorbereitung auf den eucharistischen Dienst'
);

export const chapterThePreparationForTheEucharisticService = registerNode<Basenode>({
	id: 'F37FF04A-3CF4-4702-9CCA-CF8502B3E2DC',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePreparationForTheEucharisticService.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textSelfExaminationBeforeTheService = await makeMultilingualTextWithId(
	'42F43F0A-3059-40A0-9153-555D0CAAC600',
	'21F7BB51-105E-422D-B428-1DE8B38B26FB',
	'Ἡ Αὐτοεξέτασις πρὸ τῆς Διακονίας',
	'69E6234F-6411-4457-9B02-096FEA072402',
	'Ⲡⲓⲉⲣⲇⲟⲕⲓⲙⲁⲍⲓⲛ ϧⲁϫⲉⲛ ⲡⲓϣⲉⲙϣⲓ',
	'7F557DDD-E127-423D-9491-999496968B72',
	'اِمْتِحَانُ الذَّاتِ قَبْلَ الْخِدْمَةِ',
	'41075939-9468-4BCE-BC17-661DAE59FB6C',
	'Self-Examination before the Service',
	'18BFC5EF-E2F5-4E07-AFE1-20E474B5F2E4',
	'Die Selbstprüfung vor dem Dienst'
);

export const sectionSelfExaminationBeforeTheService = registerNode<Basenode>({
	id: '3FB75A8B-EF0E-4342-A2CA-CB5F73DDCC7C',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textSelfExaminationBeforeTheService.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePuttingOnOfTheServiceVestments = await makeMultilingualTextWithId(
	'72E6C2F7-A559-4FA1-9886-5D2B9BE3FFBC',
	'9033D702-BA93-46A2-A2F2-65F92B9F1860',
	'Ἡ Ἔνδυσις τῶν Ἐνδυμάτων τῆς Διακονίας',
	'41C20A06-315E-4138-9D21-FEB665281A2C',
	'Ⲡⲓϯϩⲓⲱⲧ ⲛ̀ⲛⲓϩⲃⲱⲥ ⲛ̀ⲧⲉ ⲡⲓϣⲉⲙϣⲓ',
	'C59C72EA-2BE5-4DCC-82E7-8A2DF633A459',
	'لُبْسُ مَلاَبِسِ الْخِدْمَةِ',
	'65CE3EC9-7D48-4630-B9B7-9579BD677796',
	'The Putting on of the Service Vestments',
	'F53A719D-4573-4A2D-9D0E-98B1D8C0105D',
	'Das Anziehen der Dienstgewänder'
);

export const sectionThePuttingOnOfTheServiceVestments = registerNode<Basenode>({
	id: '0A5CBCDD-327B-411F-A3CD-D343529CE782',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textThePuttingOnOfTheServiceVestments.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePreparationOfTheAltar = await makeMultilingualTextWithId(
	'BDF98C17-3B41-41FA-9C43-D28086FBBA26',
	'3A6F4677-3F8E-4225-8FF6-9388DFD6F1EE',
	'Ἡ Προπαρασκευὴ τοῦ Θυσιαστηρίου',
	'5A3BEBC0-D3D6-4275-A73A-908377049693',
	'Ⲡⲓⲥⲉⲃⲧⲱⲧ ⲛ̀ⲧⲉ ⲡⲓⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ',
	'500A86A6-E6BF-4091-89B1-013DEBBA4AA0',
	'إِعْدَادُ الْمَذْبَحِ',
	'F5236124-C28C-4AD4-BF63-438A95AB5EC9',
	'The Preparation of the Altar',
	'13789119-5097-4CC6-A9AE-000C5264F065',
	'Die Vorbereitung des Altars'
);

export const sectionThePreparationOfTheAltar = registerNode<Basenode>({
	id: '5BA4CA73-5A48-45CB-AAAC-19AF08ACCABD',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textThePreparationOfTheAltar.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnOfJoy = await makeMultilingualTextWithId(
	'6256F28E-4BFE-4987-9D8D-1AE4C429EC48',
	'26E979F7-66B2-4CD5-8E54-83F74B374218',
	'Ὁ Ὕμνος τῆς Χαρᾶς',
	'8048240C-313D-4713-8243-6EE1A4841809',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲣⲁϣⲓ',
	'3C8F83AE-6B03-428F-8BBC-B8170A097BED',
	'لَحْنُ الْفَرَحِ',
	'F2C85126-794C-438A-A087-A64BA269826B',
	'The Hymn of Joy',
	'CA32678D-780A-4D04-B30F-9D1CA5C72170',
	'Das Lied der Freude'
);

export const sectionTheHymnOfJoy = registerNode<Basenode>({
	id: '0202832B-41BC-45A2-9D9C-F961A5DDF31A',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textTheHymnOfJoy.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnOfBlessing = await makeMultilingualTextWithId(
	'C59C5552-5342-49DF-AFB6-D00F7E7F1C9A',
	'8798600C-272F-451B-9E9E-6073976FA9EB',
	'Ὁ Ὕμνος τῆς Εὐλογίας',
	'FFC8CFDC-0680-4DAA-A146-7D7EDD7EAECD',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲥⲙⲟⲩ',
	'4EE1D394-E674-4624-BAAF-DF2CB28F93BE',
	'لَحْنُ الْبَرَكَةِ',
	'7429DF30-BF45-4C39-98B2-1CA59CF6A625',
	'The Hymn of Blessing',
	'787BA313-0F8E-4F82-83AB-FBB209138184',
	'Das Lied des Segens'
);

export const sectionTheHymnOfBlessing = registerNode<Basenode>({
	id: '7ED1B158-904F-4434-9FE8-14F009E0B331',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textTheHymnOfBlessing.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textHailMaryTheQueen = await makeMultilingualTextWithId(
	'5A5B2360-63E7-4600-BBB4-2F3B250F7E67',
	'6B21D036-6ADF-4B40-83EE-C015DF6526A2',
	'Χαῖρε Μαρία ἡ Βασίλισσα',
	'C1C5FADF-ACEA-4A9C-A607-2E0D25D492FB',
	'Ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁ ϯⲟⲩⲣⲱ',
	'51B4C499-8D0B-49FF-81A1-3BA44CDE8333',
	'اَلسَّلاَمُ لَكِ يَا مَرْيَمُ الْمَلِكَةُ',
	'0BD07C13-356D-4938-BAEA-AA4F1C0E0599',
	'Hail Mary, the Queen',
	'63D05EAE-7D23-4A21-8A34-35EC10DAC61C',
	'Heil Maria, der Königin'
);

export const sectionHailMaryTheQueen = registerNode<Basenode>({
	id: '408B0893-C922-44B8-B861-55802274284F',
	users: [chapterThePreparationForTheEucharisticService.id],
	type: NodeType.Section,
	value: textHailMaryTheQueen.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterThePreparationForTheEucharisticService.children = [
	[sectionSelfExaminationBeforeTheService.id],
	[sectionThePuttingOnOfTheServiceVestments.id],
	[sectionThePreparationOfTheAltar.id],
	[sectionTheHymnOfJoy.id],
	[sectionTheHymnOfBlessing.id],
	[sectionHailMaryTheQueen.id]
];

export const textThePsalmsOfTheThirdHour = await makeMultilingualTextWithId(
	'08FB4B66-93B3-4625-AD17-E12B5D5480D3',
	'6BB3BC56-933E-4708-8032-0BF679646FB3',
	'Οἱ Ψαλμοὶ τῆς Τρίτης Ὥρας',
	'F7D5131F-2490-4DBE-AB20-26301D70AC80',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲅ̅',
	'46F4DF4C-0D10-417B-87B1-C10278C738DA',
	'مَزَامِيرُ السَّاعَةِ الثَّالِثَةِ',
	'C59E9A3F-E90A-411E-9869-0E388AC98B50',
	'The Psalms of the Third Hour',
	'5B56AAE0-42FB-4771-A758-54FEB580337E',
	'Die Psalmen der Dritten Stunde'
);

export const chapterThePsalmsOfTheThirdHour = registerNode<Basenode>({
	id: 'E916BEAA-58E5-4684-89A0-A09CF09F4BBF',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheThirdHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmsOfTheSixthHour = await makeMultilingualTextWithId(
	'994C2A3B-2FF3-4579-9377-970C8BC1612C',
	'0778E6A2-22F9-48B1-BB1E-8C5BA5C87D65',
	'Οἱ Ψαλμοὶ τῆς Ἕκτης Ὥρας',
	'33871D97-0722-486B-BEDB-F90223E6B603',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲋ̅',
	'456EA6BF-EE44-470C-9132-73901281AFE8',
	'مَزَامِيرُ السَّاعَةِ السَّادِسَةِ',
	'0EAB198E-0D25-49DD-B441-D693D858BD41',
	'The Psalms of the Sixth Hour',
	'3A52364D-C38D-4F4C-ADAC-E8E7FDF744A2',
	'Die Psalmen der Sechsten Stunde'
);

export const chapterThePsalmsOfTheSixthHour = registerNode<Basenode>({
	id: 'CB063C83-D2F1-4BD4-B7F7-817D8BCD901A',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheSixthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmsOfTheNinthHour = await makeMultilingualTextWithId(
	'2194818E-2653-4ABD-B89F-EA81A4647735',
	'A41FE595-32F8-417E-BC02-E3025C6D4587',
	'Οἱ Ψαλμοὶ τῆς Ἐνάτης Ὥρας',
	'5A966F31-0CAC-4B4A-90FA-D374E6E8F676',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲑ̅',
	'6A3C8620-E156-4EEE-8B2B-91E6AB7F85C4',
	'مَزَامِيرُ السَّاعَةِ التَّاسِعَةِ',
	'C95439DE-4CBF-4113-8E6C-AC0C008EE75F',
	'The Psalms of the Ninth Hour',
	'EB8871B5-F5AC-454E-AAC9-A242F5926CB0',
	'Die Psalmen der Neunten Stunde'
);

export const chapterThePsalmsOfTheNinthHour = registerNode<Basenode>({
	id: '75035897-7DEE-47A1-B731-2FC9CF8C4A6E',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheNinthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmsOfTheEleventhHour = await makeMultilingualTextWithId(
	'84AC7371-AD7D-417A-8202-F479F632523C',
	'32B2F467-6990-43D9-B2EB-D5BBB6990C5D',
	'Οἱ Ψαλμοὶ τῆς Ἑνδεκάτης Ὥρας',
	'E2427A38-9EC1-4667-B804-A518C757A708',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲓ̅ⲁ̅',
	'2FE188A4-1B26-4142-8844-E820C62BD0B7',
	'مَزَامِيرُ السَّاعَةِ الْحَادِيَةَ عَشَرَ',
	'BC4D5245-46C1-499C-8A66-A8FCA948AF19',
	'The Psalms of the Eleventh Hour',
	'8622B9A5-49AB-49C6-BE75-D6F83FD08326',
	'Die Psalmen der Elften Stunde'
);

export const chapterThePsalmsOfTheEleventhHour = registerNode<Basenode>({
	id: 'F409BA49-0E59-4904-8E5D-8D0439F57FB7',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheEleventhHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmsOfTheTwelfthHour = await makeMultilingualTextWithId(
	'E7417CCA-D889-4D7C-B78F-0F233F446F16',
	'4303CAFD-9AD1-4619-9CC7-0A5FBDD52228',
	'Οἱ Ψαλμοὶ τῆς Δωδεκάτης Ὥρας',
	'FF34B80F-E081-45DF-AAFC-E5D6DC2AEBBA',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲓ̅ⲃ̅',
	'84CA3AA1-CC2D-49C4-A7DF-8349F2F6E435',
	'مَزَامِيرُ السَّاعَةِ الثَّانِيَةَ عَشَرَ',
	'FD99CB2D-A705-4961-BF26-B0BBE7DD6129',
	'The Psalms of the Twelfth Hour',
	'41180334-15C9-4F06-BD42-52FE63C08FE6',
	'Die Psalmen der Zwölften Stunde'
);

export const chapterThePsalmsOfTheTwelfthHour = registerNode<Basenode>({
	id: '8834A5DD-F385-4C0F-8A1F-205F3C6D8F93',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheTwelfthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmsOfTheVeil = await makeMultilingualTextWithId(
	'EAE4695C-9C96-40CE-992F-4FDFDBD0797A',
	'C21DB8CF-1965-4D7D-95D2-80FBF571EEEA',
	'Οἱ Ψαλμοὶ τοῦ Καταπετάσματος',
	'1B86C6DF-963C-4B68-9A9A-26E17B21EB7C',
	'Ⲛⲓⲯⲁⲗⲙⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ',
	'72556E05-E9A3-4BD2-AFDD-2EA6DCBD8B1A',
	'مَزَامِيرُ السِّتَارِ',
	'BEB1C57D-CABA-41FA-B2B4-31FE1F114FF0',
	'The Psalms of the Veil',
	'87916308-DAF0-4227-AA4F-48D58CBEDF63',
	'Die Psalmen des Schleiers'
);

export const chapterThePsalmsOfTheVeil = registerNode<Basenode>({
	id: '345DD999-C135-48BA-821B-3B89299C8091',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textThePsalmsOfTheVeil.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheThirdHour = await makeMultilingualTextWithId(
	'6F4A52F2-F8B8-49DB-B6A5-345017F9FCEB',
	'1838758C-4E6E-4A0D-B7BA-66F1ABE4C75F',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τῆς Τρίτης Ὥρας',
	'35263FC9-C21B-4950-B15D-0EFD341530DC',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲅ̅',
	'4110ADD8-CC92-4556-8845-E257BAD1B9D1',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السَّاعَةِ الثَّالِثَةِ',
	'7510B9E1-25E2-459D-A117-4BDED64434DC',
	'The Gospel, the Litanies and the Prayers of the Third Hour',
	'4DE1EBDD-31EE-493D-9949-90EB3918D0CF',
	'Das Evangelium, die Bitten und Gebete der Dritten Stunde'
);

textTheGospelAndTheLitaniesOfTheThirdHour.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheThirdHour.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheThirdHour.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheThirdHour.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheThirdHour.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheThirdHour = registerNode<Basenode>({
	id: '617B9FE6-B27F-4D08-9A15-105E806CD47B',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheThirdHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheSixthHour = await makeMultilingualTextWithId(
	'6D7FA48D-BB01-42D3-8447-78E1056DBD5B',
	'B85F8A27-1ECC-4A91-9863-1AAF658CF475',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τῆς Ἕκτης Ὥρας',
	'77D98D2E-A04F-4EFF-B6A9-EB20F4279B46',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲋ̅',
	'446F60F2-F9E9-4B83-BEB8-5E2FE898AB88',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السَّاعَةِ السَّادِسَةِ',
	'783CDF72-01C2-4D82-9960-5D49434B6F0A',
	'The Gospel, the Litanies and the Prayers of the Sixth Hour',
	'0CF83214-EB82-4CC4-890B-37D29D62347B',
	'Das Evangelium, die Bitten und Gebete der Sechsten Stunde'
);

textTheGospelAndTheLitaniesOfTheSixthHour.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheSixthHour.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheSixthHour.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheSixthHour.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheSixthHour.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheSixthHour = registerNode<Basenode>({
	id: '913FF446-4613-4527-ABC3-1F54CA97C104',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheSixthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheNinthHour = await makeMultilingualTextWithId(
	'E97A240C-26A8-4477-830F-4CE7276FAB10',
	'AC9760FF-8A35-4D9B-8B61-E58143BAE46E',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τῆς Ἐνάτης Ὥρας',
	'D1B39195-956F-41B1-92BE-1C2854B3567D',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲑ̅',
	'0BD19676-04D2-4FA4-8670-8C602456B06A',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السَّاعَةِ التَّاسِعَةِ',
	'81C0D85A-C964-47AB-B486-83F74AEE1D09',
	'The Gospel, the Litanies and the Prayers of the Ninth Hour',
	'ED0E9E01-C8A5-4F88-869B-0E353DF14309',
	'Das Evangelium, die Bitten und Gebete der Neunten Stunde'
);

textTheGospelAndTheLitaniesOfTheNinthHour.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheNinthHour.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheNinthHour.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheNinthHour.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheNinthHour.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheNinthHour = registerNode<Basenode>({
	id: '310A8D40-29C4-41AC-8EB8-B4BE8C699545',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheNinthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheEleventhHour = await makeMultilingualTextWithId(
	'0343A099-5771-4DBA-A361-1165476D5097',
	'A1812F9B-219A-4DE0-AEE9-83F2612BBCC5',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τῆς Ἑνδεκάτης Ὥρας',
	'4367FE07-D130-4C9F-AE17-6691484C8914',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲓ̅ⲁ̅',
	'30EC407D-427F-4CF0-9CD7-ECC22E11613E',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السَّاعَةِ الْحَادِيَةَ عَشَرَ',
	'F2D1DB9A-B3ED-4904-A6D4-1E0D46370B65',
	'The Gospel, the Litanies and the Prayers of the Eleventh Hour',
	'6622043E-BECA-4437-A74C-49E5CA57676B',
	'Das Evangelium, die Bitten und Gebete der Elften Stunde'
);

textTheGospelAndTheLitaniesOfTheEleventhHour.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheEleventhHour.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheEleventhHour.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheEleventhHour.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheEleventhHour.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheEleventhHour = registerNode<Basenode>({
	id: 'C809A449-DFB5-434A-ABA9-63434B99DF4C',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheEleventhHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheTwelfthHour = await makeMultilingualTextWithId(
	'9F0F8800-736C-41D2-BC3B-58E69B4C38D1',
	'A5A5C08A-F237-4407-B883-2B978A0BA3AD',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τῆς Δωδεκάτης Ὥρας',
	'05E0C22C-5C88-48EE-A68C-8C3FD3EDE3BE',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ Ϯⲁϫⲡ ⲙ̀ⲙⲁϩⲓ̅ⲃ̅',
	'138CED05-ABF7-4519-B6B8-1AFBE974880E',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السَّاعَةِ الثَّانِيَةَ عَشَرَ',
	'966F46EB-8A6C-4B93-ABE6-DD1DEF7D65BD',
	'The Gospel, the Litanies and the Prayers of the Twelfth Hour',
	'ACA47273-B8A3-46D2-A05A-57FACD5469C7',
	'Das Evangelium, die Bitten und Gebete der Zwölften Stunde'
);

textTheGospelAndTheLitaniesOfTheTwelfthHour.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheTwelfthHour.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheTwelfthHour.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheTwelfthHour.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheTwelfthHour.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheTwelfthHour = registerNode<Basenode>({
	id: '02FE91C9-1F11-410B-9A6C-76391AE781A8',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheTwelfthHour.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospelAndTheLitaniesOfTheVeil = await makeMultilingualTextWithId(
	'CFCF5AC4-6F73-4675-8F23-E5EF2AEAB392',
	'32370D6C-BF3E-470D-BADE-45D7A8089183',
	'Τὸ Εὐαγγέλιον, αἱ Αἰτήσεις καὶ αἱ Εὐχαὶ τοῦ Καταπετάσματος',
	'3EEC1933-1BA0-4894-BD99-E4528E7445DE',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ',
	'EDF54F95-E671-4F44-BF70-061A06B7EE85',
	'الْإِنْجِيلُ وَطَلَبَاتُ وَصَلَوَاتُ السِّتَارِ',
	'BFFCF48B-9CC2-4BF0-9CC8-279FF681A972',
	'The Gospel, the Litanies and the Prayers of the Veil',
	'22395B84-7CC1-4562-9907-2C2DBFE1AFB4',
	'Das Evangelium, die Bitten und Gebete des Schleiers'
);

textTheGospelAndTheLitaniesOfTheVeil.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheVeil.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheVeil.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheVeil.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheGospelAndTheLitaniesOfTheVeil.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheGospelAndTheLitaniesOfTheVeil = registerNode<Basenode>({
	id: '42F5EF31-6F83-4318-B96F-15B9BE115A95',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheGospelAndTheLitaniesOfTheVeil.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfTheLambChapter = await makeMultilingualTextWithId(
	'B7DA0AD1-3E81-45A0-94D4-5921F1C9BEDF',
	'3F45C09A-E105-4CF2-8DF7-AD2CE468FCF8',
	'Ἡ Πρόθεσις τοῦ Ἀμνοῦ',
	'DB083384-5FF1-4850-9937-724814DD6C91',
	'Ϯⲡⲣⲟⲑⲉⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ',
	'E2E0B846-648E-4820-9A77-BD85C127A30C',
	'تَقْدِيمُ الْحَمَلِ',
	'C5B935A5-54B4-4933-A4E2-8DEF9ECF1A13',
	'The Offering of the Lamb',
	'14728418-90C6-4EA8-920A-58878FFD2269',
	'Die Darbringung des Lammes'
);

textTheOfferingOfTheLambChapter.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfTheLambChapter.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfTheLambChapter.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfTheLambChapter.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfTheLambChapter.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheOfferingOfTheLamb = registerNode<Basenode>({
	id: '375F2ABE-D728-4F1F-A64C-46821A40D3DB',
	users: [partTheOfferingOfTheLamb.id],
	type: NodeType.Chapter,
	value: textTheOfferingOfTheLambChapter.id,
	valueType: ContentType.MultilingualText,
	children: []
});

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
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textTheWashingOfTheHands.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheSelectionOfTheLamb = await makeMultilingualTextWithId(
	'604EC490-67C5-42CF-8F89-A2B97F364ADF',
	'3FBF1581-AB01-4C51-BE08-23163DB20E28',
	'Ἡ Ἐκλογὴ τοῦ Ἀμνοῦ',
	'323C4FF2-7797-45C0-9277-B2BE2BA6CD80',
	'Ⲡⲓⲥⲱⲧⲡ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ',
	'B8459138-BA19-4E14-A57A-D6D7E46479AD',
	'اِخْتِيَارُ الْحَمَلِ',
	'CA91A0E1-7734-4678-91DA-82475249C976',
	'The Selection of the Lamb',
	'36660056-BDB9-4C9E-BCAF-25E2D135A034',
	'Die Auswahl des Lammes'
);

export const sectionTheSelectionOfTheLamb = registerNode<Basenode>({
	id: 'E036D876-BB47-4B96-B148-7003EFE96532',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textTheSelectionOfTheLamb.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnForTheSelectionOfTheLambDuringAFast = await makeMultilingualTextWithId(
	'FAC19393-B827-4F5A-8A72-161983C37361',
	'86E006B6-079C-477C-B759-A529D053313C',
	'Ὁ Ὕμνος τῆς Ἐκλογῆς τοῦ Ἀμνοῦ ἐν καιρῷ νηστείας',
	'6CC534BF-04BD-4C59-A0EC-BDD74C33BE21',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲥⲱⲧⲡ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ ϧⲉⲛ ⲟⲩⲛⲏⲥⲧⲓⲁ',
	'61BD4C3E-4528-4AFD-9152-56F1DFEA75FF',
	'لَحْنُ اِخْتِيَارِ الْحَمَلِ فِي زَمَنِ صَوْمٍ',
	'790D3BE4-D0D4-4888-8439-6CEBA1DEFFA7',
	'The Hymn for the Selection of the Lamb during a Fast',
	'7E33B361-0F80-4A76-B17C-9F78801B9502',
	'Das Lied zur Auswahl des Lammes während einer Fastenzeit'
);

export const sectionTheHymnForTheSelectionOfTheLambDuringAFast = registerNode<Basenode>({
	id: 'E328DE13-C4FB-402E-A684-52307B23F795',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textTheHymnForTheSelectionOfTheLambDuringAFast.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheProcessionOfTheLamb = await makeMultilingualTextWithId(
	'8E4F71BD-6DE5-4196-97E3-FB83EB52E917',
	'5367FF9B-7BBB-4459-B188-C778B07BEBB0',
	'Ἡ Περιφορὰ τοῦ Ἀμνοῦ',
	'833B7096-B214-4987-AB79-E3099CA682E1',
	'Ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ',
	'C7A00419-2532-4227-B1A3-869FB90C12E7',
	'دَوْرَةُ الْحَمَلِ',
	'6B431BC2-B46D-4CAE-9304-C1FB3A4023E6',
	'The Procession of the Lamb',
	'4A33E741-F809-4F87-AC3B-72BFA7C33B3A',
	'Der Lammumgang'
);

export const sectionTheProcessionOfTheLamb = registerNode<Basenode>({
	id: '977451C5-4400-404B-BB96-B67DF4257830',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textTheProcessionOfTheLamb.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays =
	await makeMultilingualTextWithId(
		'BEEEF526-0CA1-44BC-B9E1-80585972AC14',
		'880D13A2-7CD1-45D1-B000-1C23533116F0',
		'Ὁ Ψαλμὸς κατὰ τὴν Περιφορὰν τοῦ Ἀμνοῦ διὰ τὰς κοινὰς καὶ χαρμοσύνους ἡμέρας',
		'CD53BCC5-83BF-41FA-B29C-F2F4B6A961DA',
		'Ⲡⲓⲯⲁⲗⲙⲟⲥ ⲕⲁⲧⲁ ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲛⲉⲙ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲣⲁϣⲓ',
		'AABE133E-9C05-47CF-A911-E2F4F72A4776',
		'الْمَزْمُورُ أَثْنَاءَ دَوْرَةِ الْحَمَلِ فِي الْأَيَّامِ السَّنَوِيَّةِ وَأَيَّامِ الْفَرَحِ',
		'E7D002A7-7F36-4B4D-BD33-61CAE584F2E6',
		'The Psalm during the Procession of the Lamb on the Ordinary and Joyful Days',
		'95049B1E-08F9-4CDA-B83B-9EFC1550054E',
		'Der Psalm während des Lammumgangs an gewöhnlichen und freudigen Tagen'
	);

textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays =
	registerNode<Basenode>({
		id: '3C46F54E-E8E6-40D7-90A4-16F805078561',
		users: [chapterTheOfferingOfTheLamb.id],
		type: NodeType.Section,
		value: textThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textThePsalmDuringTheProcessionOfTheLambOnFastingDays =
	await makeMultilingualTextWithId(
		'E9C7D96C-CAD1-411D-8162-57730D3357C0',
		'A6BDF374-3126-42C5-AA83-BF68CEE38F9A',
		'Ὁ Ψαλμὸς κατὰ τὴν Περιφορὰν τοῦ Ἀμνοῦ ἐν ἡμέραις νηστείας',
		'D471FD09-F04C-420D-B5C0-71F0E4665E86',
		'Ⲡⲓⲯⲁⲗⲙⲟⲥ ⲕⲁⲧⲁ ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ',
		'A9F297B9-08B9-4F2F-B764-8D4BDCFD72D4',
		'الْمَزْمُورُ أَثْنَاءَ دَوْرَةِ الْحَمَلِ فِي أَيَّامِ الصَّوْمِ',
		'03178870-5B35-40ED-9E85-EA2AF5730542',
		'The Psalm during the Procession of the Lamb on Fasting Days',
		'2D57F4A0-05E4-4F9F-ADB8-508100B41A5B',
		'Der Psalm während des Lammumgangs an Fastentagen'
	);

textThePsalmDuringTheProcessionOfTheLambOnFastingDays.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnFastingDays.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnFastingDays.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnFastingDays.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnFastingDays.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionThePsalmDuringTheProcessionOfTheLambOnFastingDays = registerNode<Basenode>({
	id: '58C45D94-1403-44FD-8A4D-E981EA473F88',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textThePsalmDuringTheProcessionOfTheLambOnFastingDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	await makeMultilingualTextWithId(
		'A37629C0-638F-4991-B469-35F6F9E9020C',
		'47A0934C-8041-42EC-96F4-1A8CB7C4A7FE',
		'Ὁ Ψαλμὸς κατὰ τὴν Περιφορὰν τοῦ Ἀμνοῦ ἐν ταῖς καθημεριναῖς ἡμέραις τῆς Νηστείας τοῦ Ἰωνᾶ καὶ τῆς Μεγάλης Τεσσαρακοστῆς',
		'D58DC0C1-78A4-4E2E-9117-ECF98E135741',
		'Ⲡⲓⲯⲁⲗⲙⲟⲥ ⲕⲁⲧⲁ ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ ϧⲉⲛ ⲛⲓⲉϩⲟⲟⲩ ⲙ̀ⲡⲓϩⲱⲃ ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛ̀ⲧⲉ Ⲓⲱⲛⲁ ⲛⲉⲙ ϯⲛⲓϣϯ ⲛ̀ⲛⲏⲥⲧⲓⲁ',
		'703E63C9-4DE5-4142-B9B4-1BD518C1D029',
		'الْمَزْمُورُ أَثْنَاءَ دَوْرَةِ الْحَمَلِ فِي أَيَّامِ الْأُسْبُوعِ مِنْ صَوْمِ يُونَانَ وَالصَّوْمِ الْكَبِيرِ',
		'07A2506A-340C-49FA-AD58-3B4268B315C5',
		'The Psalm during the Procession of the Lamb on the Weekdays of the Fast of Jonah and the Great Fast',
		'556D04BF-E48D-47D8-8E1C-758E783F3FCD',
		'Der Psalm während des Lammumgangs an den Werktagen des Jona- und großen Fastens'
	);

textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	registerNode<Basenode>({
		id: '0679478D-6679-48F2-A9A0-5D5433F297B1',
		users: [chapterTheOfferingOfTheLamb.id],
		type: NodeType.Section,
		value: textThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	await makeMultilingualTextWithId(
		'EB82CA9D-1CA6-4322-B346-02989F1003C8',
		'FF07EF24-0FD4-48BC-8B99-4A6757A8137A',
		'Ἄλλος Ψαλμὸς κατὰ τὴν Περιφορὰν τοῦ Ἀμνοῦ ἐν ταῖς καθημεριναῖς ἡμέραις τῆς Νηστείας τοῦ Ἰωνᾶ καὶ τῆς Μεγάλης Τεσσαρακοστῆς',
		'0FD48A45-009F-4D52-8D67-A7D7E3E0C3B6',
		'Ⲕⲉⲯⲁⲗⲙⲟⲥ ⲕⲁⲧⲁ ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ ϧⲉⲛ ⲛⲓⲉϩⲟⲟⲩ ⲙ̀ⲡⲓϩⲱⲃ ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛ̀ⲧⲉ Ⲓⲱⲛⲁ ⲛⲉⲙ ϯⲛⲓϣϯ ⲛ̀ⲛⲏⲥⲧⲓⲁ',
		'0A79CDE3-9CBA-4EC1-AEC5-AA0A19176FA6',
		'مَزْمُورٌ آخَرُ أَثْنَاءَ دَوْرَةِ الْحَمَلِ فِي أَيَّامِ الْأُسْبُوعِ مِنْ صَوْمِ يُونَانَ وَالصَّوْمِ الْكَبِيرِ',
		'B2F5A99E-51A0-4A27-8DD3-45230D03BBC9',
		'Another Psalm during the Procession of the Lamb on the Weekdays of the Fast of Jonah and the Great Fast',
		'254ADBC0-453F-4706-9332-357266AEEA33',
		'Ein anderer Psalm während des Lammumgangs an den Werktagen des Jona- und großen Fastens'
	);

textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	registerNode<Basenode>({
		id: 'CA325870-297B-4B48-B022-DA17C3060AF2',
		users: [chapterTheOfferingOfTheLamb.id],
		type: NodeType.Section,
		value:
			textAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheBlessingOfTheGifts = await makeMultilingualTextWithId(
	'DC5C7FC0-5F5F-4094-B80D-F4C6ABADB224',
	'34927929-1037-4797-8DAD-2013A185241D',
	'Ἡ Εὐλογία τῶν Δώρων',
	'2119011F-45F6-4075-8BA2-2DC127DDAFA1',
	'Ⲡⲓⲥⲙⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲇⲱⲣⲟⲛ',
	'760F6CDB-6EEC-42EF-9D90-D97DD72601EE',
	'مُبَارَكَةُ الْقَرَابِينِ',
	'B4957F6F-7465-4A21-92E8-6E1BE3293665',
	'The Blessing of the Gifts',
	'226EE747-A563-4C38-AD48-CEE148CA5002',
	'Die Segnung der Gaben'
);

export const sectionTheBlessingOfTheGifts = registerNode<Basenode>({
	id: '59858B6B-C5DD-40B2-892E-EB6B7FD1DFB9',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textTheBlessingOfTheGifts.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfThanksgiving = await makeMultilingualTextWithId(
	'1D0E76D3-DFA8-48C5-A352-F8E24F6F6F38',
	'5B6AA2D4-36DB-4E0B-A9B1-C06B568D92E2',
	'Ἡ Εὐχὴ τῆς Εὐχαριστίας',
	'ACB24E54-693E-4F5B-B196-845246D046BB',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ Ⲡⲓϣⲉⲡϩⲙⲟⲧ',
	'8CDB642D-FBB7-4F7A-9D33-446C48DBC497',
	'صَلاَةُ الشُّكْرِ',
	'84E2FA02-BD8B-41A7-AF3B-770DB3C2DCF3',
	'The Prayer of Thanksgiving',
	'4D759C3F-A698-4E06-B44F-869C1E0E8A41',
	'Das Gebet der Danksagung'
);

textThePrayerOfThanksgiving.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePrayerOfThanksgiving.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePrayerOfThanksgiving.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePrayerOfThanksgiving.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePrayerOfThanksgiving.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionThePrayerOfThanksgiving = registerNode<Basenode>({
	id: '8493664C-AF95-4319-BF8D-58835268C63E',
	users: [chapterTheOfferingOfTheLamb.id],
	type: NodeType.Section,
	value: textThePrayerOfThanksgiving.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheOfferingOfTheLamb.children = [
	[sectionTheWashingOfTheHands.id],
	[sectionTheSelectionOfTheLamb.id],
	[sectionTheHymnForTheSelectionOfTheLambDuringAFast.id],
	[sectionTheProcessionOfTheLamb.id],
	[sectionThePsalmDuringTheProcessionOfTheLambOnTheOrdinaryAndJoyfulDays.id],
	[sectionThePsalmDuringTheProcessionOfTheLambOnFastingDays.id],
	[sectionThePsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id],
	[sectionAnotherPsalmDuringTheProcessionOfTheLambOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id],
	[sectionTheBlessingOfTheGifts.id],
	[sectionTheCallToPrayer.id],
	[sectionThePrayerOfThanksgiving.id]
];

partTheOfferingOfTheLamb.children = [
	[chapterThePreparationForTheEucharisticService.id],
	[chapterThePsalmsOfTheThirdHour.id],
	[chapterThePsalmsOfTheSixthHour.id],
	[chapterThePsalmsOfTheNinthHour.id],
	[chapterThePsalmsOfTheEleventhHour.id],
	[chapterThePsalmsOfTheTwelfthHour.id],
	[chapterThePsalmsOfTheVeil.id],
	[chapterTheGospelAndTheLitaniesOfTheThirdHour.id],
	[chapterTheGospelAndTheLitaniesOfTheSixthHour.id],
	[chapterTheGospelAndTheLitaniesOfTheNinthHour.id],
	[chapterTheGospelAndTheLitaniesOfTheEleventhHour.id],
	[chapterTheGospelAndTheLitaniesOfTheTwelfthHour.id],
	[chapterTheGospelAndTheLitaniesOfTheVeil.id],
	[chapterTheOfferingOfTheLamb.id]
];
