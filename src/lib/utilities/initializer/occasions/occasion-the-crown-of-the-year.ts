import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'3C500B53-90A0-4134-80D9-DB922DDCD1A1',
		'25E5D657-3F00-40EE-A8D1-1CD076758DB2',
		'Οἱ Ὕμνοι διὰ τὸν Στέφανον τοῦ Ἐνιαυτοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'FFCE54EE-946A-4504-B206-A3A2342C02EC',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'94FE0BE1-F9B0-405D-BE51-6AE9CDD81A19',
		'أَلْحَانُ إِكْلِيلِ السَّنَةِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'81C1CE3E-B094-4B44-B988-2EAAA9169C54',
		'The Hymns for the Crown of the Year before the Reading of the Psalm and the Gospel',
		'65462A2B-E44D-4524-9296-D11519A9E589',
		'Die Lieder für den Kranz des Jahres vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '5584764C-090C-45DA-BBB3-7648D969D83C',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
