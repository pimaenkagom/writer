import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheHymnAStarRoseInTheEast } from '$lib/utilities/initializer/shared/section-hymn-a-star-rose-in-the-east';

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

textTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

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

chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.children =
	[[sectionTheHymnAStarRoseInTheEast.id]];
