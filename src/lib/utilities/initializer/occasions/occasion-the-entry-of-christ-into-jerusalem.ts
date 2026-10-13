import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'D0C91AB4-E8C9-4DF3-9D5D-84FB9A2BB7E0',
		'8DEACE16-A4EE-45F4-A964-CA421403CC29',
		'Οἱ Ὕμνοι διὰ τὴν Εἴσοδον τοῦ Χριστοῦ εἰς Ἱεροσόλυμα πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'3AA9A1ED-1B9E-43F3-A988-DE616C0F0311',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'CC57D362-4FF7-4C5C-AF50-E4CB57B9E1EF',
		'أَلْحَانُ دُخُولِ الْمَسِيحِ أُورُشَلِيمَ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'578816BB-AFEC-415A-95AC-D26CBC36F6BE',
		'The Hymns for the Entry of Christ into Jerusalem before the Reading of the Psalm and the Gospel',
		'E8F5E531-8F78-45F6-8EE9-14034A68389B',
		'Die Lieder für den Einzug Christi in Jerusalem vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'AC191194-4C0C-4D4B-A23A-7AF5695310FD',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
