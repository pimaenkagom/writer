import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'CF117502-BE61-4C66-BE48-1010D835AAF8',
		'2621B25C-B7BC-4809-9D49-9FFD3857AA70',
		'Οἱ Ὕμνοι διὰ τὴν Εὐλογίαν τοῦ Γάμου ἐν Κανᾷ τῆς Γαλιλαίας ὑπὸ Ἰησοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'DC102C64-56EE-4125-8F3B-125FC5A8781B',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲥⲙⲟⲩ ⲛ̀ⲧⲉ ⲡⲓϩⲱⲡ ϧⲉⲛ Ⲕⲁⲛⲁ ⲛ̀ⲧⲉ ϯⲅⲁⲗⲓⲗⲉⲁ ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'1907C17D-4650-4EDA-8FD4-6575828EAE38',
		'أَلْحَانُ مُبَارَكَةِ يَسُوعَ الْمَسِيحِ عُرْسَ قَانَا الْجَلِيلِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'00A16D7C-4071-4003-9329-E0A0A6681564',
		'The Hymns for the Blessing of the Wedding at Cana of Galilee by Jesus Christ before the Reading of the Psalm and the Gospel',
		'6839D1CB-B1DC-4D16-A94C-66EFDB2F43B1',
		'Die Lieder für die Segnung der Hochzeit zu Kana in Galiläa durch Jesus Christus vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: 'DE8BBBCD-A3C6-4761-A1A9-C75B7936BE6C',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value:
			textTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
