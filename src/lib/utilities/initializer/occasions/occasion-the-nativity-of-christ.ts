import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import {
	makeMultilingualTextWithId,
	makeMultilingualTextWithIdWithoutGreek
} from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheHymnAStarRoseInTheEast } from '$lib/utilities/initializer/shared/section-hymn-a-star-rose-in-the-east';

export const textTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	await makeMultilingualTextWithId(
		'57C8FEB2-897A-45C7-8658-22A3B8C323C0',
		'984EE58A-7390-450D-A93C-7C2EC044CCED',
		'Οἱ Ὕμνοι διὰ τὴν Γέννησιν τοῦ Χριστοῦ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
		'09175DEA-BB6C-402A-AF7E-334F4B28C803',
		'Ⲛⲓϫⲱ ⲉⲑⲃⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
		'03546EEE-1950-41E4-927D-9F7AEBDA0234',
		'أَلْحَانُ مِيلَادِ الْمَسِيحِ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
		'E8B5D5CC-3A67-48B5-9947-D9884EEF9ACB',
		'The Hymns for the Nativity of Christ before the Reading of the Psalm and the Gospel',
		'6FEC15F1-A9E3-4A3C-97CD-CE70227713E7',
		'Die Lieder für die Geburt Christi vor der Lesung des Psalms und des Evangeliums'
	);

textTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel =
	registerNode<Basenode>({
		id: '51F4A34A-B5AD-4798-8A0B-95C6CE9462AE',
		users: [
			// partTheLiturgyOfTheWord
			'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69'
		],
		type: NodeType.Chapter,
		value: textTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHymnTodayTheVirginGivesBirthToTheTranscendentOne =
	await makeMultilingualTextWithId(
		'5C8134A7-81A4-48E3-8DC5-67B26A665D20',
		'F1F3FBBD-DE55-436F-88E3-CE5657135C5C',
		'Ὁ Ὕμνος Ἡ Παρθένος σήμερον τὸν ὑπερούσιον τίκτει',
		'36CC22DF-D1A2-4AFB-ADF6-2733DAEA88AB',
		'Ⲡⲓϫⲱ ϫⲉ Ⲏⲡⲁⲣⲑⲉⲛⲟⲥ ⲥⲏⲙⲉⲣⲟⲛ ⲧⲟⲛ ⲩ̀ⲡⲉⲣⲟⲩⲥⲓⲟⲛ ⲧⲓⲕⲧⲓ',
		'107B8CFB-3721-4EF2-BF9F-C8A9C4CFD7B1',
		'اللَّحْنُ الْبَتُولُ الْيَوْمَ تَلِدُ الْفَائِقَ الْجَوْهَرِ',
		'74EA1D5F-345D-4177-94AA-3E0AC894BC5F',
		'The Hymn Today the Virgin Gives Birth to the Transcendent One',
		'C2F1D7A7-4CF6-4C5A-9865-3995670064CE',
		'Das Lied Die Jungfrau gebiert heute den Überwesentlichen'
	);

export const sectionTheHymnTodayTheVirginGivesBirthToTheTranscendentOne = registerNode<Basenode>({
	id: 'BF9FA182-670D-42DE-8275-8C5C156F63E6',
	users: [chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnTodayTheVirginGivesBirthToTheTranscendentOne.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnYourNativityChristOurGod = await makeMultilingualTextWithId(
	'4813BDC5-9B33-41E8-8E7B-F6A6DC2563EA',
	'12E2B13E-41CF-4295-B7B7-A25D27087D5F',
	'Ὁ Ὕμνος Ἡ γέννησίς σου, Χριστὲ ὁ Θεὸς ἡμῶν',
	'352AA433-591D-4BE4-B190-FADD6F789978',
	'Ⲡⲓϫⲱ ϫⲉ Ⲏ ⲅⲉⲛⲛⲏⲥⲓⲥ ⲥⲟⲩ Ⲭⲣⲓⲥⲧⲉ ⲟ Ⲑⲉⲟⲥ ⲏⲙⲱⲛ',
	'9680663D-B190-43B0-B7C0-E34EC285E9F9',
	'اللَّحْنُ مِيلَادُكَ أَيُّهَا الْمَسِيحُ إِلَهُنَا',
	'B34B31B5-E06A-4020-8119-F1AFCE80F9BF',
	'The Hymn Your Nativity, Christ Our God',
	'07121ABB-3392-4FFC-BA35-A1B4465BCAC4',
	'Das Lied Deine Geburt, Christus, unser Gott'
);

textTheHymnYourNativityChristOurGod.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnYourNativityChristOurGod.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnYourNativityChristOurGod.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnYourNativityChristOurGod.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnYourNativityChristOurGod.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnYourNativityChristOurGod = registerNode<Basenode>({
	id: 'D56299E2-298E-4292-94B9-453735CE2559',
	users: [chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnYourNativityChristOurGod.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs =
	await makeMultilingualTextWithIdWithoutGreek(
		'4D1B5E43-FB38-4EE6-BCE6-88A338BAAC9C',
		'2D4AF3A4-B3B8-4EB8-BA43-3849B5F5803F',
		'Ⲡⲓϫⲱ ϫⲉ Ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ ⲟⲩⲟϩ ⲛⲓⲛⲁⲕϩⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ',
		'E2E17BCD-00C7-4E5C-9896-CACE113B1A2E',
		'اللَّحْنُ الْمِيلَادُ الْبَتُولِيُّ وَالْمَخَاضُ الرُّوحِيُّ',
		'F69B4643-DF15-40CF-AF93-B3D9FF913F1F',
		'The Hymn The Virginal Birth and the Spiritual Birth Pangs',
		'E364771D-CA6E-476B-A28D-B2C7E5DCAA45',
		'Das Lied Die jungfräuliche Geburt und die geistlichen Wehen'
	);

textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnTheVirginalBirthAndTheSpiritualBirthPangs = registerNode<Basenode>({
	id: 'D11BE3BF-74C2-4BBB-94F7-EAAA8ECE9114',
	users: [chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnAWondrousBirth = await makeMultilingualTextWithId(
	'1BC388EC-43AB-444E-B46C-45CE37C3A2B5',
	'22A50F25-05B5-4923-9540-DC2428EDB518',
	'Ὁ Ὕμνος Γενέθλιον τε θαυμαστόν',
	'F853BD5E-EE1A-4006-A248-31DC041D4315',
	'Ⲡⲓϫⲱ ϫⲉ Ⲅⲉⲛⲉⲑⲗⲓⲟⲛ ⲧⲉ ⲑⲁⲩⲙⲁⲥⲧⲟⲛ',
	'34F4F525-7820-4629-9229-D091DCC0A928',
	'اللَّحْنُ مِيلَادٌ عَجِيبٌ',
	'124BDBB1-6848-4021-B96D-8F4531F1333E',
	'The Hymn A Wondrous Birth',
	'75026EFC-C68A-49B6-BA7F-F40EB8E67AAC',
	'Das Lied Eine wunderbare Geburt'
);

textTheHymnAWondrousBirth.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnAWondrousBirth.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnAWondrousBirth.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnAWondrousBirth.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnAWondrousBirth.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnAWondrousBirth = registerNode<Basenode>({
	id: '73F4BC1A-951D-47F1-B524-D06378331B90',
	users: [chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheHymnAWondrousBirth.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheParalexForTheNativityOfChrist = await makeMultilingualTextWithId(
	'6B66589D-3AEB-4222-8007-8AFD9B0F2E47',
	'A90664E3-2CF9-4A6E-90E0-976E1803AC75',
	'Ἡ Παράλεξις διὰ τὴν Γέννησιν τοῦ Χριστοῦ',
	'6FA33D34-4397-4286-B06B-F7B80EBBEB93',
	'Ϯⲡⲁⲣⲁⲗⲉⲝⲓⲥ ⲉⲑⲃⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
	'B391F4BC-6708-4323-A23D-3E08F6C83DDF',
	'الْبَرْلُكْسُ لِمِيلَادِ الْمَسِيحِ',
	'74240A34-2DFD-4AE1-B536-3FAE61702D39',
	'The Paralex for the Nativity of Christ',
	'151A1AC1-C887-48CB-B3C6-C20F1D0E8E06',
	'Der Paralex für die Geburt Christi'
);

textTheParalexForTheNativityOfChrist.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheNativityOfChrist.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheNativityOfChrist.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheNativityOfChrist.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheParalexForTheNativityOfChrist.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheParalexForTheNativityOfChrist = registerNode<Basenode>({
	id: '5EAFFDFE-4A9E-47CA-950B-2A7BF3330DCD',
	users: [chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheParalexForTheNativityOfChrist.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.children = [
	[sectionTheHymnTodayTheVirginGivesBirthToTheTranscendentOne.id],
	[sectionTheHymnYourNativityChristOurGod.id],
	[sectionTheHymnTheVirginalBirthAndTheSpiritualBirthPangs.id],
	[sectionTheHymnAWondrousBirth.id],
	[sectionTheHymnAStarRoseInTheEast.id],
	[sectionTheParalexForTheNativityOfChrist.id]
];
