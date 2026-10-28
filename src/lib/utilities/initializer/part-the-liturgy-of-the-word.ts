import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import {
	makeMultilingualTextWithId,
	makeMultilingualTextWithIdWithoutGreek
} from '$lib/utilities/initializer/constructors';
import { chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-annunciation-of-christ';
import { chapterTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-month-of-koiak';
import { chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-nativity-of-christ';
import { chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-paramoun-of-the-nativity-of-christ';
import { chapterTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-fast-before-the-feast-of-the-nativity-of-christ';
import { chapterTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-circumcision-of-christ';
import { chapterTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-presentation-of-christ-in-the-temple';
import { chapterTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-entry-of-christ-into-egypt';
import { chapterTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-paramoun-of-the-theophany';
import { chapterTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-theophany';
import { chapterTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-blessing-of-the-wedding-at-cana-of-galilee-by-jesus-christ';
import { chapterTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-transfiguration-of-christ';
import { chapterTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-fast-and-the-pascha-of-jonah';
import { chapterTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-great-fast';
import { chapterTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-saturday-of-lazarus';
import { chapterTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-entry-of-christ-into-jerusalem';
import { chapterTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-maundy-thursday';
import { chapterTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-saturday-of-the-apocalypse';
import { chapterTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-resurrection-of-christ';
import { chapterTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-sunday-of-thomas';
import { chapterTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-ascension-of-christ';
import { chapterTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-descent-of-the-holy-spirit';
import { chapterTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-fast-of-the-apostles';
import { chapterTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-cross';
import { chapterTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-crown-of-the-year';
import { chapterTheHymnsOnTheOrdinaryDaysBeforeTheReadingOfThePsalmAndTheGospel } from '$lib/utilities/initializer/occasions/occasion-the-ordinary-days';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheCallToPrayer } from '$lib/utilities/initializer/shared/section-the-call-to-prayer';
import { sectionTheResponseOfThePeopleWeWorshipYouOChrist } from '$lib/utilities/initializer/shared/section-the-response-of-the-people-we-worship-you-o-christ';
import {
	sectionTheBlessingOfTheIncenseAtAnotherOffering,
	sectionTheBlessingOfTheIncenseAtTheFirstOffering,
	sectionTheConclusionOfTheOfferingOfIncense,
	sectionTheOfferingOfIncenseDuringTheCirclingOfTheAltar,
	sectionTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies,
	sectionTheOfferingOfIncenseForTheBishop,
	sectionTheOfferingOfIncenseForTheConfessionOfThePeople,
	sectionTheOfferingOfIncenseForTheConfessionOfThePeopleDuringTheReadingOfTheActsOfTheApostles,
	sectionTheOfferingOfIncenseForTheCrucifiedLord,
	sectionTheOfferingOfIncenseForTheGospel,
	sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy,
	sectionTheOfferingOfIncenseForTheMetropolitan,
	sectionTheOfferingOfIncenseForThePatriarch,
	sectionTheOfferingOfIncenseForThePeopleDuringTheReadingOfTheActsOfTheApostles,
	sectionTheOfferingOfIncenseForThePeopleDuringTheReadingOfThePaulineEpistle,
	sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy,
	sectionTheOfferingOfIncenseForTheRelicsOfTheSaints,
	sectionTheOfferingOfIncenseInAllFourDirections,
	sectionTheOfferingOfIncenseInTheHolyOfHolies,
	sectionThePrayerOfTheOfferingOfIncenseDuringTheReadingOfTheActsOfTheApostles,
	sectionThePrayerOfTheOfferingOfIncenseDuringTheReadingOfThePaulineEpistle
} from '$lib/utilities/initializer/shared/sections-the-offering-of-incense';

export const textTheLiturgyOfTheWord = await makeMultilingualTextWithId(
	'944E89D6-5748-4FC0-BB72-9DD9E8E1F884',
	'15474E37-166F-4FC7-9E70-B995D315AAAD',
	'Ἡ Λειτουργία τοῦ Λόγου',
	'1DA4A0F9-2A86-421C-9873-6E9EFC1AF113',
	'Ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ⲛ̀ⲧⲉ ⲡⲓⲥⲁϫⲓ',
	'10FF39B4-56D7-4D54-9EB7-F7EB920ED060',
	'قُدَّاسُ الْكَلِمَةِ',
	'49068977-B352-473C-999E-1DF8213D204A',
	'The Liturgy of the Word',
	'50BFE5FE-C69C-4A76-85A4-7846722161D9',
	'Die Liturgie des Wortes'
);

export const partTheLiturgyOfTheWord = registerNode<Basenode>({
	id: 'CB4D723B-ACB1-4AFB-8C27-AB545C5E7B69',
	users: [bookTheLiturgyAccordingToBasil.id],
	type: NodeType.Part,
	value: textTheLiturgyOfTheWord.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
});

export const textTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle =
	await makeMultilingualTextWithId(
		'DABDA687-85BB-4138-88BB-C27C1F902D3A',
		'AB28A3A3-8EC6-49F2-9919-61D7410143BA',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος πρὸ καὶ κατὰ τὴν Ἀνάγνωσιν τῆς Ἐπιστολῆς τοῦ Παύλου',
		'F9F3FC1B-DE43-46B1-BD38-CF1C8F47D63A',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲁϫⲉⲛ ⲛⲉⲙ ϧⲉⲛ ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
		'AA616F7C-72BE-4F33-A2B1-2F2403471D69',
		'رَفْعُ الْبَخُورِ قَبْلَ وَأَثْنَاءَ قِرَاءَةِ الرِّسَالَةِ الْبُولُسِيَّةِ',
		'ECA1498D-A045-4268-986F-A10EC0FDDB99',
		'The Offering of Incense before and during the Reading of the Pauline Epistle',
		'DAA0FC9E-F5A9-4B7B-B133-F60420A2CCBE',
		'Die Darbringung des Weihrauchs vor und während der Lesung des Paulinischen Briefes'
	);

export const chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle =
	registerNode<Basenode>({
		id: '88392033-583A-4D33-85D9-E14FA390B632',
		users: [partTheLiturgyOfTheWord.id],
		type: NodeType.Chapter,
		value: textTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.children = [
	[sectionTheBlessingOfTheIncenseAtTheFirstOffering.id],
	[sectionThePrayerOfTheOfferingOfIncenseDuringTheReadingOfThePaulineEpistle.id],
	[sectionTheOfferingOfIncenseDuringTheCirclingOfTheAltar.id],
	[sectionTheOfferingOfIncenseInTheHolyOfHolies.id],
	[sectionTheOfferingOfIncenseInAllFourDirections.id],
	[sectionTheOfferingOfIncenseForTheGospel.id],
	[sectionTheOfferingOfIncenseForTheRelicsOfTheSaints.id],
	[sectionTheOfferingOfIncenseForThePatriarch.id],
	[sectionTheOfferingOfIncenseForTheMetropolitan.id],
	[sectionTheOfferingOfIncenseForTheBishop.id],
	[sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePeopleDuringTheReadingOfThePaulineEpistle.id],
	[sectionTheOfferingOfIncenseForTheCrucifiedLord.id],
	[sectionTheOfferingOfIncenseForTheConfessionOfThePeople.id],
	[sectionTheOfferingOfIncenseInAllFourDirections.id],
	[sectionTheOfferingOfIncenseForTheGospel.id],
	[sectionTheOfferingOfIncenseForTheRelicsOfTheSaints.id],
	[sectionTheOfferingOfIncenseForThePatriarch.id],
	[sectionTheOfferingOfIncenseForTheMetropolitan.id],
	[sectionTheOfferingOfIncenseForTheBishop.id],
	[sectionTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies.id],
	[sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy.id],
	[sectionTheConclusionOfTheOfferingOfIncense.id]
];

export const textTheHymnsBeforeTheReadingOfThePaulineEpistle = await makeMultilingualTextWithId(
	'88658A1C-C251-42A6-AAAC-4C687F78AC3C',
	'7F122B44-F27F-4DF1-BB07-FE178EDE1A28',
	'Οἱ Ὕμνοι πρὸ τῆς Ἀναγνώσεως τῆς Ἐπιστολῆς τοῦ Παύλου',
	'390F78F2-85E3-46CA-B2A7-250017816E40',
	'Ⲛⲓϫⲱ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'04049C8D-08A4-4212-A093-EBE9E0451098',
	'أَلْحَانُ قَبْلَ قِرَاءَةِ الرِّسَالَةِ الْبُولُسِيَّةِ',
	'3D7B5A2C-4B07-4E33-B719-480FB7C7254C',
	'The Hymns before the Reading of the Pauline Epistle',
	'21CB6626-9FEB-4B43-9200-F88C43CE1E56',
	'Die Lieder vor der Lesung des Paulinischen Briefes'
);

export const chapterTheHymnsBeforeTheReadingOfThePaulineEpistle = registerNode<Basenode>({
	id: '9260246D-CC8F-4472-9952-68F6F6AED38E',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheHymnsBeforeTheReadingOfThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays = await makeMultilingualTextWithId(
	'CCEBC9F8-975B-44BC-BDD2-AE523222548E',
	'EFF07BC3-3B2C-40FD-9317-32E4609B5B59',
	'Ὁ Ὕμνος τοῦ Θυμιατηρίου κατὰ τὰς κοινὰς καὶ χαρμοσύνους ἡμέρας',
	'1EBD46DD-5993-4E7F-AFA8-82A6EF3E0443',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϣⲟⲩⲣⲏϣ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲁⲧϣⲁⲓ ⲛⲉⲙ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲣⲁϣⲓ',
	'0A49E46C-90D2-49AC-8365-2BCB5CF72CF5',
	'لَحْنُ الْمِجْمَرَةِ فِي الْأَيَّامِ السَّنَوِيَّةِ وَأَيَّامِ الْفَرَحِ',
	'92171063-08CE-4FA6-985F-9D2A8FE2D49F',
	'The Hymn of the Censer on the Ordinary and Joyful Days',
	'7C48AF36-C49F-47C2-9D3B-374D16E9F6F2',
	'Das Lied des Weihrauchfasses an gewöhnlichen und freudigen Tagen'
);

textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays = registerNode<Basenode>({
	id: '2D6A4A45-6F00-42AF-80B6-05FC57CA2FC0',
	users: [chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnOfTheCenserOnFastingDays = await makeMultilingualTextWithId(
	'ABD58BCF-DEEC-47E3-9BA1-3F186CA00467',
	'07FB2FE5-14AD-420A-B12B-EB77B8BD93AC',
	'Ὁ Ὕμνος τοῦ Θυμιατηρίου ἐν ἡμέραις νηστείας',
	'00F4CE97-DB94-43BB-B038-22F4D2C45394',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϣⲟⲩⲣⲏϣ ⲛ̀ⲧⲉ ⲛⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ',
	'70129D11-87FA-45E3-8064-1724C2ED1899',
	'لَحْنُ الْمِجْمَرَةِ فِي أَيَّامِ الصَّوْمِ',
	'50F90DB5-6E3B-4EFF-A928-0E19E7984247',
	'The Hymn of the Censer on Fasting Days',
	'5F91FD21-A34E-416A-AB8A-841D3C20CCAF',
	'Das Lied des Weihrauchfasses an Fastentagen'
);

textTheHymnOfTheCenserOnFastingDays.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnFastingDays.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnFastingDays.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnFastingDays.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnFastingDays.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnOfTheCenserOnFastingDays = registerNode<Basenode>({
	id: 'AE1B682C-F8F6-4BC3-9C29-4C90FB794816',
	users: [chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheHymnOfTheCenserOnFastingDays.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	await makeMultilingualTextWithId(
		'02670D72-63A0-4912-8A32-9856C9A2BE4D',
		'0828F67A-8595-42A9-A56A-FDEC2B7D6898',
		'Ὁ Ὕμνος τοῦ Θυμιατηρίου ἐν ταῖς καθημεριναῖς ἡμέραις τῆς Νηστείας τοῦ Ἰωνᾶ καὶ τῆς Μεγάλης Τεσσαρακοστῆς',
		'8AD4865A-5543-4FAE-BC8B-F3458504D7D4',
		'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓϣⲟⲩⲣⲏϣ ϧⲉⲛ ⲛⲓⲉϩⲟⲟⲩ ⲙ̀ⲡⲓϩⲱⲃ ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛ̀ⲧⲉ Ⲓⲱⲛⲁ ⲛⲉⲙ ϯⲛⲓϣϯ ⲛ̀ⲛⲏⲥⲧⲓⲁ',
		'AB2ED0F4-3DD6-455D-B4D7-9DDC9FFAC534',
		'لَحْنُ الْمِجْمَرَةِ فِي أَيَّامِ الْأُسْبُوعِ مِنْ صَوْمِ يُونَانَ وَالصَّوْمِ الْكَبِيرِ',
		'0EA25250-A608-45F5-8168-502D534D8498',
		'The Hymn of the Censer on the Weekdays of the Fast of Jonah and the Great Fast',
		'5DE6F903-68C1-4AB9-8F04-794AA97ABBCE',
		'Das Lied des Weihrauchfasses an den Werktagen des Jona- und großen Fastens'
	);

textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast =
	registerNode<Basenode>({
		id: '2D788E3C-156F-4C52-AB39-D089DEEC0E73',
		users: [chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHymnOfTheCross = await makeMultilingualTextWithId(
	'6B5657DA-6ADA-425D-BE93-753E3027D76B',
	'7B4DB35D-C35A-462F-A502-F513E5D1B01F',
	'Ὁ Ὕμνος τοῦ Σταυροῦ',
	'1B9ADA99-BE10-4297-B26A-33F9FCFF5927',
	'Ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ',
	'7CA93C96-B981-406D-A9FF-3C88C7AAF3F7',
	'لَحْنُ الصَّلِيبِ',
	'72F5C6BE-9243-4D92-BD8C-6905AEA81B7B',
	'The Hymn of the Cross',
	'EF3C8110-0DA2-4D71-B90F-0270AEDC2A81',
	'Das Lied des Kreuzes'
);

export const sectionTheHymnOfTheCross = registerNode<Basenode>({
	id: '198F5502-738D-4951-B887-E2629C377662',
	users: [chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheHymnOfTheCross.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntercessions = await makeMultilingualTextWithId(
	'072612EE-FA51-49BF-8036-4E091B393888',
	'F36DAD68-6941-48B5-9DDF-AA711B5DD4CF',
	'Αἱ Πρεσβεῖαι',
	'9C752A26-2164-4AF3-8ECA-64B8FCA1AF57',
	'Ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ',
	'F4D55B45-0547-4816-8539-7A2451447686',
	'الشَّفَاعَاتُ',
	'355080DF-D67B-49C0-BA1A-539154E5B8A3',
	'The Intercessions',
	'59947448-E5B0-4A44-8426-7D302832FFBF',
	'Die Fürbitten'
);

export const sectionTheIntercessions = registerNode<Basenode>({
	id: '2F98E34A-ECE9-40FD-B494-58AF5997EB59',
	users: [chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheIntercessions.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.children = [
	[sectionTheHymnOfTheCenserOnTheOrdinaryAndJoyfulDays.id],
	[sectionTheHymnOfTheCenserOnFastingDays.id],
	[sectionTheHymnOfTheCenserOnTheWeekdaysOfTheFastOfJonahAndTheGreatFast.id],
	[sectionTheHymnOfTheCross.id],
	[sectionTheIntercessions.id]
];

export const textTheReadingOfThePaulineEpistle = await makeMultilingualTextWithId(
	'01E56160-5D85-4DF8-A162-1D1380E030D5',
	'F4A84F4A-C8EC-4517-A82C-23F66AFAEF7D',
	'Ἡ Ἀνάγνωσις τῆς Ἐπιστολῆς τοῦ Παύλου',
	'65136B5C-78A4-434D-8D7D-51C0E8873191',
	'Ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'F584A936-0C6E-42F3-9A1E-EA1B1E2769DD',
	'قِرَاءَةُ الرِّسَالَةِ الْبُولُسِيَّةِ',
	'DDEAF84A-36DC-4BBA-84BA-C2D259CD2819',
	'The Reading of the Pauline Epistle',
	'206173AD-2A9B-4AB7-BF44-205DEC17E074',
	'Die Lesung des Paulinischen Briefes'
);

export const chapterTheReadingOfThePaulineEpistle = registerNode<Basenode>({
	id: 'BC58164A-3F61-45FC-ADF6-AA86D889216C',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerDuringTheReadingOfThePaulineEpistle = await makeMultilingualTextWithId(
	'E4EB0D14-4A15-4463-8A85-E97B7E7C52A8',
	'86646AAA-C4F8-4CC0-8F2F-FA9751153543',
	'Ἡ Εὐχὴ κατὰ τὴν Ἀνάγνωσιν τῆς Ἐπιστολῆς τοῦ Παύλου',
	'E65CAA10-7CB4-4537-9087-624FF6E6812D',
	'Ⲡⲓϣⲗⲏⲗ ϧⲉⲛ ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'C80ABFB5-9CFA-45C6-AF11-7C46DF96EBC5',
	'الصَّلاَةُ أَثْنَاءَ قِرَاءَةِ الرِّسَالَةِ الْبُولُسِيَّةِ',
	'1DA9F088-6901-479C-9CC9-98623290F2C3',
	'The Prayer during the Reading of the Pauline Epistle',
	'447CC1E8-E3A0-4504-8589-22E508429031',
	'Das Gebet während der Lesung des Paulinischen Briefes'
);

export const sectionThePrayerDuringTheReadingOfThePaulineEpistle = registerNode<Basenode>({
	id: 'C0148872-6C20-449B-9106-976798ABAEF9',
	users: [chapterTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textThePrayerDuringTheReadingOfThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToThePaulineEpistle = await makeMultilingualTextWithId(
	'6F9B7DA6-8BD7-4BB0-B494-CAAB215373D5',
	'8834A818-AEE9-435E-8BF0-3F67D7E8FE47',
	'Ἡ Εἰσαγωγὴ τῆς Ἐπιστολῆς τοῦ Παύλου',
	'01B877E7-0CA5-4A73-8623-C8792244F577',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'8E7FD01C-183F-4468-9245-B3DA06AF5966',
	'مُقَدِّمَةُ الرِّسَالَةِ الْبُولُسِيَّةِ',
	'BB9F878C-D33D-4A66-945F-929FA9F1AD7A',
	'The Introduction to the Pauline Epistle',
	'E87B762B-663B-4179-B7A3-F16A73AFA94B',
	'Die Einleitung des Paulinischen Briefes'
);

export const sectionTheIntroductionToThePaulineEpistle = registerNode<Basenode>({
	id: '14E73616-8736-48DB-9FE6-986C18741D23',
	users: [chapterTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheIntroductionToThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePaulineEpistle = await makeMultilingualTextWithId(
	'349EE858-6C6B-4480-A561-B1114CA1E959',
	'64874A60-4537-47E8-B19E-024CEE69E373',
	'Ἡ Ἐπιστολὴ τοῦ Παύλου',
	'ACA63FD9-399C-4196-9E77-A38DC53B2DEA',
	'Ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'28497952-F1DD-4EC8-B5A8-A6B603A3814D',
	'الرِّسَالَةُ الْبُولُسِيَّةُ',
	'95978EFB-D19B-4EBB-BB94-145338EC884D',
	'The Pauline Epistle',
	'7B683839-2BA0-42B8-81EE-B78BB5840EF9',
	'Der Paulinische Brief'
);

textThePaulineEpistle.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePaulineEpistle.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePaulineEpistle.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePaulineEpistle.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textThePaulineEpistle.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionThePaulineEpistle = registerNode<Basenode>({
	id: 'EEDA48B3-2DF2-4EDE-97B3-4BF2837F481B',
	users: [chapterTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfThePaulineEpistle = await makeMultilingualTextWithId(
	'2DA7855B-D33A-4574-B61B-D85C4B7850BA',
	'D3CE80B2-BAE8-4753-BD49-80F78FF9A9A2',
	'Ἡ Λῆξις τῆς Ἐπιστολῆς τοῦ Παύλου',
	'C1F29E6E-B936-45FA-8E75-FA077ECEACF7',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
	'ECEB57DA-6B66-4E95-96A6-1650596E1B0F',
	'خِتَامُ الرِّسَالَةِ الْبُولُسِيَّةِ',
	'F03ABF44-266D-4762-815C-4858424EDCB0',
	'The Conclusion of the Pauline Epistle',
	'54696894-481E-45EF-950B-2F4074451C30',
	'Der Abschluss des Paulinischen Briefes'
);

export const sectionTheConclusionOfThePaulineEpistle = registerNode<Basenode>({
	id: '27290A36-DF30-4C7F-9ED0-88B8FA216C37',
	users: [chapterTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheConclusionOfThePaulineEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'540D290C-A565-4975-AB7D-A6E15CA2C7AC',
		'A3177103-6088-44C2-8E60-1B30A971554B',
		'Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'5267298B-78A8-4A9D-89A4-CB8BF989BF5B',
		'Ⲟⲩⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'13E073B0-27B1-4629-AA12-DE14D2BD20B9',
		'مَرَدٌّ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'962599CE-B128-49EE-81BB-5D217709AEBA',
		'A Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'A37CD2EF-6AF4-4EB4-9811-6876FD9EFF9C',
		'Eine Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionAResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '37CA7988-1C4F-4004-B926-95AA070A3DC9',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textAResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textASecondResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'023AB9E1-28F1-49BC-B10F-CA6EF2267824',
		'54B53734-FF02-4828-A2DC-DB0E429EE703',
		'Δευτέρα Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'A983AC25-5964-418E-A55E-7BA5DC16D238',
		'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'2D6C155A-E161-49DA-BD80-5B658B92853D',
		'مَرَدٌّ ثَانٍ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'BC3482D3-606E-4F76-952F-17776FDABEBB',
		'A Second Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'C03C028B-5242-4849-BBC6-BF450386C633',
		'Eine zweite Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionASecondResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: 'A8018E92-FAE6-4FE5-992D-EC8F09BF7B15',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textASecondResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textAThirdResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'B39C42C5-AA35-40BF-8EE2-6C16230DBE6C',
		'64E3107A-D64A-4A28-AA12-C4EC4C1485CD',
		'Τρίτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'60DA9CA8-396A-4750-A580-76B3EAA55B27',
		'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'72FE8EE2-F187-435C-A7A8-40AB91F53F5F',
		'مَرَدٌّ ثَالِثٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'842BAC3B-585F-4981-9973-CBECD0C4B3ED',
		'A Third Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'7F984DAD-1D5A-4D21-9C65-3B781B178D48',
		'Eine dritte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionAThirdResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '069D8700-F9FB-45B4-8EC9-C573019538A8',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textAThirdResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'8FA4525C-0E1A-485E-AAA1-2E740659A3F9',
		'8D1E8010-E1B7-48BF-8A74-60F08318AD1D',
		'Ὁ Ὕμνος τῶν Ἀρετῶν - Τετάρτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'100C0031-6013-49E7-9898-272771E61093',
		'Ⲡⲓϫⲱ ⲛ̀ⲛⲓⲁⲣⲉⲧⲏ - Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'1CDF5FF6-447B-4B9F-9895-63A54AEA3D1C',
		'لَحْنُ الْفَضَائِلِ - مَرَدٌّ رَابِعٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'73EFCDF8-0F29-422A-9F65-574A5373B42C',
		'The Hymn of the Virtues - A Fourth Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'61341EC0-6906-45EC-A656-E0BACD9A575C',
		'Das Lied der Tugenden - Eine vierte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '00E759E4-B38C-4CEA-AAD6-592DD6B7EE51',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value:
			textTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'DBF1658A-EC88-4D4D-B650-9C7BFCF3F12C',
		'CAEB3048-85BC-4A63-9630-C9F3109804ED',
		'Πέμπτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'FBAC2847-2F78-454F-9EC4-5A9614DA0FD6',
		'Ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'154B87E7-E7C9-482C-AE19-DCC08315F799',
		'مَرَدٌّ خَامِسٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'CC132631-15C6-431C-B3F2-411BC0C02E81',
		'A Fifth Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'33F9BCB5-6CFE-48DC-B3B9-34362032F4D3',
		'Eine fünfte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: 'E38667E9-8298-40A5-83B6-84E9B97F8DD5',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheTranslationOfTheReading = await makeMultilingualTextWithId(
	'AD3A7D9A-C1C8-4803-909F-A095675CA1EA',
	'0725351B-2266-48CD-B9D6-B6CA564EE35C',
	'Ἡ Ἑρμηνεία τῆς Ἀναγνώσεως',
	'6EB3EF38-F8C2-4B46-B760-7F5AC713CEDB',
	'Ϯⲁⲣⲙⲏⲛⲓⲁ ⲛ̀ⲧⲉ ⲡ̀ⲱϣ',
	'EE205DC6-8FE3-4CFD-B5D4-4D73D20C3C84',
	'تَرْجَمَةُ الْقِرَاءَةِ',
	'0E94377A-1052-4C92-9331-C779F871B23B',
	'The Translation of the Reading',
	'C8BB3F8C-7E47-4E63-BC71-9056D39B266E',
	'Die Übersetzung der Lesung'
);

export const sectionTheTranslationOfTheReading = registerNode<Basenode>({
	id: '2331943B-C5FD-4BED-A544-6C5E52777E33',
	users: [chapterTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheTranslationOfTheReading.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfThePaulineEpistle.children = [
	[sectionTheResponseOfThePeopleWeWorshipYouOChrist.id],
	[sectionThePrayerDuringTheReadingOfThePaulineEpistle.id],
	[sectionTheIntroductionToThePaulineEpistle.id],
	[sectionThePaulineEpistle.id],
	[sectionTheConclusionOfThePaulineEpistle.id],
	[sectionAResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionASecondResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionAThirdResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[
		sectionTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id
	],
	[sectionAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionTheTranslationOfTheReading.id]
];

export const textTheHymnsBeforeTheReadingOfTheCatholicEpistle = await makeMultilingualTextWithId(
	'1CF2A816-478F-4B1C-8803-2104E6949563',
	'D8F8F81B-9CB2-4078-B293-4A7C08FA16A1',
	'Οἱ Ὕμνοι πρὸ τῆς Ἀναγνώσεως τῆς Καθολικῆς Ἐπιστολῆς',
	'7F522347-6102-4703-B001-7A02D5E8C89E',
	'Ⲛⲓϫⲱ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'BB62103F-F60A-4633-9908-1A17B23A84B0',
	'أَلْحَانُ قَبْلَ قِرَاءَةِ الرِّسَالَةِ الْجَامِعَةِ',
	'FE61CEDB-EEA2-4EEA-9C75-79147D0FCE12',
	'The Hymns before the Reading of the Catholic Epistle',
	'1B7F2DE3-5EAE-4D8A-B66B-D63C6A155941',
	'Die Lieder vor der Lesung des Katholischen Briefes'
);

export const chapterTheHymnsBeforeTheReadingOfTheCatholicEpistle = registerNode<Basenode>({
	id: '10864F1C-E864-4716-90AE-D3F0839ABD4B',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheHymnsBeforeTheReadingOfTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth = await makeMultilingualTextWithId(
	'2C5EE4D1-4D2F-4943-8611-850E3568A513',
	'876730AC-5F72-46C2-82B4-22892B51366F',
	'Ὁ Ὕμνος Ὄντως ἀληθῶς γὰρ ἐξῆλθεν πᾶσι τὴν γῆν',
	'4AD9543E-87F3-47FE-8B2F-44B51317B14B',
	'Ⲡⲓϫⲱ ϫⲉ Ⲟⲛⲧⲱⲥ ⲁⲗⲏⲑⲱⲥ ⲅⲁⲣ ⲉⲝⲏⲗⲑⲓⲛ ⲡⲁⲥⲓ ⲧⲏⲛ ⲅⲏⲛ',
	'15FCF3AA-32FA-4CA8-8617-0EDBD124F500',
	'اللَّحْنُ بِالْحَقِيقَةِ وَالْحَقِّ تَتَمَجَّدُ أَسْمَاؤُكَ عَلَى الْأَرْضِ',
	'6576CEFE-3AC5-4010-A129-1AA65D319567',
	'The Hymn Truly, Truly Your Names Are Glorified on Earth',
	'CB54D81A-5F0A-4788-AE15-5DED44DF8CC2',
	'Das Lied Wahrlich, wahrhaftig werden deine Namen auf der Erde verherrlicht'
);

textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth = registerNode<Basenode>({
	id: 'F3A9F6C1-DA76-40C7-89BC-C7B1A61EB8B2',
	users: [chapterTheHymnsBeforeTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnPerfectIsTheBlessing = await makeMultilingualTextWithIdWithoutGreek(
	'64CAF24F-45E2-4478-9AC2-D953E066AAEE',
	'1B7AAF75-D775-42C5-AE7F-3DA7714A5420',
	'Ⲡⲓϫⲱ ϫⲉ Ⲁ̀ ⲡⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲡⲓⲥⲙⲟⲩ',
	'58E63B11-CF34-46E6-B60B-6AEFFB55A4F0',
	'اللَّحْنُ كَامِلَةٌ هِيَ الْبَرَكَةُ',
	'B51675C4-95B4-4ACB-86AF-45C9A6438D38',
	'The Hymn Perfect Is the Blessing',
	'A2083DD6-DA93-4E59-A12D-ABD7CDB000E1',
	'Das Lied Vollkommen ist der Segen'
);

export const sectionTheHymnPerfectIsTheBlessing = registerNode<Basenode>({
	id: 'D3E730EC-2FB0-4B37-9E53-5B668A6992BA',
	users: [chapterTheHymnsBeforeTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheHymnPerfectIsTheBlessing.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsBeforeTheReadingOfTheCatholicEpistle.children = [
	[sectionTheHymnTrulyTrulyYourNamesAreGlorifiedOnEarth.id],
	[sectionTheHymnPerfectIsTheBlessing.id]
];

export const textTheReadingOfTheCatholicEpistle = await makeMultilingualTextWithId(
	'051B09E7-688D-46E4-812D-CBBF19309DD0',
	'2513697F-A603-47B0-8676-05E0351730A4',
	'Ἡ Ἀνάγνωσις τῆς Καθολικῆς Ἐπιστολῆς',
	'E5ABBB98-D513-4FE9-9DD1-4C51888B549E',
	'Ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'68FF8B66-1D57-410F-83F1-640973CFBA2D',
	'قِرَاءَةُ الرِّسَالَةِ الْجَامِعَةِ',
	'E53CE360-74C0-451C-A888-6ED6B8E5E553',
	'The Reading of the Catholic Epistle',
	'A6C534A8-9648-4310-9633-CE5DF9647524',
	'Die Lesung des Katholischen Briefes'
);

export const chapterTheReadingOfTheCatholicEpistle = registerNode<Basenode>({
	id: '3C7F3577-DDB5-4542-81FE-3FF6E0903399',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerDuringTheReadingOfTheCatholicEpistle = await makeMultilingualTextWithId(
	'74937E4F-7DA3-443F-AC6A-49FF6ED7C8B9',
	'A430B5BF-4EBE-4FC7-9144-9EE48AF110B0',
	'Ἡ Εὐχὴ κατὰ τὴν Ἀνάγνωσιν τῆς Καθολικῆς Ἐπιστολῆς',
	'DC1E728B-B73E-4B1F-9EDD-5199F3F57A16',
	'Ⲡⲓϣⲗⲏⲗ ϧⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'B25E7267-7A67-45CC-A98B-9A10CEBBF645',
	'الصَّلاَةُ أَثْنَاءَ قِرَاءَةِ الرِّسَالَةِ الْجَامِعَةِ',
	'67EE3C2F-B960-4855-AA5F-81BDB8F40EBA',
	'The Prayer during the Reading of the Catholic Epistle',
	'C6E4EEF4-5509-4F09-B4DB-82CE87852113',
	'Das Gebet während der Lesung des Katholischen Briefes'
);

export const sectionThePrayerDuringTheReadingOfTheCatholicEpistle = registerNode<Basenode>({
	id: '3B30EDD9-ABEF-4A2D-B4D1-EDC2C8F2F2EC',
	users: [chapterTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textThePrayerDuringTheReadingOfTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheLitanyForTheOblationsSilent = await makeMultilingualTextWithId(
	'C59AA8BD-1CC3-4B47-A11B-A195058EB66A',
	'546A8CD0-61BB-4F02-BB1D-3563C263DC7C',
	'Ἡ Εὐχὴ ὑπὲρ τῶν Προσφορῶν (μυστικῶς)',
	'1ED8EC5B-18E8-4897-8300-04C648FB235E',
	'Ϯⲉⲩⲭⲏ ⲉⲑⲃⲉ ⲛⲓⲇⲱⲣⲟⲛ (ϧⲉⲛ ⲟⲩⲕⲁⲣⲱϥ)',
	'458ED38E-105E-4D79-B197-C2C78D284F2B',
	'أُوشِيَةُ الْقَرَابِينِ (سِرًّا)',
	'7174965E-9D42-4787-8CC7-0DA3309C3021',
	'The Litany for the Oblations (silent)',
	'77F95A5A-458E-4C90-B7B3-12D5B0B5C7CB',
	'Das Gebet für die Opfergaben (still)'
);

export const sectionTheLitanyForTheOblationsSilent = registerNode<Basenode>({
	id: 'CED39BE2-BDC0-4D07-8033-D274AD4C7D6C',
	users: [chapterTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheLitanyForTheOblationsSilent.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToTheCatholicEpistle = await makeMultilingualTextWithId(
	'050A4313-7B30-4017-A7EF-6724A6810EB5',
	'7BFFAB18-C9D0-43E0-A310-BF2BD0CCFC25',
	'Ἡ Εἰσαγωγὴ τῆς Καθολικῆς Ἐπιστολῆς',
	'6565BE4E-2D3A-4828-A361-EFAD5C405465',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'0312EED3-97CB-478D-A0F0-D197D695A82E',
	'مُقَدِّمَةُ الرِّسَالَةِ الْجَامِعَةِ',
	'DED5304C-D330-431C-AA96-865205EB1504',
	'The Introduction to the Catholic Epistle',
	'2EA479A5-AF8E-453C-98AA-A798A265677A',
	'Die Einleitung des Katholischen Briefes'
);

export const sectionTheIntroductionToTheCatholicEpistle = registerNode<Basenode>({
	id: '94B09D98-F0C7-40AB-99B0-7F9F4C1D85F6',
	users: [chapterTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheCatholicEpistle = await makeMultilingualTextWithId(
	'7D40341B-733A-42B6-B74A-80626A18ECA8',
	'5C1528C2-1B84-4B35-9D4F-1017506137B2',
	'Ἡ Καθολικὴ Ἐπιστολή',
	'5CA58AF8-8D06-4630-8BAB-EAFA64AABBED',
	'Ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'CFF54BCE-BFDC-484C-86D7-696F77FC81AE',
	'الرِّسَالَةُ الْجَامِعَةُ',
	'5F6DDA1F-8E54-45D7-870B-EC018E8A0548',
	'The Catholic Epistle',
	'7FA5A604-0143-49AF-93B4-0209B25984DC',
	'Der Katholische Brief'
);

textTheCatholicEpistle.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheCatholicEpistle.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheCatholicEpistle.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheCatholicEpistle.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheCatholicEpistle.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheCatholicEpistle = registerNode<Basenode>({
	id: 'BC026463-CEB8-4F88-82BC-27BFFD1118CE',
	users: [chapterTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfTheCatholicEpistle = await makeMultilingualTextWithId(
	'23F67C91-17E0-4CC4-BE97-3284901AC357',
	'42B53648-B40E-4F1D-9B13-C5C9A083B586',
	'Ἡ Λῆξις τῆς Καθολικῆς Ἐπιστολῆς',
	'3A5777D5-295B-45B1-9843-7B3EB7A2DB55',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲡⲓⲕⲁⲑⲟⲗⲓⲕⲟⲛ',
	'BB0B8081-76D7-4FDF-858F-DA8BE19308E0',
	'خِتَامُ الرِّسَالَةِ الْجَامِعَةِ',
	'DBC0C18A-5292-47A6-8681-54A2C7E9B608',
	'The Conclusion of the Catholic Epistle',
	'504445ED-861E-4C09-8974-A9A9D44E11FA',
	'Der Abschluss des Katholischen Briefes'
);

export const sectionTheConclusionOfTheCatholicEpistle = registerNode<Basenode>({
	id: '18EDA3E1-C635-42EA-AF22-7D148E4F12F2',
	users: [chapterTheReadingOfTheCatholicEpistle.id],
	type: NodeType.Section,
	value: textTheConclusionOfTheCatholicEpistle.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfTheCatholicEpistle.children = [
	[sectionThePrayerDuringTheReadingOfTheCatholicEpistle.id],
	[sectionTheLitanyForTheOblationsSilent.id],
	[sectionTheIntroductionToTheCatholicEpistle.id],
	[sectionTheCatholicEpistle.id],
	[sectionTheConclusionOfTheCatholicEpistle.id],
	[sectionTheTranslationOfTheReading.id]
];

export const textTheOfferingOfIncenseBeforeAndDuringTheReadingOfTheActsOfTheApostles =
	await makeMultilingualTextWithId(
		'0A330B70-345C-42A8-B4B3-F5D0E30D7B63',
		'69A7FB89-22F9-4192-B41B-AB319410CE52',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος πρὸ καὶ κατὰ τὴν Ἀνάγνωσιν τῶν Πράξεων τῶν Ἀποστόλων',
		'1A4B1A8B-8E88-4F87-B6D6-69475EF1AB82',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲁϫⲉⲛ ⲛⲉⲙ ϧⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
		'B3BBD21A-F251-4F6C-BF0E-4D250C37938E',
		'رَفْعُ الْبَخُورِ قَبْلَ وَأَثْنَاءَ قِرَاءَةِ الْإِبْرَكْسِيسِ',
		'327E572F-0ECA-4A58-B8D9-6A29E158F4DD',
		'The Offering of Incense before and during the Reading of the Acts of the Apostles',
		'84BAB30A-4D03-4E81-84B8-42555B05843B',
		'Die Darbringung des Weihrauchs vor und während der Lesung der Apostelgeschichte'
	);

export const chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfTheActsOfTheApostles =
	registerNode<Basenode>({
		id: '4783EE40-F229-46D0-B4F2-11897530FAB1',
		users: [partTheLiturgyOfTheWord.id],
		type: NodeType.Chapter,
		value: textTheOfferingOfIncenseBeforeAndDuringTheReadingOfTheActsOfTheApostles.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfTheActsOfTheApostles.children = [
	[sectionTheBlessingOfTheIncenseAtAnotherOffering.id],
	[sectionThePrayerOfTheOfferingOfIncenseDuringTheReadingOfTheActsOfTheApostles.id],
	[sectionTheOfferingOfIncenseDuringTheCirclingOfTheAltar.id],
	[sectionTheOfferingOfIncenseInTheHolyOfHolies.id],
	[sectionTheOfferingOfIncenseInAllFourDirections.id],
	[sectionTheOfferingOfIncenseForTheGospel.id],
	[sectionTheOfferingOfIncenseForTheRelicsOfTheSaints.id],
	[sectionTheOfferingOfIncenseForThePatriarch.id],
	[sectionTheOfferingOfIncenseForTheMetropolitan.id],
	[sectionTheOfferingOfIncenseForTheBishop.id],
	[sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePeopleDuringTheReadingOfTheActsOfTheApostles.id],
	[sectionTheOfferingOfIncenseForTheCrucifiedLord.id],
	[sectionTheOfferingOfIncenseForTheConfessionOfThePeopleDuringTheReadingOfTheActsOfTheApostles.id],
	[sectionTheOfferingOfIncenseInAllFourDirections.id],
	[sectionTheOfferingOfIncenseForTheGospel.id],
	[sectionTheOfferingOfIncenseForTheRelicsOfTheSaints.id],
	[sectionTheOfferingOfIncenseForThePatriarch.id],
	[sectionTheOfferingOfIncenseForTheMetropolitan.id],
	[sectionTheOfferingOfIncenseForTheBishop.id],
	[sectionTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies.id],
	[sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy.id],
	[sectionTheConclusionOfTheOfferingOfIncense.id]
];

export const textTheHymnsBeforeTheReadingOfTheActsOfTheApostles = await makeMultilingualTextWithId(
	'D44921B0-A6A6-4833-9B43-5C2D7C169F41',
	'5E7352E2-8518-43DD-851C-B709937962A0',
	'Οἱ Ὕμνοι πρὸ τῆς Ἀναγνώσεως τῶν Πράξεων τῶν Ἀποστόλων',
	'5695FA7F-AC59-4E07-A47F-6A6FA88AA77C',
	'Ⲛⲓϫⲱ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'0C888B0C-2E81-4DAF-A85C-4A48A434D502',
	'أَلْحَانُ قَبْلَ قِرَاءَةِ الْإِبْرَكْسِيسِ',
	'527B12F3-8C36-4268-AD78-3E36E23A25FA',
	'The Hymns before the Reading of the Acts of the Apostles',
	'CAF2A064-66D4-46CE-92AD-E12A0D1202E4',
	'Die Lieder vor der Lesung der Apostelgeschichte'
);

export const chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles = registerNode<Basenode>({
	id: '214059F7-F8B5-4925-8721-A083D90ADD8F',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheHymnsBeforeTheReadingOfTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAHymnForTheActsOfTheApostles = await makeMultilingualTextWithId(
	'83B5BFE4-90E3-49AD-85DA-486500A95243',
	'CEB1E4D0-DEEA-47CB-82D1-A1BCAC1544BF',
	'Ὕμνος διὰ τὰς Πράξεις τῶν Ἀποστόλων',
	'890394E1-DD6C-425E-B034-AD3E815739B1',
	'Ⲟⲩϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'1464315E-7D72-4197-A348-04BD5845C138',
	'لَحْنٌ لِلْإِبْرَكْسِيسِ',
	'51733AA8-F779-476D-994E-8B70603AE368',
	'A Hymn for the Acts of the Apostles',
	'9EC7B161-5716-4B3E-A2F3-71139FA00D11',
	'Ein Lied zur Apostelgeschichte'
);

export const sectionAHymnForTheActsOfTheApostles = registerNode<Basenode>({
	id: 'AD2E054F-09FE-43B8-9ED4-8D78C59247A0',
	users: [chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textAHymnForTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textASecondHymnForTheActsOfTheApostles = await makeMultilingualTextWithId(
	'4F6B5171-B85A-4AF3-B13B-04AFC0C04C87',
	'FDFA337F-A828-43BB-8B9B-2140E892BBC1',
	'Δεύτερος Ὕμνος διὰ τὰς Πράξεις τῶν Ἀποστόλων',
	'7F4394B1-C72A-49A0-AC5C-F17E19B42A55',
	'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'1180E1C0-69C1-411A-9BEC-F04C0AFA9130',
	'لَحْنٌ ثَانٍ لِلْإِبْرَكْسِيسِ',
	'95EFB6DC-BCFF-4DA9-805A-329FAA9BDDC2',
	'A Second Hymn for the Acts of the Apostles',
	'92345F06-DB27-479A-9747-B79B28D0DA6B',
	'Ein zweites Lied zur Apostelgeschichte'
);

export const sectionASecondHymnForTheActsOfTheApostles = registerNode<Basenode>({
	id: '44F8B168-3F68-402E-A724-06B3938067E7',
	users: [chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textASecondHymnForTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAThirdHymnForTheActsOfTheApostles = await makeMultilingualTextWithId(
	'DC253FE6-814C-418D-B287-9F7E323C7362',
	'039A9EB4-1D8D-4102-A034-52BCBF81C6EF',
	'Τρίτος Ὕμνος διὰ τὰς Πράξεις τῶν Ἀποστόλων',
	'7FF75E74-DDE6-4B19-A14D-1881F6B8C551',
	'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'5230FFA5-BE76-4B87-A40F-8AB4B75EB8BD',
	'لَحْنٌ ثَالِثٌ لِلْإِبْرَكْسِيسِ',
	'FE5AEAE5-393F-4E15-9D80-4FC9C406EF80',
	'A Third Hymn for the Acts of the Apostles',
	'4BE8E261-A92C-4E28-9BB6-4014AA092A66',
	'Ein drittes Lied zur Apostelgeschichte'
);

export const sectionAThirdHymnForTheActsOfTheApostles = registerNode<Basenode>({
	id: '03FBBAA3-AB1F-4683-A5DA-3FAF462763F1',
	users: [chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textAThirdHymnForTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles.children = [
	[
		sectionAHymnForTheActsOfTheApostles.id,
		sectionASecondHymnForTheActsOfTheApostles.id,
		sectionAThirdHymnForTheActsOfTheApostles.id
	]
];

export const textTheReadingOfTheActsOfTheApostles = await makeMultilingualTextWithId(
	'27E82086-53D1-4E19-9DBA-0B1384A17C82',
	'D9263B77-3580-49CF-87AD-FE4FEB69489B',
	'Ἡ Ἀνάγνωσις τῶν Πράξεων τῶν Ἀποστόλων',
	'2B51DCE2-66DF-4C4F-B8C3-33BA99507173',
	'Ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'85DDF87B-F5DE-411A-B2DD-822B6E3C73D8',
	'قِرَاءَةُ الْإِبْرَكْسِيسِ',
	'4986E060-CB99-4C1A-83F8-BE64771EB0FC',
	'The Reading of the Acts of the Apostles',
	'7F2C7142-8C1D-40DF-B40A-1A25DD1ADF8E',
	'Die Lesung der Apostelgeschichte'
);

export const chapterTheReadingOfTheActsOfTheApostles = registerNode<Basenode>({
	id: '28EB6F10-A98A-4A5F-A7AB-CAEAF82DB4F9',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheResponseOfThePeopleBlessedAreYouIndeed =
	await makeMultilingualTextWithIdWithoutGreek(
		'562014B6-0F37-4F1B-B0F4-1605CA33A027',
		'D5AC3713-E7E0-463C-8BF8-589161B54C5B',
		'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ϫⲉ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ',
		'2F95C876-D2AA-4DED-83F1-B8D8E1B0E5C5',
		'مَرَدُّ الشَّعْبِ مُبَارَكٌ أَنْتَ بِالْحَقِيقَةِ',
		'D143255C-9827-4FF0-BE4A-D0E6A4030693',
		'The Response of the People Blessed Are You indeed',
		'E24FFF9A-DDE2-493A-B8AD-C609B626FE44',
		'Die Erwiderung des Volkes Wahrlich gesegnet bist du'
	);

export const sectionTheResponseOfThePeopleBlessedAreYouIndeed = registerNode<Basenode>({
	id: '358D212F-22A1-4911-BDBD-30DD3FE8B306',
	users: [chapterTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textTheResponseOfThePeopleBlessedAreYouIndeed.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerDuringTheReadingOfTheActsOfTheApostles = await makeMultilingualTextWithId(
	'7584CFF2-9C3C-4BDE-A4AD-D2AE330D54A1',
	'1C587D77-74A8-4656-9E06-182E96EF0878',
	'Ἡ Εὐχὴ κατὰ τὴν Ἀνάγνωσιν τῶν Πράξεων τῶν Ἀποστόλων',
	'2C079FBC-BF75-476E-A5EC-846E96A2D3A2',
	'Ⲡⲓϣⲗⲏⲗ ϧⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'0E37D7E9-E6B3-4003-85A4-333AC3AB00FC',
	'الصَّلاَةُ أَثْنَاءَ قِرَاءَةِ الْإِبْرَكْسِيسِ',
	'4D5D2D79-84D2-4CFA-BD75-736EBE01269A',
	'The Prayer during the Reading of the Acts of the Apostles',
	'7FEEFA15-19E9-457C-81E3-297459B9C990',
	'Das Gebet während der Lesung der Apostelgeschichte'
);

export const sectionThePrayerDuringTheReadingOfTheActsOfTheApostles = registerNode<Basenode>({
	id: '38007AD2-9E59-40CD-B630-92E74A8C9ED0',
	users: [chapterTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textThePrayerDuringTheReadingOfTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToTheActsOfTheApostles = await makeMultilingualTextWithId(
	'D8F9C39C-82EA-410B-A028-F6D4A5438FAA',
	'3545249B-9CEE-4B58-B504-168D26B16CD7',
	'Ἡ Εἰσαγωγὴ τῶν Πράξεων τῶν Ἀποστόλων',
	'D53C7E01-6669-4051-AEF8-40A2915ACE28',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'3DD22EF5-A340-431C-8059-90B68C8A23E8',
	'مُقَدِّمَةُ الْإِبْرَكْسِيسِ',
	'BA7C7369-B5FE-4374-97F1-60A357C03ED2',
	'The Introduction to the Acts of the Apostles',
	'D4D99F26-89B5-42EE-A1AC-9D77E520CB88',
	'Die Einleitung der Apostelgeschichte'
);

export const sectionTheIntroductionToTheActsOfTheApostles = registerNode<Basenode>({
	id: 'BE1048EC-F31E-4DFC-824A-5D3FCD9A9430',
	users: [chapterTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheActsOfTheApostles = await makeMultilingualTextWithId(
	'DA8FF496-2729-41CB-B8F7-A04110E90B3A',
	'AEC11BEA-1FB5-4F76-A210-BDC045BA304F',
	'Αἱ Πράξεις τῶν Ἀποστόλων',
	'F23466B0-6D8A-4283-8BEE-A03C4C7D37B1',
	'Ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'B9E83AD5-E8FB-4AA8-BFB2-5B2AFA1E1729',
	'الْإِبْرَكْسِيسُ',
	'F1882D82-450B-48A2-9A4B-AE8B2D14E257',
	'The Acts of the Apostles',
	'AEC6180A-50E6-451A-B3EC-BF6603E98745',
	'Die Apostelgeschichte'
);

textTheActsOfTheApostles.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheActsOfTheApostles.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheActsOfTheApostles.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheActsOfTheApostles.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheActsOfTheApostles.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheActsOfTheApostles = registerNode<Basenode>({
	id: '597DDB9B-A34D-476A-B1B5-FD9D6856779C',
	users: [chapterTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfTheActsOfTheApostles = await makeMultilingualTextWithId(
	'F4CFA325-FB55-48BB-8218-2806B424AFF2',
	'96A06A1F-E59C-4710-9BE1-13B14304A2B1',
	'Ἡ Λῆξις τῶν Πράξεων τῶν Ἀποστόλων',
	'A59B8F8C-F1C1-458D-8057-275B93A57FBB',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲡⲓⲡ̀ⲣⲁⲝⲓⲥ',
	'C2A651CC-4D0A-44F2-B0D3-8DE1D39EBD8F',
	'خِتَامُ الْإِبْرَكْسِيسِ',
	'232E29EE-5FEF-4FA4-9B32-C6762722C131',
	'The Conclusion of the Acts of the Apostles',
	'93E3594D-57FD-41F8-AF00-045F0E477B89',
	'Der Abschluss der Apostelgeschichte'
);

export const sectionTheConclusionOfTheActsOfTheApostles = registerNode<Basenode>({
	id: '58DBA3B6-28FB-4255-A42F-5EEB18BC4E67',
	users: [chapterTheReadingOfTheActsOfTheApostles.id],
	type: NodeType.Section,
	value: textTheConclusionOfTheActsOfTheApostles.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfTheActsOfTheApostles.children = [
	[sectionTheResponseOfThePeopleBlessedAreYouIndeed.id],
	[sectionThePrayerDuringTheReadingOfTheActsOfTheApostles.id],
	[sectionTheIntroductionToTheActsOfTheApostles.id],
	[sectionTheActsOfTheApostles.id],
	[sectionTheConclusionOfTheActsOfTheApostles.id],
	[sectionTheTranslationOfTheReading.id]
];

export const textTheReadingOfTheSynaxarium = await makeMultilingualTextWithId(
	'697AB302-39F5-44DF-8E1E-C81ED90A853B',
	'94CD28E7-E934-41D0-83F4-445B6017ED8C',
	'Ἡ Ἀνάγνωσις τοῦ Συναξαρίου',
	'33A4C749-C9D9-4CC8-BD0E-ED109D91E900',
	'Ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲥⲩⲛⲁⲝⲁⲣⲓⲟⲛ',
	'31DDA160-8E90-4ACE-96E2-4D58DA5B1670',
	'قِرَاءَةُ السِّنْكِسَارِ',
	'51898C8E-80A6-44AA-B204-E5596D8FD9F1',
	'The Reading of the Synaxarium',
	'EF2B29FE-6DEC-47FC-AC38-A3417DF1611B',
	'Die Lesung des Synaxariums'
);

export const chapterTheReadingOfTheSynaxarium = registerNode<Basenode>({
	id: 'B20376F1-8F53-4B8B-847B-4EFFF45545FF',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfTheSynaxarium.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToTheSynaxarium = await makeMultilingualTextWithId(
	'2C1F93F7-32ED-4856-BC0E-7647FB5BB7FB',
	'9E44329B-7EBE-4937-8C0D-96ED5DDDB130',
	'Ἡ Εἰσαγωγὴ τοῦ Συναξαρίου',
	'5755C152-443B-4173-A061-75F8127A34A2',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲥⲩⲛⲁⲝⲁⲣⲓⲟⲛ',
	'46F57372-2F4E-4FC9-B5D8-8AC886091418',
	'مُقَدِّمَةُ السِّنْكِسَارِ',
	'E3D05470-DD93-47F5-A0D4-2DC83956BCF1',
	'The Introduction to the Synaxarium',
	'6A1493E1-CD8F-4DF8-AD63-899C0E43BE52',
	'Die Einleitung des Synaxariums'
);

export const sectionTheIntroductionToTheSynaxarium = registerNode<Basenode>({
	id: 'E814F182-D89C-4F21-85D8-1C2C7735D917',
	users: [chapterTheReadingOfTheSynaxarium.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheSynaxarium.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheSynaxarium = await makeMultilingualTextWithId(
	'483F3DAE-1C07-4083-8874-1D6DB1E46AD2',
	'98C79C82-C97A-4E01-9CEE-DB19B94E26F5',
	'Τὸ Συναξάριον',
	'5AA0F19A-0198-4A60-90F6-0DFAC7CE0FCC',
	'Ⲡⲓⲥⲩⲛⲁⲝⲁⲣⲓⲟⲛ',
	'641271DF-43DB-4D1C-BD23-EB7AF1D0E28D',
	'السِّنْكِسَارُ',
	'96766181-571B-420A-AE74-7403566C3542',
	'The Synaxarium',
	'716809D5-2D02-42C5-9AC4-3C63D26040B1',
	'Das Synaxarium'
);

textTheSynaxarium.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheSynaxarium.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheSynaxarium.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheSynaxarium.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheSynaxarium.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheSynaxarium = registerNode<Basenode>({
	id: '8F789384-97C2-4D69-9206-96F6ED980BA3',
	users: [chapterTheReadingOfTheSynaxarium.id],
	type: NodeType.Section,
	value: textTheSynaxarium.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfTheSynaxarium.children = [
	[sectionTheIntroductionToTheSynaxarium.id],
	[sectionTheSynaxarium.id],
	[sectionTheTranslationOfTheReading.id]
];

export const textThePrayerBeforeTheReadingOfThePsalmAndTheGospel = await makeMultilingualTextWithId(
	'F21905A1-F544-4CDF-A30E-01FCF962869B',
	'4887A406-A3F8-402C-8FFB-061D5B39394B',
	'Ἡ Εὐχὴ πρὸ τῆς Ἀναγνώσεως τοῦ Ψαλμοῦ καὶ τοῦ Εὐαγγελίου',
	'ED1582E0-7173-487F-A8A0-8BF3218C156E',
	'Ⲡⲓϣⲗⲏⲗ ϧⲁϫⲉⲛ ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'8C8C035F-4EB0-482D-9354-36C85678934A',
	'الصَّلاَةُ قَبْلَ قِرَاءَةِ الْمَزْمُورِ وَالْإِنْجِيلِ',
	'A12EEA81-4690-4E8B-8CC3-6D14787D01A8',
	'The Prayer before the Reading of the Psalm and the Gospel',
	'CF6F77AA-EE47-464D-B74D-443B5EED3484',
	'Das Gebet vor der Lesung des Psalms und des Evangeliums'
);

export const chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel = registerNode<Basenode>({
	id: 'A2E52040-E76D-4D3B-8603-2AC88F24205B',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheTrisagion = await makeMultilingualTextWithId(
	'D5011C65-DBAA-4026-B83B-EFF04A4886E6',
	'C676F897-2723-433E-A7A0-F0EF49CD722A',
	'Ὁ Τρισάγιος Ὕμνος',
	'DBA46C48-3E6F-423C-B101-470C1BA9C583',
	'Ⲡⲓⲧ̀ⲣⲓⲥⲁⲅⲓⲟⲥ',
	'7C343EA5-2F40-43D0-9DE1-05219CC593A0',
	'الثَّلَاثُ تَقْدِيسَاتٍ',
	'070DAE68-011F-4CB2-B25D-00E68B192A95',
	'The Trisagion',
	'857BB061-7BA0-4CAB-AB59-8BA81668B761',
	'Das Dreimalheilig'
);

textTheTrisagion.texts.ancient_greek.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheTrisagion.texts.coptic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheTrisagion.texts.arabic.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheTrisagion.texts.english.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheTrisagion.texts.german.status = '4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheTrisagion = registerNode<Basenode>({
	id: '4CD7914D-C9B4-4856-9F58-4F7E293E846C',
	users: [chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheTrisagion.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textALitanyForTheGospel = await makeMultilingualTextWithId(
	'71646655-0BAC-40F6-ABB9-6C68AF7190F4',
	'2385C7BF-02BE-4C58-84B2-E3DA385C689F',
	'Εὐχὴ ὑπὲρ τοῦ Εὐαγγελίου',
	'EE734F16-DE00-4B83-BF9D-CB9477B89908',
	'Ⲟⲩⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'5DD07D04-B646-47D5-8389-19E7285E3E4C',
	'أُوشِيَةٌ لِلْإِنْجِيلِ',
	'34FF40FE-7524-4DBA-95DA-75E9CE28F9BB',
	'A Litany for the Gospel',
	'4F0CEF3C-CBE3-4D48-8C2C-634524692B53',
	'Ein Gebet für das Evangelium'
);

export const sectionALitanyForTheGospel = registerNode<Basenode>({
	id: '5C6CAB9D-E5E9-4D35-B97E-00037781270D',
	users: [chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textALitanyForTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textAnotherLitanyForTheGospel = await makeMultilingualTextWithId(
	'C2D4E8B5-1ABA-4441-8A7B-352C12270BFB',
	'EC95ED3E-8CF4-4963-A79E-316554FF9EF5',
	'Ἄλλη Εὐχὴ ὑπὲρ τοῦ Εὐαγγελίου',
	'2F91AA1E-97D7-4213-B3B6-BB5ADB6FE435',
	'Ⲕⲉⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'25FE58A0-071A-4D05-8A28-3C5A732EA90D',
	'أُوشِيَةٌ أُخْرَى لِلْإِنْجِيلِ',
	'07EE2DC0-08C9-4CD0-987D-BCF1684E0AEB',
	'Another Litany for the Gospel',
	'15069501-F4C4-4FBF-9A07-ED495F17FA3E',
	'Ein anderes Gebet für das Evangelium'
);

export const sectionAnotherLitanyForTheGospel = registerNode<Basenode>({
	id: '4F0C95BF-9B98-49F3-9889-26A212F2A6FE',
	users: [chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textAnotherLitanyForTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheProcessionOfTheGospel = await makeMultilingualTextWithId(
	'2A1DC22A-D799-40AC-9B19-889E4204DC41',
	'8F4ACF8E-FA10-4D4E-92A2-E66DA2B46485',
	'Ἡ Περιφορὰ τοῦ Εὐαγγελίου',
	'90B9CC22-4AC2-44F3-8BCA-EF746CD830CA',
	'Ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'61711B57-D2C4-4040-8085-8DE15190977F',
	'دَوْرَةُ الْإِنْجِيلِ',
	'57F364DD-44EF-4F74-B526-C9B634A0CA73',
	'The Procession of the Gospel',
	'A7402023-4653-4C93-B023-2A5343A6A933',
	'Der Evangeliumsumgang'
);

export const sectionTheProcessionOfTheGospel = registerNode<Basenode>({
	id: 'E2204B8A-B95B-4D61-A344-F3C3D65A7594',
	users: [chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id],
	type: NodeType.Section,
	value: textTheProcessionOfTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.children = [
	[sectionTheTrisagion.id],
	[sectionTheCallToPrayer.id],
	[sectionALitanyForTheGospel.id],
	[sectionAnotherLitanyForTheGospel.id],
	[sectionTheProcessionOfTheGospel.id]
];

export const textTheReadingOfThePsalm = await makeMultilingualTextWithId(
	'B70ECBE8-7A2A-4516-B0BE-2DEAF0B891FD',
	'2C1A0131-C46C-4D31-AD6A-E3548C8B879A',
	'Ἡ Ἀνάγνωσις τοῦ Ψαλμοῦ',
	'D72BC231-7269-48E1-BDDD-195EED3CC846',
	'Ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ',
	'5C6FC634-E29D-42C0-BDAE-79425AD833DE',
	'قِرَاءَةُ الْمَزْمُورِ',
	'5F4F8E99-E7CB-483E-8AC9-0BF7DBBCABD4',
	'The Reading of the Psalm',
	'06D7131F-4258-40DC-80B0-978963B11B6F',
	'Die Lesung des Psalms'
);

export const chapterTheReadingOfThePsalm = registerNode<Basenode>({
	id: '661054FA-6F50-4F43-A987-4A742695F2BF',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfThePsalm.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToThePsalm = await makeMultilingualTextWithId(
	'15C57512-2486-4A0F-8E21-F5FA7AF4101E',
	'3A165EDE-98D9-4CB8-B835-AED610A891AE',
	'Ἡ Εἰσαγωγὴ τοῦ Ψαλμοῦ',
	'3B57C472-E60B-497F-ACAC-1CA6A2A68A66',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲯⲁⲗⲙⲟⲥ',
	'66523863-B698-49C3-8342-A8FE690A5A06',
	'مُقَدِّمَةُ الْمَزْمُورِ',
	'A4CCB3E8-1768-493C-9F61-48EEE2B0C84E',
	'The Introduction to the Psalm',
	'7D8928D8-6289-422E-8D42-268E41493DAC',
	'Die Einleitung des Psalms'
);

export const sectionTheIntroductionToThePsalm = registerNode<Basenode>({
	id: 'FBE90A41-B392-4D78-8D85-776003A33AFA',
	users: [chapterTheReadingOfThePsalm.id],
	type: NodeType.Section,
	value: textTheIntroductionToThePsalm.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalm = await makeMultilingualTextWithId(
	'CC7C0A89-BC23-4900-93E2-B7EA0281C790',
	'B8F5970F-6786-4E49-A948-F713C934205A',
	'Ὁ Ψαλμός',
	'E78FED9B-69D9-4630-9C1D-3D655392558C',
	'Ⲡⲓⲯⲁⲗⲙⲟⲥ',
	'0C9A2B03-2175-4799-ABDB-39C3170D6E77',
	'الْمَزْمُورُ',
	'1344453A-F5D7-456F-A864-A834499494D2',
	'The Psalm',
	'F8500E73-75AC-46DD-85F6-D70B5F0B4D6F',
	'Der Psalm'
);

export const sectionThePsalm = registerNode<Basenode>({
	id: '66920905-5BEF-4579-B9FF-A1C9411D9A57',
	users: [chapterTheReadingOfThePsalm.id],
	type: NodeType.Section,
	value: textThePsalm.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePsalmTrailerInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'53225660-5D82-42B7-86EB-224351A11EC1',
		'4644DB12-2320-4C6F-A56A-07BC3E2761E1',
		'Ὁ Ἐπίλογος τοῦ Ψαλμοῦ ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου ἢ Ἐπισκόπου',
		'1D3C97A0-DE53-4D8B-8BCC-44EF27E2B1DE',
		'Ⲡⲓⲉⲡⲓⲗⲟⲅⲟⲥ ⲙ̀ⲡⲓⲯⲁⲗⲙⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'911FD32D-8D82-4307-A988-3E58D3011DBE',
		'طَوَافُ الْمَزْمُورِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'EE5EBB47-55EA-44CD-9162-D3C3B1FAFFBD',
		'The Psalm Trailer in the Presence of a Patriarch, Metropolitan or Bishop',
		'0B5A99BD-8340-43D0-8DDC-E3D8D7BB7132',
		'Der Psalmnachsatz bei Anwesenheit eines Patriarchen, Metropoliten oder Bischofs'
	);

export const sectionThePsalmTrailerInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '0D4CEF87-9EE7-4884-AAFF-281D5D097A1E',
		users: [chapterTheReadingOfThePsalm.id],
		type: NodeType.Section,
		value: textThePsalmTrailerInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheResponseOfThePsalm = await makeMultilingualTextWithId(
	'AA5FCB47-0867-4516-B73E-D76FA3762B85',
	'79FD320F-687F-426A-8CC9-A3B3AFE4E10B',
	'Ἡ Ἀπόκρισις τοῦ Ψαλμοῦ',
	'24A11AC4-AAE6-45DB-97D1-C2600B51D6D1',
	'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲯⲁⲗⲙⲟⲥ',
	'ED5578F1-D55F-4708-B5D8-37F42C01142D',
	'مَرَدُّ الْمَزْمُورِ',
	'6B43B0C8-FBE3-41A5-9F64-4F768A1D5740',
	'The Response of the Psalm',
	'032989AF-F7E3-48A3-8D54-E40F575520F4',
	'Die Erwiderung des Psalms'
);

export const sectionTheResponseOfThePsalm = registerNode<Basenode>({
	id: 'ED3F2806-5252-4A5D-8AEB-9846EB4927B4',
	users: [chapterTheReadingOfThePsalm.id],
	type: NodeType.Section,
	value: textTheResponseOfThePsalm.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfThePsalm.children = [
	[sectionTheIntroductionToThePsalm.id],
	[sectionThePsalm.id],
	[sectionThePsalmTrailerInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionTheResponseOfThePsalm.id]
];

export const textTheReadingOfTheGospel = await makeMultilingualTextWithId(
	'D9DC3BC2-72DF-4384-814C-5AF64389595D',
	'2015C1B7-46A3-4DCF-882F-69A445784043',
	'Ἡ Ἀνάγνωσις τοῦ Εὐαγγελίου',
	'B993E979-145C-4415-A9F3-49D37BB58950',
	'Ⲡ̀ⲱϣ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'FE8294DC-078C-4B0B-AC61-1E704831AD9B',
	'قِرَاءَةُ الْإِنْجِيلِ',
	'4D936E81-BDAC-41FC-8775-0A8F72CF2649',
	'The Reading of the Gospel',
	'2B42EBF4-A1A4-4EED-A184-9DC26958BD1A',
	'Die Lesung des Evangeliums'
);

export const chapterTheReadingOfTheGospel = registerNode<Basenode>({
	id: '98E6CE08-CEA0-4203-9119-40F6EF53EFB6',
	users: [partTheLiturgyOfTheWord.id],
	type: NodeType.Chapter,
	value: textTheReadingOfTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheIntroductionToTheGospel = await makeMultilingualTextWithId(
	'F67499C0-29DD-4EB7-834E-41A45CA28926',
	'18418B03-C808-45B7-B7D6-7D8AC85C00AB',
	'Ἡ Εἰσαγωγὴ τοῦ Εὐαγγελίου',
	'2B0E81EC-73EC-4D45-AC91-4E61FBC7CDB5',
	'Ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'3E7232EB-CB5C-4FAD-9700-5F869DED1A10',
	'مُقَدِّمَةُ الْإِنْجِيلِ',
	'4F373F54-DCED-43F4-890B-59A108269584',
	'The Introduction to the Gospel',
	'A6A039D5-4E0A-4B8E-8749-7D1E4AD29AEA',
	'Die Einleitung des Evangeliums'
);

export const sectionTheIntroductionToTheGospel = registerNode<Basenode>({
	id: '2D8D7B6C-D88F-4E9F-B7EF-868CC7C66E43',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheIntroductionToTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheGospel = await makeMultilingualTextWithId(
	'DFFAA9A9-CE07-4D47-8981-A35625692EB5',
	'C51A1D5F-F2C0-4448-8059-01C2AC4F4D75',
	'Τὸ Εὐαγγέλιον',
	'49D0F963-02C2-48EA-9C0D-ADB6520AB158',
	'Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'5A04EF87-2712-478D-9047-918216865604',
	'الْإِنْجِيلُ',
	'50B3F986-0AC4-4410-9BBB-BB46B88FC1B5',
	'The Gospel',
	'B1036233-17AD-40AE-B4BF-834339762731',
	'Das Evangelium'
);

export const sectionTheGospel = registerNode<Basenode>({
	id: '9F015FAF-C04C-49D9-BC9C-E96CFB8B840A',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheConclusionOfTheGospel = await makeMultilingualTextWithId(
	'1540C000-85D7-42DF-BE64-E40EC93C720E',
	'6D139EED-2893-4EBB-A40D-F8769175D438',
	'Ἡ Λῆξις τοῦ Εὐαγγελίου',
	'3ACE95F5-12F8-4389-A060-9D1832B6EDAA',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'23197D5E-BC01-4C62-830F-9D5B4BC15E33',
	'خِتَامُ الْإِنْجِيلِ',
	'57DF3586-936C-434D-90CE-B129021D2922',
	'The Conclusion of the Gospel',
	'5A814C0F-A507-421A-8A26-A2BE84E9BCD1',
	'Der Abschluss des Evangeliums'
);

export const sectionTheConclusionOfTheGospel = registerNode<Basenode>({
	id: '4DA02236-B0C6-4E0C-9C4A-1E7C82688A2D',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheConclusionOfTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerAfterTheGospel = await makeMultilingualTextWithId(
	'B6E222D2-7F64-417A-A361-B9F178BBA263',
	'47C213CF-1453-494D-8D84-90452D26B6E4',
	'Ἡ Εὐχὴ μετὰ τὸ Εὐαγγέλιον',
	'D31F9EA8-52F0-4C1E-A957-0509E5B00E4E',
	'Ⲡⲓϣⲗⲏⲗ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'232616BC-50D3-4EEA-AB91-4796001C38DB',
	'الصَّلاَةُ بَعْدَ الْإِنْجِيلِ',
	'E9D5DD1D-3ED9-42D8-9BFB-7A912B92E593',
	'The Prayer after the Gospel',
	'74EE5CB9-C840-4C18-970B-8F26207A4332',
	'Das Gebet nach dem Evangelium'
);

export const sectionThePrayerAfterTheGospel = registerNode<Basenode>({
	id: '0122E32E-97F9-4E2D-9965-2E34A5E4E0B2',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textThePrayerAfterTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheProcessionForThePresentationOfChristInTheTemple =
	await makeMultilingualTextWithId(
		'B194F7A6-5448-4B56-B9D9-47E3C5DA95EC',
		'2E59A64F-A2A0-4E1D-A0AC-30D4C3625B25',
		'Ἡ Περιφορὰ διὰ τὴν Παράστασιν τοῦ Χριστοῦ ἐν τῷ Ἱερῷ',
		'BD286A7E-7163-48BF-B63F-2DEE0CA45A93',
		'Ⲡⲓⲕⲱϯ ⲉⲑⲃⲉ ⲡⲓⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ',
		'73E9E81A-A5EF-4A5B-A577-A1D08A857935',
		'دَوْرَةُ دُخُولِ الْمَسِيحِ الْهَيْكَلَ',
		'9999BCFA-FC7C-4AC9-85E2-F155C201A3CA',
		'The Procession for the Presentation of Christ in the Temple',
		'635522D0-6612-44CF-A28B-F40AC0444042',
		'Der Festzug für die Vorstellung Christi im Tempel'
	);

export const sectionTheProcessionForThePresentationOfChristInTheTemple = registerNode<Basenode>({
	id: '80F1364A-415F-4AAD-9EB0-B5615D58EC49',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheProcessionForThePresentationOfChristInTheTemple.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheSermon = await makeMultilingualTextWithId(
	'1F24893B-E2BA-4986-80B2-1C81457D1132',
	'F1DD2298-4EAF-42B7-BDCA-649087BB4AE0',
	'Ἡ Ὁμιλία',
	'92DBD234-D3F5-487C-8D37-4CEF602D8156',
	'Ϯⲟⲙⲓⲗⲓⲁ',
	'87574EEE-3586-4C23-86C4-79E6B0883757',
	'الْعِظَةُ',
	'2C54931E-6890-4A7D-AE17-93A388D67A28',
	'The Sermon',
	'9ADBA3A0-6666-4CFE-BFFB-60E3EEBE2930',
	'Die Predigt'
);

export const sectionTheSermon = registerNode<Basenode>({
	id: '98131F7A-B802-42DF-9976-0D1B39D4F3C6',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheSermon.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfTheVeil = await makeMultilingualTextWithId(
	'ACE0959D-FECC-46E1-BA37-9C3F2C914D65',
	'4BC3EF0C-C503-4670-A197-8460DC2FECAF',
	'Ἡ Εὐχὴ τοῦ Καταπετάσματος',
	'3A4FC635-6D84-4669-AC12-51C0594A76EC',
	'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ',
	'B818481A-E348-42FE-A871-C103B3A49352',
	'صَلاَةُ الْحِجَابِ',
	'E71481C8-55B8-4342-92E9-614FD8E0226B',
	'The Prayer of the Veil',
	'C3EBE67F-2186-425C-9035-28B86019834F',
	'Das Gebet des Schleiers'
);

export const sectionThePrayerOfTheVeil = registerNode<Basenode>({
	id: '07878A41-A3AE-44FF-8AB0-FA6F82CEF74E',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textThePrayerOfTheVeil.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheResponseOfTheGospel = await makeMultilingualTextWithId(
	'5F20399C-F9A3-4AF9-925F-BFE9AC5AA675',
	'12AA21C7-F35B-47DA-96BE-B672A8B28CE6',
	'Ἡ Ἀπόκρισις τοῦ Εὐαγγελίου',
	'7C65C5D2-C4C3-4594-832D-E7C8B36976AB',
	'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'0ABFE0D2-BB5C-4203-85F7-2C777D0DBED1',
	'مَرَدُّ الْإِنْجِيلِ',
	'36B1BC6A-BC1E-4BD6-A6ED-1DE64FF3077A',
	'The Response of the Gospel',
	'902ABF6F-15C0-40DC-874C-7B3F3FC5BC6B',
	'Die Erwiderung des Evangeliums'
);

export const sectionTheResponseOfTheGospel = registerNode<Basenode>({
	id: '8ED11F0A-D324-4BE3-9CED-6AED37D8D093',
	users: [chapterTheReadingOfTheGospel.id],
	type: NodeType.Section,
	value: textTheResponseOfTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReadingOfTheGospel.children = [
	[sectionTheIntroductionToTheGospel.id],
	[sectionTheGospel.id],
	[sectionTheConclusionOfTheGospel.id],
	[sectionThePrayerAfterTheGospel.id],
	[sectionTheTranslationOfTheReading.id],
	[sectionTheProcessionForThePresentationOfChristInTheTemple.id],
	[sectionTheSermon.id],
	[sectionThePrayerOfTheVeil.id],
	[sectionTheResponseOfTheGospel.id]
];

sectionTheTranslationOfTheReading.users = [
	chapterTheReadingOfThePaulineEpistle.id,
	chapterTheReadingOfTheCatholicEpistle.id,
	chapterTheReadingOfTheActsOfTheApostles.id,
	chapterTheReadingOfTheSynaxarium.id,
	chapterTheReadingOfTheGospel.id
];

partTheLiturgyOfTheWord.children = [
	[chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	[chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	[chapterTheReadingOfThePaulineEpistle.id],
	[chapterTheHymnsBeforeTheReadingOfTheCatholicEpistle.id],
	[chapterTheReadingOfTheCatholicEpistle.id],
	[chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfTheActsOfTheApostles.id],
	[chapterTheHymnsBeforeTheReadingOfTheActsOfTheApostles.id],
	[chapterTheReadingOfTheActsOfTheApostles.id],
	[chapterTheReadingOfTheSynaxarium.id],
	[chapterTheHymnsForTheAnnunciationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[
		chapterTheHymnsForTheFastBeforeTheFeastOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id
	],
	[chapterTheHymnsForTheMonthOfKoiakBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheParamounOfTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheNativityOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheCircumcisionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForThePresentationOfChristInTheTempleBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheEntryOfChristIntoEgyptBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheParamounOfTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheTheophanyBeforeTheReadingOfThePsalmAndTheGospel.id],
	[
		chapterTheHymnsForTheBlessingOfTheWeddingAtCanaOfGalileeByJesusChristBeforeTheReadingOfThePsalmAndTheGospel.id
	],
	[chapterTheHymnsForTheTransfigurationOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheFastAndThePaschaOfJonahBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheGreatFastBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheSaturdayOfLazarusBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheEntryOfChristIntoJerusalemBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForMaundyThursdayBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheSaturdayOfTheApocalypseBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheResurrectionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheSundayOfThomasBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheAscensionOfChristBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheDescentOfTheHolySpiritBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheFastOfTheApostlesBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheCrossBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsForTheCrownOfTheYearBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheHymnsOnTheOrdinaryDaysBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterThePrayerBeforeTheReadingOfThePsalmAndTheGospel.id],
	[chapterTheReadingOfThePsalm.id],
	[chapterTheReadingOfTheGospel.id]
];
