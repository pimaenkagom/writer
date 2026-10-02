import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import {
	makeMultilingualTextWithId,
	makeMultilingualTextWithIdWithoutGreek
} from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'97865E7D-85FB-4D9B-B1E8-3454912FD70E',
		'14952CF3-CAE0-48EF-B64E-C57354ABA6D3',
		'Οἱ Ὕμνοι διὰ τὸν Εὐαγγελισμὸν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'C5181370-3131-4CAA-BDF8-F36BBFCC9F7F',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'3C6700D4-F551-473F-852C-BB62B61FDA50',
		'أَلْحَانُ بِشَارَةِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'CD1A755B-71FD-4C27-A5B5-74F8B92B010D',
		'The Hymns for the Annunciation of Christ before the Reading of the Psalm and the Gospel',
		'47BCF5C4-CEA7-488B-A53A-B01EB65226B9',
		'Die Lieder für die Verkündigung Christi vor der Lesung des Psalms und des Evangeliums'
	);

export const chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'C1534998-5747-4F49-A025-1DAB7BB67DD3',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHymnTheCounselThatExistedFromEternity = await makeMultilingualTextWithId(
	'B0CB2453-E0F7-4710-8BC3-BEC21B6483AB',
	'573089D5-4869-4605-AE3B-5C5EA5DB89EB',
	'Ὁ Ὕμνος Βουλὴν προαιώνιον',
	'56DCBFF4-BB8E-4E65-A3BF-A249CDCB8C5C',
	'Ⲡⲓϫⲱ ϫⲉ Ⲃⲟⲩⲗⲏⲛ ⲡⲣⲟⲁⲓⲱⲛⲓⲟⲛ',
	'DB623F91-BDA5-4FE6-94E9-20E49318C143',
	'اللَّحْنُ الْمَشُورَةَ الَّتِي كَانَتْ مُنْذُ الْأَزَلِ',
	'EE89DC29-E543-490D-AE2E-3B824A34AA40',
	'The Hymn The Counsel That Existed from Eternity',
	'9247EF4E-E087-4D0D-B426-311B7F52736C',
	'Das Lied Den Ratschluss, der von Ewigkeit her bestand'
);

textTheHymnTheCounselThatExistedFromEternity.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnTheCounselThatExistedFromEternity = registerNode<Basenode>({
	id: '9424F5D4-EB0A-4C8A-8EB9-4BD5C9C8F664',
	users: [chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnTheCounselThatExistedFromEternity.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnTheAnnunciationOfGabriel = await makeMultilingualTextWithIdWithoutGreek(
	'1CF5A730-1FE2-4B15-8CD9-4D87E5F92F8F',
	'FFCE0D23-21F4-483B-B858-6FC187D575D1',
	'Ⲡⲓϫⲱ ϫⲉ Ⲡⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ Ⲅⲁⲃⲣⲓⲏⲗ',
	'E6440313-F66C-4815-9EEE-981466D54D89',
	'اللَّحْنُ بِشَارَةُ غُبْرِيَالَ',
	'1AA84272-FB8D-4F85-A42D-EB0CFC047C94',
	'The Hymn The Annunciation of Gabriel',
	'B5913A9E-7ABB-4FCC-9DE7-2866196ACBFC',
	'Das Lied Die Verkündigung Gabriels'
);

export const sectionTheHymnTheAnnunciationOfGabriel = registerNode<Basenode>({
	id: '6E065761-765B-4366-BFCE-89D11136B27D',
	users: [chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnTheAnnunciationOfGabriel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheParalexForTheAnnunciationOfChrist = await makeMultilingualTextWithId(
	'B301B486-8DFA-4FBF-BF30-D3641DD02960',
	'53A02707-0AAF-4A8C-8F1D-0E258A0F5DAD',
	'Ἡ Παράλεξις διὰ τὸν Εὐαγγελισμὸν τοῦ Χριστοῦ',
	'B2F3F7EA-2A0A-4B2A-A3AC-879119A3EE7A',
	'Ϯⲡⲁⲣⲁⲗⲉⲝⲓⲥ ⲉⲑⲃⲉ ⲡⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
	'F4A73EA7-08AE-4641-97ED-857640F578E0',
	'الْبَرْلُكْسُ لِبِشَارَةِ الْمَسِيحِ',
	'8A103146-A931-4A87-A01B-0D01DA6EAF4C',
	'The Paralex for the Annunciation of Christ',
	'0E2B76B1-4B3E-434C-902A-1650D31727EC',
	'Der Paralex für die Verkündigung Christi'
);

textTheParalexForTheAnnunciationOfChrist.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheAnnunciationOfChrist.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheAnnunciationOfChrist.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheAnnunciationOfChrist.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheAnnunciationOfChrist.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheParalexForTheAnnunciationOfChrist = registerNode<Basenode>({
	id: '384C1672-6DD8-426E-8F96-211605770D52',
	users: [chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheParalexForTheAnnunciationOfChrist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.children = [
	[sectionTheHymnTheCounselThatExistedFromEternity.id],
	[sectionTheHymnTheAnnunciationOfGabriel.id],
	[sectionTheParalexForTheAnnunciationOfChrist.id]
];
