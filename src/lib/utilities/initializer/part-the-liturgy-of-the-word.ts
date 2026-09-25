import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheResponseOfThePeopleWeWorshipYouOChrist } from '$lib/utilities/initializer/shared/section-the-response-of-the-people-we-worship-you-o-christ';

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

export const textTheBlessingOfTheIncenseAtTheFirstOffering = await makeMultilingualTextWithId(
	'D7E0A0CB-6FAD-4580-9659-F227CF8BDC80',
	'C800104F-0742-4923-9714-03CBE3E3B061',
	'Ἡ Εὐλογία τοῦ Θυμιάματος κατὰ τὴν πρώτην Προσφοράν',
	'1C4CACBA-EF8A-42C7-96EB-718EA4101B36',
	'Ⲡⲓⲥⲙⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲉⲛ ⲡⲓϣⲟⲣⲡ ⲛ̀ⲧⲁϩⲟ',
	'15DA1588-4D2F-4E83-BDE2-E42E3EE03738',
	'مُبَارَكَةُ الْبَخُورِ فِي الرَّفْعَةِ الأُولَى',
	'B0A84741-63D1-41FC-8409-920259A6C442',
	'The Blessing of the Incense at the First Offering',
	'B7844455-A32E-4A04-8355-269345D7BDFC',
	'Die Segnung des Weihrauchs bei der ersten Darbringung'
);

export const sectionTheBlessingOfTheIncenseAtTheFirstOffering = registerNode<Basenode>({
	id: 'B56E022F-4BE4-4C67-9126-F3BBBF5407BA',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheBlessingOfTheIncenseAtTheFirstOffering.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textThePrayerOfTheOfferingOfIncenseDuringTheReadingOfThePaulineEpistle =
	await makeMultilingualTextWithId(
		'E78F79A5-B56D-4884-87BE-B928CF04036E',
		'6BF1151E-943E-4E09-A53F-09C2EE834E79',
		'Ἡ Εὐχὴ τῆς Προσφορᾶς τοῦ Θυμιάματος κατὰ τὴν Ἀνάγνωσιν τῆς Ἐπιστολῆς τοῦ Παύλου',
		'EB431314-AF18-4093-A8B1-91C39FAE6C31',
		'Ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲉⲛ ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
		'04C63AD4-C6B2-4C80-AE52-2819868FEBE8',
		'صَلاَةُ رَفْعِ الْبَخُورِ أَثْنَاءَ قِرَاءَةِ الرِّسَالَةِ الْبُولُسِيَّةِ',
		'B1E45F88-EFCC-475E-8D05-A3F1C8001857',
		'The Prayer of the Offering of Incense during the Reading of the Pauline Epistle',
		'9A2EFDCB-BFBD-43EF-92E1-B38DF8CBD6BC',
		'Das Gebet der Darbringung des Weihrauchs während der Lesung des Paulinischen Briefes'
	);

export const sectionThePrayerOfTheOfferingOfIncenseDuringTheReadingOfThePaulineEpistle =
	registerNode<Basenode>({
		id: '8E28C457-ED1D-4E18-A5F0-D843114F6785',
		users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textThePrayerOfTheOfferingOfIncenseDuringTheReadingOfThePaulineEpistle.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheOfferingOfIncenseDuringTheCirclingOfTheAltar = await makeMultilingualTextWithId(
	'8F6C204D-21A5-49C0-893C-5AD28FC93E81',
	'FBCAD536-7B45-46F3-8AB8-B024E5890E23',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος κατὰ τὴν Περιφορὰν τοῦ Θυσιαστηρίου',
	'D8EA5ADE-51BE-4ADC-BCA0-8DEFA6611C0A',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲉⲛ ⲡⲓⲕⲱϯ ⲛ̀ⲧⲉ ⲡⲓⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ',
	'DD5ACA31-510A-4DC2-BCB8-9430DF5017C3',
	'رَفْعُ الْبَخُورِ أَثْنَاءَ دَوْرَةِ الْمَذْبَحِ',
	'958CC77F-F32B-4922-93CE-533ACAFE6C3D',
	'The Offering of Incense during the Circling of the Altar',
	'933C8BD8-93BA-44B1-9188-24A29D8F78FF',
	'Die Darbringung des Weihrauchs während der Umschreitung des Altars'
);

export const sectionTheOfferingOfIncenseDuringTheCirclingOfTheAltar = registerNode<Basenode>({
	id: '7ED576D0-2D2C-4932-865C-E7091814A061',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseDuringTheCirclingOfTheAltar.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseInTheHolyOfHolies = await makeMultilingualTextWithId(
	'F2B60533-FF65-435E-AD5B-007490CC0052',
	'6A192124-46DE-4593-86BE-8C279F92C6C3',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ἐν τοῖς Ἁγίοις τῶν Ἁγίων',
	'9931D220-9445-42A2-A351-1E1AFEA265B1',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲉⲛ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲟⲩⲁⲃ',
	'090DAE68-906E-4C42-818B-266E7AACC5E9',
	'رَفْعُ الْبَخُورِ فِي قُدْسِ الأَقْدَاسِ',
	'764235FC-27A1-4A44-BF05-C4DA4EF7E0F3',
	'The Offering of Incense in the Holy of Holies',
	'3097EEF2-2028-4F8B-8109-F12C9D367DB9',
	'Die Darbringung des Weihrauchs im Allerheiligsten'
);

export const sectionTheOfferingOfIncenseInTheHolyOfHolies = registerNode<Basenode>({
	id: '14F2D5E5-68FF-4FDA-9A39-6581A8111137',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseInTheHolyOfHolies.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseInAllFourDirections = await makeMultilingualTextWithId(
	'1FF14D78-08DD-49BF-8A50-00D4BE99F00D',
	'7DB654D5-9BF0-4A75-956E-D7418BA61DE5',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος πρὸς τὰ Τέσσαρα Κλίματα',
	'276704F3-BFCE-4404-9860-A4C59D409929',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉ̀ⲡⲓϥⲧⲟⲟⲩ ⲛ̀ⲧⲉⲛϩ ⲛ̀ⲧⲉ ⲡⲓⲕⲁϩⲓ',
	'18786D41-EA7A-4198-96A5-06A6E049156C',
	'رَفْعُ الْبَخُورِ إِلَى الْجِهَاتِ الْأَرْبَعِ',
	'4BAC8F1F-4F2F-4558-B9D7-C2776FACA1AF',
	'The Offering of Incense in All Four Directions',
	'FE78894F-E853-40F7-B7D2-E09FC478C351',
	'Die Darbringung des Weihrauchs in alle vier Himmelsrichtungen'
);

export const sectionTheOfferingOfIncenseInAllFourDirections = registerNode<Basenode>({
	id: '090E5F56-C83A-43F4-8049-7F5622371C19',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseInAllFourDirections.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheGospel = await makeMultilingualTextWithId(
	'D28EB15D-9969-4484-B658-66DBC43E7A9E',
	'942013FF-B769-4903-8F9F-2EBD0224AD1E',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος διὰ τὸ Εὐαγγέλιον',
	'76848F61-8E46-427E-96D3-FECACD4D5C2A',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
	'79122224-E7AD-4320-B4F8-89040E4ED06F',
	'رَفْعُ الْبَخُورِ لِلْإِنْجِيلِ',
	'3485DEA3-235C-40C4-B0ED-5A1D79835230',
	'The Offering of Incense for the Gospel',
	'AFB408F6-896E-4E55-8B91-4474982227A3',
	'Die Darbringung des Weihrauchs für das Evangelium'
);

export const sectionTheOfferingOfIncenseForTheGospel = registerNode<Basenode>({
	id: '8E26391E-ABB6-4294-B27C-4D8FF182380E',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheGospel.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheRelicsOfTheSaints = await makeMultilingualTextWithId(
	'46E14AC4-8E2B-4A44-97F8-534EC3F4A47B',
	'20C3A97A-999E-4C43-B184-F6A5F39C9782',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τῶν Λειψάνων τῶν Ἁγίων',
	'483CFB0F-AB55-43DA-BBA2-A7145E57CBCE',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲛⲓⲗⲓⲯⲁⲛⲟⲛ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲟⲩⲁⲃ',
	'4E556400-4CC6-4923-A71A-26CDC0788F7B',
	'رَفْعُ الْبَخُورِ لِرُفَاتِ الْقِدِّيسِينَ',
	'E216A614-C3D7-478E-8569-2904EB48D3B0',
	'The Offering of Incense for the Relics of the Saints',
	'C6D9F1DA-2F6C-423D-9905-9E39BCE26AFA',
	'Die Darbringung des Weihrauchs für die Heiligtümer'
);

textTheOfferingOfIncenseForTheRelicsOfTheSaints.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseForTheRelicsOfTheSaints.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseForTheRelicsOfTheSaints.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseForTheRelicsOfTheSaints.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseForTheRelicsOfTheSaints.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheOfferingOfIncenseForTheRelicsOfTheSaints = registerNode<Basenode>({
	id: 'C224E13C-3B19-4E45-8B54-C9F3D6F0C758',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheRelicsOfTheSaints.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForThePatriarch = await makeMultilingualTextWithId(
	'90CFA5DD-E62E-4386-982C-3A29E066379C',
	'087121B1-2B91-44B7-935A-51E3E8E758CE',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Πατριάρχου',
	'94EBAA9F-1820-4DFE-AE16-D7AC9B0FC26C',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ',
	'B0DD1BFE-00C4-4FB2-9883-6CDB9616BF13',
	'رَفْعُ الْبَخُورِ لِلْبَطْرِيَرْكِ',
	'4A3B4535-98BB-4E36-A031-97DE14406807',
	'The Offering of Incense for the Patriarch',
	'629B8816-B6E7-4FA1-A90F-FF96DBEDF3EE',
	'Die Darbringung des Weihrauchs für den Patriarchen'
);

export const sectionTheOfferingOfIncenseForThePatriarch = registerNode<Basenode>({
	id: 'EF0273E0-4C32-42F2-87E9-0A4495A0FB9A',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForThePatriarch.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheMetropolitan = await makeMultilingualTextWithId(
	'E9E91906-99D3-4546-BC2E-2D34F84EB53F',
	'9251F9E5-7592-43E6-88E9-B888B9B3FBEF',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Μητροπολίτου',
	'28FB0C5D-E9F1-422F-9B18-1BA61457C0AD',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ',
	'F980C75D-F790-426B-BBB0-C16BA1B32CDD',
	'رَفْعُ الْبَخُورِ لِلْمُطْرَانِ',
	'B7D56BFA-C20F-43DF-A43F-302228B8D3C8',
	'The Offering of Incense for the Metropolitan',
	'66E933F0-5F0C-43BD-9161-8E648C5FE77E',
	'Die Darbringung des Weihrauchs für den Metropoliten'
);

export const sectionTheOfferingOfIncenseForTheMetropolitan = registerNode<Basenode>({
	id: '6446EAA4-1EEE-4C47-893A-D59A3ABF4436',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheMetropolitan.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheBishop = await makeMultilingualTextWithId(
	'08EE2036-A088-406D-A9DF-AEDBB547E170',
	'731F040F-B1D6-47E6-A813-41DD9E419E84',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Ἐπισκόπου',
	'5E0E43CC-8AFC-4274-82D0-7BB20721CFE4',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
	'5B69BA78-A68B-405D-BF82-0B40363D5314',
	'رَفْعُ الْبَخُورِ لِلْأُسْقُفِ',
	'7069E174-F7A5-44FE-8A8C-C9F5E46DD76D',
	'The Offering of Incense for the Bishop',
	'1E93D72C-CBFB-4C59-9248-6ED71F8C4AAB',
	'Die Darbringung des Weihrauchs für den Bischof'
);

export const sectionTheOfferingOfIncenseForTheBishop = registerNode<Basenode>({
	id: '5D121F89-9C1B-4E81-9758-9DEBDD4249AB',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheBishop.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheHegumenDuringTheLiturgy =
	await makeMultilingualTextWithId(
		'0921E296-3C33-42D5-B62B-E2C461D22A86',
		'579B0FBD-59B0-4E06-B367-4118639B48A1',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Ἡγουμένου κατὰ τὴν Λειτουργίαν',
		'210903E2-A592-4003-9364-EB4E876CBFF0',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ϧⲉⲛ ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ',
		'785A44F7-E556-48D7-AD10-0541B2E64C23',
		'رَفْعُ الْبَخُورِ لِلْقُمُّصِ أَثْنَاءَ الْقُدَّاسِ',
		'BB6F5785-7AA5-4A0A-97EF-67A5A7E6F7C1',
		'The Offering of Incense for the Hegumen during the Liturgy',
		'D3EBA537-7C97-4E63-B352-3DAB2715A7BC',
		'Die Darbringung des Weihrauchs für den Hegumen während der Liturgie'
	);

export const sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy = registerNode<Basenode>({
	id: '36ED33D3-7055-4E0A-8AFE-8216149FD54A',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForThePriestDuringTheLiturgy =
	await makeMultilingualTextWithId(
		'5AB53E53-5F78-494D-9AC9-02DFE088D6CF',
		'C7BD4061-1AD4-49F1-867D-AD0F9850326B',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Πρεσβυτέρου κατὰ τὴν Λειτουργίαν',
		'01DC9DF4-8C8A-4ACE-99E3-F7B3F2B8095E',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ϧⲉⲛ ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ',
		'F9C5E143-8B1E-4E9B-9F51-8C79C98349F9',
		'رَفْعُ الْبَخُورِ لِلْكَاهِنِ أَثْنَاءَ الْقُدَّاسِ',
		'FD39D8A3-0698-4612-A072-97016C5DA390',
		'The Offering of Incense for the Priest during the Liturgy',
		'CB58A6D3-B320-447F-BF48-DB1E9EA4A410',
		'Die Darbringung des Weihrauchs für den Priester während der Liturgie'
	);

export const sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy = registerNode<Basenode>({
	id: 'A51A11C5-D051-4C40-95EC-CD0C8BEFCAAA',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForThePriestDuringTheLiturgy.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForThePeopleDuringTheReadingOfThePaulineEpistle =
	await makeMultilingualTextWithId(
		'FD42D254-2F57-47BC-B44B-D87633964058',
		'CA45D4AC-725D-46FF-9CD4-113E732F7B9B',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ Λαοῦ κατὰ τὴν Ἀνάγνωσιν τῆς Ἐπιστολῆς τοῦ Παύλου',
		'FE31CDAA-56A6-43BB-9B5B-13CD70FFD411',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲡⲓⲗⲁⲟⲥ ϧⲉⲛ ⲡ̀ⲱϣ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
		'1108C116-CABF-44C8-A449-AC393D35FE23',
		'رَفْعُ الْبَخُورِ لِلشَّعْبِ أَثْنَاءَ قِرَاءَةِ الرِّسَالَةِ الْبُولُسِيَّةِ',
		'3AC5CA40-B4F3-4252-94FA-F0E38D616A6D',
		'The Offering of Incense for the People during the Reading of the Pauline Epistle',
		'A6EECED2-1A03-430C-817F-5B5D8EC80F3F',
		'Die Darbringung des Weihrauchs für das Volk während der Lesung des Paulinischen Briefes'
	);

export const sectionTheOfferingOfIncenseForThePeopleDuringTheReadingOfThePaulineEpistle =
	registerNode<Basenode>({
		id: 'DB0A75E0-FC56-44F0-A9E2-1EF6BBAED64E',
		users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textTheOfferingOfIncenseForThePeopleDuringTheReadingOfThePaulineEpistle.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheOfferingOfIncenseForTheCrucifiedLord = await makeMultilingualTextWithId(
	'867CDF42-A3DE-46B7-8047-27A0179D5E10',
	'EA5F6E39-6588-41BC-B510-A593518B352C',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τοῦ ἐσταυρωμένου Κυρίου',
	'5C89CC61-4C38-4E33-B45C-AC41D4048104',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ Ⲡ̀ϭⲟⲓⲥ ⲫⲏⲉⲧⲁⲩⲁϣϥ',
	'5D9E0FAB-B916-4E56-BD7E-3593F19C5987',
	'رَفْعُ الْبَخُورِ لِلرَّبِّ الْمَصْلُوبِ',
	'C25B575C-71E4-48EA-BAAF-61003654B68C',
	'The Offering of Incense for the Crucified Lord',
	'1E5FD1CE-B8C9-4197-BBCC-2C71D911351A',
	'Die Darbringung des Weihrauchs für den gekreuzigten Herrn'
);

export const sectionTheOfferingOfIncenseForTheCrucifiedLord = registerNode<Basenode>({
	id: '5AB4D980-8165-4B1E-A764-AF11B13AC1D4',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheCrucifiedLord.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForTheConfessionOfThePeople = await makeMultilingualTextWithId(
	'D2514E30-1A8B-4ED1-BFBE-520E3C68B819',
	'A246DD30-6687-4C30-BC27-CE7FADEAC27C',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ τῆς Ὁμολογίας τοῦ Λαοῦ',
	'22DCE261-2611-4D6C-BD2F-8A255116F9FF',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ϯⲟⲙⲟⲗⲟⲅⲓⲁ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ',
	'72AF51EC-B27A-4043-A8A5-573F3D96C682',
	'رَفْعُ الْبَخُورِ لِاعْتِرَافِ الشَّعْبِ',
	'ED5762AA-8AAC-4522-AA23-B8028FC9D0A0',
	'The Offering of Incense for the Confession of the People',
	'C2EA8508-AA86-433E-B544-D9F15CEB86A6',
	'Die Darbringung des Weihrauchs für das Bekenntnis des Volkes'
);

export const sectionTheOfferingOfIncenseForTheConfessionOfThePeople = registerNode<Basenode>({
	id: '9E80E720-50F2-4C8D-8010-E9FD3CF56E0B',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseForTheConfessionOfThePeople.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies =
	await makeMultilingualTextWithId(
		'0EE0EC5F-1B67-48F8-8670-18C89982AA2D',
		'2BCF7A49-E348-4BDD-BA5E-E5C6477591D0',
		'Ἡ Προσφορὰ τοῦ Θυμιάματος ὑπὲρ πάντων τῶν Ἡγουμένων καὶ τῶν Πρεσβυτέρων κατὰ τὴν Λειτουργίαν ἐπὶ τῆς θύρας τῶν Ἁγίων τῶν Ἁγίων',
		'2DBEEDD7-5EB6-4F02-8554-90FC1D462526',
		'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲑⲃⲉ ⲛⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ϧⲉⲛ ϯⲗⲓⲧⲟⲩⲣⲅⲓⲁ ϧⲁⲧⲉⲛ ⲡⲓⲣⲟ ⲛ̀ⲧⲉ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲟⲩⲁⲃ',
		'7813198E-72B1-4DBD-8B39-94BB16023C07',
		'رَفْعُ الْبَخُورِ لِجَمِيعِ الْقَمَامِصَةِ وَالْكَهَنَةِ أَثْنَاءَ الْقُدَّاسِ عِنْدَ عَتَبَةِ قُدْسِ الْأَقْدَاسِ',
		'A7EA10F5-9D0F-4C4B-840D-96EF35D88A1E',
		'The Offering of Incense for All the Hegumens and Priests during the Liturgy at the Threshold of the Holy of Holies',
		'26C89876-3961-41F3-BC89-5C6859DF4E37',
		'Die Darbringung des Weihrauchs für alle Hegumen und Priester während der Liturgie an der Schwelle des Allerheiligsten'
	);

export const sectionTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies =
	registerNode<Basenode>({
		id: '6017968E-F18F-404F-AD30-FF99E3789F84',
		users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textTheConclusionOfTheOfferingOfIncense = await makeMultilingualTextWithId(
	'3B074A34-A78A-4640-A558-05AB4EE4AED4',
	'E4DC8AFA-F4C6-4900-81EE-E1E340E18506',
	'Ἡ Λῆξις τῆς Προσφορᾶς τοῦ Θυμιάματος',
	'092BC0E6-8308-4E92-A785-5A6A3A7C2C03',
	'Ⲡⲓϫⲱⲕ ⲛ̀ⲧⲉ ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ',
	'158A218C-0B89-42C6-B50D-8D56E0C02F0B',
	'خِتَامُ رَفْعِ الْبَخُورِ',
	'57AF39D2-F26D-440A-900C-B2F4A332C8B5',
	'The Conclusion of the Offering of Incense',
	'A5748609-E201-48B8-ABAD-309E9DC55D77',
	'Der Abschluss der Darbringung des Weihrauchs'
);

export const sectionTheConclusionOfTheOfferingOfIncense = registerNode<Basenode>({
	id: 'C8144F44-89A1-4570-8BD6-9EF4D23162C5',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheConclusionOfTheOfferingOfIncense.id,
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
	'Ϯⲉⲓⲥⲁⲅⲱⲅⲏ ⲛ̀ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ',
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
		'Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'5267298B-78A8-4A9D-89A4-CB8BF989BF5B',
		'Ⲟⲩⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'13E073B0-27B1-4629-AA12-DE14D2BD20B9',
		'مَرَدٌّ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'962599CE-B128-49EE-81BB-5D217709AEBA',
		'A Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'A37CD2EF-6AF4-4EB4-9811-6876FD9EFF9C',
		'Eine Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder eines Bischofs'
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
		'Δευτέρα Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'A983AC25-5964-418E-A55E-7BA5DC16D238',
		'Ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'2D6C155A-E161-49DA-BD80-5B658B92853D',
		'مَرَدٌّ ثَانٍ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'BC3482D3-606E-4F76-952F-17776FDABEBB',
		'A Second Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'C03C028B-5242-4849-BBC6-BF450386C633',
		'Eine zweite Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder eines Bischofs'
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
		'Τρίτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'60DA9CA8-396A-4750-A580-76B3EAA55B27',
		'Ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'72FE8EE2-F187-435C-A7A8-40AB91F53F5F',
		'مَرَدٌّ ثَالِثٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'842BAC3B-585F-4981-9973-CBECD0C4B3ED',
		'A Third Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'7F984DAD-1D5A-4D21-9C65-3B781B178D48',
		'Eine dritte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder eines Bischofs'
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
		'Ὁ Ὕμνος τῶν Ἀρετῶν - Τετάρτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'100C0031-6013-49E7-9898-272771E61093',
		'Ⲡⲓϫⲱ ⲛ̀ⲛⲓⲁⲣⲉⲧⲏ - Ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'1CDF5FF6-447B-4B9F-9895-63A54AEA3D1C',
		'لَحْنُ الْفَضَائِلِ - مَرَدٌّ رَابِعٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'73EFCDF8-0F29-422A-9F65-574A5373B42C',
		'The Hymn of the Virtues - A Fourth Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'61341EC0-6906-45EC-A656-E0BACD9A575C',
		'Das Lied der Tugenden - Eine vierte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder eines Bischofs'
	);

export const sectionTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	registerNode<Basenode>({
		id: '00E759E4-B38C-4CEA-AAD6-592DD6B7EE51',
		users: [chapterTheReadingOfThePaulineEpistle.id],
		type: NodeType.Section,
		value: textTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id,
		valueType: ContentType.MultilingualText,
		children: []
	});

export const textAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop =
	await makeMultilingualTextWithId(
		'DBF1658A-EC88-4D4D-B650-9C7BFCF3F12C',
		'CAEB3048-85BC-4A63-9630-C9F3109804ED',
		'Πέμπτη Ἀπόκρισις τῆς Ἐπιστολῆς τοῦ Παύλου ἐν παρουσίᾳ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'FBAC2847-2F78-454F-9EC4-5A9614DA0FD6',
		'Ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ϯⲉⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲡⲁⲩⲗⲟⲥ ⲛⲁϩⲣⲉⲛ ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'154B87E7-E7C9-482C-AE19-DCC08315F799',
		'مَرَدٌّ خَامِسٌ لِلرِّسَالَةِ الْبُولُسِيَّةِ بِحُضُورِ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'CC132631-15C6-431C-B3F2-411BC0C02E81',
		'A Fifth Response to the Pauline Epistle in the Presence of a Patriarch, Metropolitan or Bishop',
		'33F9BCB5-6CFE-48DC-B3B9-34362032F4D3',
		'Eine fünfte Erwiderung des Paulinischen Briefes bei Anwesenheit eines Patriarchen, Metropoliten oder eines Bischofs'
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
	[sectionTheHymnOfTheVirtuesAFourthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionAFifthResponseToThePaulineEpistleInThePresenceOfAPatriarchMetropolitanOrBishop.id],
	[sectionTheTranslationOfTheReading.id]
];

partTheLiturgyOfTheWord.children = [
	[chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	[chapterTheHymnsBeforeTheReadingOfThePaulineEpistle.id],
	[chapterTheReadingOfThePaulineEpistle.id]
];
