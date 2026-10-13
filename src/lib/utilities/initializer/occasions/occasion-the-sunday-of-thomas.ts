import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'042138DD-89CC-4ECC-8271-04654A536D0D',
		'A2342B06-08FF-4658-928D-4DAD0E0E7D2F',
		'Οἱ Ὕμνοι διὰ τὴν Κυριακὴν τοῦ Θωμᾶ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'EF7CA08E-A1FD-405A-8C9D-28B781AD2AFB',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲕⲩⲣⲓⲁⲕⲏ ⲛ̀ⲧⲉ Ⲑⲱⲙⲁⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'2852793B-2493-48A3-8F66-B13A4FFE679C',
		'أَلْحَانُ أَحَدِ تُومَا قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'F49700A6-2A71-4311-958A-403BAFB18D94',
		'The Hymns for the Sunday of Thomas before the Reading of the Psalm and the Gospel',
		'3CFC0FFB-74EE-4869-B0A1-424CD47F9525',
		'Die Lieder für den Sonntag des Thomas vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '461B50CB-8D16-42A6-8D1A-CCDB88763B4F',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
