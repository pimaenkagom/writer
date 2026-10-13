import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'186B44E3-1550-4161-9E5A-4D9750E46972',
		'94A60D5F-FB88-4555-9833-EBE2812CF2D0',
		'Οἱ Ὕμνοι διὰ τὴν Παραμονὴν τῆς Θεοφανείας πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'F770C255-63B1-4C72-A240-94FB287851F5',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲡⲁⲣⲁⲙⲟⲛⲏ ⲛ̀ⲧⲉ ϯⲑⲉⲟⲫⲁⲛⲓⲁ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'9F1E9201-EC00-407A-B8EA-AF8E0CF21923',
		'أَلْحَانُ بَرَامُونِ الظُّهُورِ الْإِلَهِيِّ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'12BEE3AA-6AD0-429A-A5E2-281EC93B71CB',
		'The Hymns for the Paramoun of the Theophany before the Reading of the Psalm and the Gospel',
		'DBF056E0-0371-45E1-B899-DE51DC7DBF77',
		'Die Lieder für das Paramun der Erscheinung Gottes vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '1080F975-EEBA-4723-BFA3-5D571D0F882F',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
