import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'E7788B4C-616C-4F84-B663-2B7B72700E82',
		'D5B0B11F-9666-49C3-8AC2-C89F72CC8698',
		'Οἱ Ὕμνοι διὰ τὸν Μῆνα Χοιὰκ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'CD0BB86B-37A3-4737-8CB0-BD3BD6C7D3E8',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲁ̀ⲃⲟⲧ Ⲭⲟⲓⲁⲕ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'F3BD513A-FD66-4DF8-8D25-93DEDFA6B645',
		'أَلْحَانُ شَهْرِ كِيَهْكَ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'B4DDC8D6-5B79-419C-9215-333F1619DB13',
		'The Hymns for the Month of Koiak before the Reading of the Psalm and the Gospel',
		'EE088637-50A5-41CD-B454-B0C8DD6C7D2F',
		'Die Lieder für den Monat Koiak vor der Lesung des Psalms und des Evangeliums'
	);

export const chapterTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'D9EFBFFD-0F99-4407-93CB-03C465AAF624',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheParalexForTheMonthOfKoiak = await makeMultilingualTextWithId(
	'7380FB44-3DFF-4F7A-ACC8-D2CBE4713791',
	'F4FA6E2A-0E3F-4056-A1C7-5504662F76B7',
	'Ἡ Παράλεξις διὰ τὸν Μῆνα Χοιάκ',
	'C059958D-4C8B-49A0-AFF3-758555328FCF',
	'Ϯⲡⲁⲣⲁⲗⲉⲝⲓⲥ ⲉⲑⲃⲉ ⲡⲓⲁ̀ⲃⲟⲧ Ⲭⲟⲓⲁⲕ',
	'D7DB5922-297D-4CBB-9730-39EFFC11A9C5',
	'الْبَرْلُكْسُ لِشَهْرِ كِيَهْكَ',
	'99FADEA2-A010-474D-B073-A9B04D817F33',
	'The Paralex for the Month of Koiak',
	'5E488186-4ACC-4184-979C-97B1B34E10E2',
	'Der Paralex für den Monat Koiak'
);

textTheParalexForTheMonthOfKoiak.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheMonthOfKoiak.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheMonthOfKoiak.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheMonthOfKoiak.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheMonthOfKoiak.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheParalexForTheMonthOfKoiak = registerNode<Basenode>({
	id: '1FB415C5-899C-46CA-A136-7F9CFEA8A167',
	users: [chapterTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheParalexForTheMonthOfKoiak.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel.children = [
	[sectionTheParalexForTheMonthOfKoiak.id]
];
