import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsOnTheOrdinaryDaysBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'2C6B2F93-CBD0-497D-B75B-66224B0CB54B',
		'3695D00C-1399-470E-97C8-C07567103080',
		'Οἱ Ὕμνοι κατὰ τὰς κοινὰς ἡμέρας πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'9283622E-13C2-4098-9B91-F5E23BAA8703',
		'Ⲛⲓϫⲱ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'C00C5005-8F4B-458E-AD74-D382A54676D5',
		'أَلْحَانُ الْأَيَّامِ السَّنَوِيَّةِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'F563C907-80AA-418A-99E8-BB51EAEF2637',
		'The Hymns on the Ordinary Days before the Reading of the Psalm and the Gospel',
		'19F4A62D-97F0-47F3-8D1B-B1B9721A7CDE',
		'Die Lieder an gewöhnlichen Tagen vor der Lesung des Psalms und des Evangeliums'
	);

export const chapterTheHymnsOnTheOrdinaryDaysBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '698F6CD1-4DFB-4632-9EAF-11D0FB8746E3',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsOnTheOrdinaryDaysBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
