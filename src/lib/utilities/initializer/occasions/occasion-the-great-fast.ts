import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'0AC492CB-A864-460B-BFAE-D0F1B248AED6',
		'12212400-36DF-4D10-A80B-3804744D4626',
		'Οἱ Ὕμνοι διὰ τὴν Μεγάλην Τεσσαρακοστήν πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'920B5BAE-9C95-4B1D-AE4F-2F5894F1BCBD',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲛⲓϣϯ ⲛ̀ⲛⲏⲥⲧⲓⲁ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'4CB2E96E-AC83-4658-A4BD-A315F64C6875',
		'أَلْحَانُ الصَّوْمِ الْكَبِيرِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'C9F58874-1A37-4DEA-BF1A-D05CAF94E1F1',
		'The Hymns for the Great Fast before the Reading of the Psalm and the Gospel',
		'C3134D2E-8CE1-4119-AF49-664207E1BBA4',
		'Die Lieder für das Große Fasten vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '5CC32F53-3A2F-4A9C-A1E6-B3A10529AEFC',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
