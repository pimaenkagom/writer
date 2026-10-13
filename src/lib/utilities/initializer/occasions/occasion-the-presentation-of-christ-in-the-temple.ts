import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'17ADA0C5-A0E3-44B3-86E5-243370B9D291',
		'211050C0-CC7C-490F-9A0C-68041B8E07A6',
		'Οἱ Ὕμνοι διὰ τὴν Παράστασιν τοῦ Χριστοῦ ἐν τῷ Ἱερῷ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'81429C37-67BD-40D5-AD5E-2BD4DA8C0692',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'C6E5C3AB-27D8-4F3A-9F85-BDEE1F5F95D6',
		'أَلْحَانُ دُخُولِ الْمَسِيحِ الْهَيْكَلَ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'A5AFE910-61B7-4CE7-94EF-1DC5F17DDB62',
		'The Hymns for the Presentation of Christ in the Temple before the Reading of the Psalm and the Gospel',
		'AE06711F-1372-4E88-B9FA-74DC411DBB9E',
		'Die Lieder für die Vorstellung Christi im Tempel vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '9545A1B2-EF2A-411A-976D-5B38004C981B',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value:
			textTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
