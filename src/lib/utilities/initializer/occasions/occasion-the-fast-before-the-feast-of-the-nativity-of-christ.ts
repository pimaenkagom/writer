import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'EC619A99-8081-47D0-BC10-93D6FBFEFDA3',
		'70622D26-EF74-4F3F-A596-1BCF37B2018F',
		'Οἱ Ὕμνοι διὰ τὴν Νηστείαν πρὸ τῆς Ἑορτῆς τῆς Γεννήσεως τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'369ADBDF-BC25-4D46-ACC7-C3879D239F2C',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ ϧⲁϫⲉⲛ ⲡⲓϣⲁⲓ ⲛ̀ⲧⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'772878F2-E7FC-46EC-8927-04EE799C718D',
		'أَلْحَانُ صَوْمِ الْمِيلَادِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'45F417E6-A573-49E6-AF21-F74B7FB29109',
		'The Hymns for the Fast before the Feast of the Nativity of Christ before the Reading of the Psalm and the Gospel',
		'35FCE87B-D6C9-4A5D-8007-C31BF12D7D8F',
		'Die Lieder für das Fasten vor dem Fest der Geburt Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '2A73284B-17A4-4C33-9351-FCAE2EF7F317',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value:
			textTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
