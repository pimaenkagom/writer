import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'4900D22D-1F39-44C0-ABD2-1FEE92A997BF',
		'8328AE66-7E9D-4C50-B0AF-3980D2FD33EB',
		'Οἱ Ὕμνοι διὰ τὸν Σταυρὸν πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'6DE500F0-00CD-4738-A1B1-C6397A4E9362',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'380D7FDA-919C-44D4-B50D-BFDA8126A375',
		'أَلْحَانُ الصَّلِيبِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'C99A8D24-62B9-424F-9681-1CDBD8CBC0FF',
		'The Hymns for the Cross before the Reading of the Psalm and the Gospel',
		'A6112BEB-8DB3-43F4-80EE-C5145711F14F',
		'Die Lieder für das Kreuz vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'BEBB69AC-2CA5-4AC0-97C6-9935505CEFF4',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
