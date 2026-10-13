import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'4D6B52E2-FCF2-442C-8F64-C8AC032E6241',
		'FEE64FC5-A20C-47D4-967A-6AC2C37F157F',
		'Οἱ Ὕμνοι διὰ τὴν Εἴσοδον τοῦ Χριστοῦ εἰς Αἴγυπτον πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'BE62FB95-EB79-4E66-89B6-44BEDC79FB07',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲉ̀ⲭⲏⲙⲓ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'00C534B8-DAC8-4E04-BBC7-3CA667E316BD',
		'أَلْحَانُ دُخُولِ الْمَسِيحِ أَرْضَ مِصْرَ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'363691F2-1D0E-4D7D-82D7-BDF012CC8491',
		'The Hymns for the Entry of Christ into Egypt before the Reading of the Psalm and the Gospel',
		'7E127337-142C-4499-94ED-9C7CC8422EA1',
		'Die Lieder für den Einzug Christi in Ägypten vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '66E2A0C7-35FC-4C2D-A629-3D5CA5BFDBA9',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
