import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'AC28E52F-E95E-4685-A746-8A0251C04BBB',
		'85061848-5C58-4DB6-AAB3-99574F78EBBA',
		'Οἱ Ὕμνοι διὰ τὸ Σάββατον τῆς Ἀποκαλύψεως πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'0A757BD4-C27C-423B-BFA9-822451343B07',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ ⲛ̀ⲧⲉ ϯⲁⲡⲟⲕⲁⲗⲩⲯⲓⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'C9C34475-5E28-474B-96E1-F9B10EC72ED4',
		'أَلْحَانُ سَبْتِ النُّورِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'04876938-8C31-4A8D-9784-5412FC99ECA2',
		'The Hymns for the Saturday of the Apocalypse before the Reading of the Psalm and the Gospel',
		'9BF4C04E-8C13-4D84-8B74-6F3804C20A90',
		'Die Lieder für den Samstag der Offenbarung vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '1EDD20AA-20DD-4545-956E-BD070F17951E',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
