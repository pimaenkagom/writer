import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'BBE940DE-9D25-453C-AD1A-12D5F38B0729',
		'A2DE8BA2-A3FE-4C2E-94B6-66CA181881F3',
		'Οἱ Ὕμνοι διὰ τὴν Ἀνάληψιν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'52AAB7FE-711B-43DA-9DEC-7B5D1C543DB3',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲁ̀ⲛⲁⲗⲏⲙⲯⲓⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'5F76721D-3C02-4EB6-B2E0-ED1CDA00C1FA',
		'أَلْحَانُ صُعُودِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'F116B26C-2E91-44D6-B163-08CD791F2321',
		'The Hymns for the Ascension of Christ before the Reading of the Psalm and the Gospel',
		'98109B9E-E560-4F5B-B2DD-C815D136C769',
		'Die Lieder für die Himmelfahrt Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '3034C081-FA59-4DAD-96C4-03933AEC32C1',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
