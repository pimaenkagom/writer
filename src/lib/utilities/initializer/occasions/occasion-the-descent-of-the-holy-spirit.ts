import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'0507007C-74BC-4D88-A636-37DF7573908E',
		'6193DC2F-2969-4A76-BE78-5E1A8A30B58F',
		'Οἱ Ὕμνοι διὰ τὴν Κάθοδον τοῦ Ἁγίου Πνεύματος πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'9DA6C236-C050-4796-8E5B-D445118CCC38',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲛ̀ⲧⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'22F763FA-F4FB-4702-8128-66E9CDBDC894',
		'أَلْحَانُ حُلُولِ الرُّوحِ الْقُدُسِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'766304DE-8184-4131-A53E-8EDCDD2D82B1',
		'The Hymns for the Descent of the Holy Spirit before the Reading of the Psalm and the Gospel',
		'1736769C-FE5F-4502-B511-CA075372B200',
		'Die Lieder für die Herabsendung des Heiligen Geistes vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'DEA6F4A0-7927-4F61-BD5C-6126674B5FDD',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
