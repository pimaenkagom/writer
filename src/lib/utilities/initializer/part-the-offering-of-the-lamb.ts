import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheOfferingOfTheLamb = await makeMultilingualTextWithId(
	'566FC8F1-FE7E-4C52-8896-83B616F2832D',
	'ADCD683A-10CD-4C5F-8EED-E9C1A9078E0E',
	'Ἡ Πρόθεσις τοῦ Ἀμνοῦ',
	'8F5AA269-B6A5-4CDF-B1D7-EDC5CDEB8EB6',
	'Ϯⲡⲣⲟⲑⲉⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲓϩⲓⲏⲃ',
	'F6837CC3-93D1-4E51-85DA-BA46E37A90DC',
	'تَقْدِيمُ الْحَمَلِ',
	'B92268E0-CBC4-4075-A662-41EC2E47045D',
	'The Offering of the Lamb',
	'2E54F240-F870-4476-9BA5-C87F62CE3245',
	'Die Darbringung des Lammes'
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

partTheOfferingOfTheLamb.children = [[chapterThePreparationForTheEucharisticService.id]];
