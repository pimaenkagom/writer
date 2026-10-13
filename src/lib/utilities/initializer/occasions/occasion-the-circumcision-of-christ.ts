import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'24CC25CA-E8E6-431E-AE93-BAEDFF9DEAE6',
		'473B024F-4697-4F30-BBE7-78782FFFB38C',
		'Οἱ Ὕμνοι διὰ τὴν Περιτομὴν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'E2290E14-7855-4107-BF56-64A34DB0E7D2',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲥⲉⲃⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'ADCEAFB0-F275-451C-A3AF-2CC4687BDBF1',
		'أَلْحَانُ خِتَانِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'4F169555-AD95-40F4-A7DF-4052AA6BF792',
		'The Hymns for the Circumcision of Christ before the Reading of the Psalm and the Gospel',
		'ECDF124B-93E4-4F20-BF9B-88CFF693BF4E',
		'Die Lieder für die Beschneidung Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '0F6279FF-E209-47EB-AD83-8778B8E0F11E',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
