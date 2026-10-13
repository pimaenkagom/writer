import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'2DA6C16C-21CE-489F-8C15-3B6E81A7C11B',
		'10ABDD69-BAB6-4A77-9C44-C9F75A2E3A04',
		'Οἱ Ὕμνοι διὰ τὸ Σάββατον τοῦ Λαζάρου πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'20603922-A33E-4902-9278-E57E7E549533',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ ⲛ̀ⲧⲉ Ⲗⲁⲍⲁⲣⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'D017829D-523B-4CB2-986F-B70C0C24C197',
		'أَلْحَانُ سَبْتِ لِعَازَرَ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'08B6B34B-914B-472B-B150-DC6EB79B686D',
		'The Hymns for the Saturday of Lazarus before the Reading of the Psalm and the Gospel',
		'81E266D2-B1BB-4F1B-BA11-905A4EB88D1D',
		'Die Lieder für den Samstag des Lazarus vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '2A8BF2F7-2414-49CF-A5FD-A84E77D4312E',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
