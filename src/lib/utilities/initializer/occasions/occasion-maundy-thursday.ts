import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'40649685-4542-4C6D-9738-9C81DB219B69',
		'52D6CEA3-99D9-4628-806E-5945C8DCAAD5',
		'Οἱ Ὕμνοι διὰ τὴν Μεγάλην Πέμπτην πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'643A0FD4-C491-4325-BDFB-0FDFFD070594',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓⲉϩⲟⲟⲩ ⲙ̀ⲙⲁϩϯⲟⲩ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'FF193A1A-3546-41EC-AD1C-6C1580B58329',
		'أَلْحَانُ خَمِيسِ الْعَهْدِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'CD0DE346-9199-4E7D-960E-DC389376E592',
		'The Hymns for Maundy Thursday before the Reading of the Psalm and the Gospel',
		'E047D1A3-BD75-4F7C-BD90-00D00B67BC66',
		'Die Lieder für Gründonnerstag vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '9D8D0C24-1227-48BB-A63B-FCE802D3F8BE',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
