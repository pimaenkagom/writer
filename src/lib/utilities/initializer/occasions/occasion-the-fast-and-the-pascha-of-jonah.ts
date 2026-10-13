import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'1D2250DE-6E3D-487C-844E-50B110BD8FE7',
		'5BD8534A-3E9B-4FEE-B3AD-534DC5C11726',
		'Οἱ Ὕμνοι διὰ τὴν Νηστείαν καὶ τὸ Πάσχα τοῦ Ἰωνᾶ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'67CE6DD4-4615-4477-82A4-8DCEF7128270',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓⲡⲁⲥⲭⲁ ⲛ̀ⲧⲉ Ⲓⲱⲛⲁ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'6C7A6467-AFD2-42D5-9B8A-D81492223052',
		'أَلْحَانُ صَوْمِ يُونَانَ وَفِصْحِهِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'B45953A9-BE04-42C0-907E-42D964C42FF8',
		'The Hymns for the Fast and the Pascha of Jonah before the Reading of the Psalm and the Gospel',
		'DAE9B2AC-4027-4232-A117-0E461CA27C50',
		'Die Lieder für das Fasten und das Pascha des Jona vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '04EC8381-F855-411E-8D3C-ABB240B56B2C',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});
