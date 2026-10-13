import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'65C300CA-1C2C-43D5-9F6D-774C81DD4DA3',
		'4819AFFB-2614-4FAD-9AEB-2984C384FFB9',
		'Οἱ Ὕμνοι διὰ τὴν Μεταμόρφωσιν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'BF7B00CD-DAC1-480D-8D2D-7D9E45F9F0AA',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓϣⲟⲃϯ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'9DA66350-4EE8-49D5-A4A3-2762543129F2',
		'أَلْحَانُ تَجَلِّي الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'FE8DD6A0-6A23-446A-9367-BC43D128FD7D',
		'The Hymns for the Transfiguration of Christ before the Reading of the Psalm and the Gospel',
		'186D0E89-5490-439B-9B9F-E487AEE384C8',
		'Die Lieder für die Verklärung Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'F1FEEB83-F2AA-4A97-8910-80F4C98D2DC6',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
