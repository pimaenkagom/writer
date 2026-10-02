import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'DC8B3A65-1152-4C99-A38C-E2C0AE64624F',
		'E3BCA7D5-0C8A-406E-BEF1-3E7EF24D04BA',
		'Οἱ Ὕμνοι διὰ τὴν Παραμονὴν τῆς Γεννήσεως τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'E30502A2-B818-4E72-B639-2E5CC518D3CD',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲡⲁⲣⲁⲙⲟⲛⲏ ⲛ̀ⲧⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'CE7EA338-DEF7-468F-8D6D-0FEB8AC5949F',
		'أَلْحَانُ بَرَامُونِ مِيلَادِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'E68DFA70-CE75-4AC7-95B7-259E8E8D862C',
		'The Hymns for the Paramoun of the Nativity of Christ before the Reading of the Psalm and the Gospel',
		'CEFA8AB2-E620-4DB0-93CB-F26A33B96E09',
		'Die Lieder für das Paramun der Geburt Christi vor der Lesung des Psalms und des Evangeliums'
	);

export const chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '80AC9FE8-93A1-4AE7-8FFA-45C70F0F154F',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHymnAStarRoseInTheEast = await makeMultilingualTextWithId(
	'6496E03C-D85D-4E8C-BC4B-CB0819342B32',
	'843C7546-E4C6-4ED9-A343-ADFA9E7AB7E6',
	'Ὁ Ὕμνος Ἀστὴρ ἀνέτειλεν ἐν τῇ ἀνατολῇ',
	'FA8ECB39-E550-45EC-B2E3-245E231E6E25',
	'Ⲡⲓϫⲱ ϫⲉ Ⲟⲩⲥⲓⲟⲩ ⲁϥϣⲁⲓ ϧⲉⲛ ⲛⲓⲙⲁⲛϣⲁⲓ',
	'C84879C6-0D79-4D64-81B5-8D9CB973B2B7',
	'اللَّحْنُ أَشْرَقَ نَجْمٌ فِي الْمَشْرِقِ',
	'C9AE5821-EBCC-4AAD-84DA-A2B2CBE7C3E2',
	'The Hymn A Star Rose in the East',
	'766B0A71-1571-4DC2-9ECE-34D558EE9821',
	'Das Lied Ein Stern ging im Osten auf'
);

export const sectionTheHymnAStarRoseInTheEast = registerNode<Basenode>({
	id: 'A0943273-10C6-4363-9FD9-D1D86D26BCDB',
	users: [
		chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id
	],
	type: NodeType.Section,
	value: textTheHymnAStarRoseInTheEast.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.children =
	[[sectionTheHymnAStarRoseInTheEast.id]];
