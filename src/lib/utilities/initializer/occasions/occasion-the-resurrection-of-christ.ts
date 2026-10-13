import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'E8B0129D-7A63-45E0-9BF7-99689ACB6FF3',
		'75125ED6-42C5-4A8C-ACC6-7F194D0F4BAD',
		'Οἱ Ὕμνοι διὰ τὴν Ἀνάστασιν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'CDEA0EA8-C2FF-47E5-A935-285C6DEB064D',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'87A45C45-C143-42D6-A06C-C9F496E91044',
		'أَلْحَانُ قِيَامَةِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'9A344AD1-C259-42C3-8961-5B32AB10666E',
		'The Hymns for the Resurrection of Christ before the Reading of the Psalm and the Gospel',
		'969885A0-578E-4C5A-A306-F2773A533BA5',
		'Die Lieder für die Auferstehung Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '612D7EAE-0554-4797-919A-A29F3A169CEC',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
