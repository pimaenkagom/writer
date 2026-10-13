import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'8C2C2593-2186-4EBE-8F19-ACB20CFCA7A2',
		'B808DED4-4541-4088-BE34-A32D5AF73BB5',
		'Οἱ Ὕμνοι διὰ τὴν Νηστείαν τῶν Ἀποστόλων πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'23F58337-4DA0-4FC8-AF72-335E971A0F53',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'AEDB089D-45DE-4687-A16C-2EACAA7C2BC9',
		'أَلْحَانُ صَوْمِ الرُّسُلِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'DF33AC88-3654-4F65-A886-19239B65D1F5',
		'The Hymns for the Fast of the Apostles before the Reading of the Psalm and the Gospel',
		'8E1297AC-759D-4421-AEB9-507583A2BC38',
		'Die Lieder für das Fasten der Apostel vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '923AAE30-0A58-412B-8DCA-931DD9464DAB',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
