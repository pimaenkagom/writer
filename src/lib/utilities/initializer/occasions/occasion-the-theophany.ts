import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'FA2D77E9-5D63-4903-988E-033499004729',
		'A0A7D4EA-5CB0-4B7F-B40B-8638AD7C595E',
		'Οἱ Ὕμνοι διὰ τὴν Θεοφάνειαν πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'DA60A4BB-4C23-46BB-8580-5EA997D0E255',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲑⲉⲟⲫⲁⲛⲓⲁ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'F72C263F-8ABF-4035-9F0B-F22EEFE8B203',
		'أَلْحَانُ الظُّهُورِ الْإِلَهِيِّ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'33C9BB4E-615C-4675-BC6D-182D8C998345',
		'The Hymns for the Theophany before the Reading of the Psalm and the Gospel',
		'07E12E95-F876-4D3D-BDE9-BEF4B584E16E',
		'Die Lieder für die Erscheinung Gottes vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'E89F3825-3526-4789-A938-2C582AF7EAE7',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
