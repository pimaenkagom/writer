import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

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

export const textTheOfferingOfIncenseInTheSecondChoir = await makeMultilingualTextWithId(
	'1FF14D78-08DD-49BF-8A50-00D4BE99F00D',
	'7DB654D5-9BF0-4A75-956E-D7418BA61DE5',
	'Ἡ Προσφορὰ τοῦ Θυμιάματος ἐν τῷ δευτέρῳ Χορῷ',
	'276704F3-BFCE-4404-9860-A4C59D409929',
	'Ⲡⲓⲧⲁϩⲟ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϧⲉⲛ ⲡⲓⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲭⲟⲣⲟⲥ',
	'18786D41-EA7A-4198-96A5-06A6E049156C',
	'رَفْعُ الْبَخُورِ فِي الْخُورُسِ الثَّانِي',
	'4BAC8F1F-4F2F-4558-B9D7-C2776FACA1AF',
	'The Offering of Incense in the Second Choir',
	'FE78894F-E853-40F7-B7D2-E09FC478C351',
	'Die Darbringung des Weihrauchs im zweiten Chor'
);

textTheOfferingOfIncenseInTheSecondChoir.texts.ancient_greek.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseInTheSecondChoir.texts.coptic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseInTheSecondChoir.texts.arabic.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseInTheSecondChoir.texts.english.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';
textTheOfferingOfIncenseInTheSecondChoir.texts.german.status =
	'4ACF926E-370D-4D90-B642-530FA1A81E24';

export const sectionTheOfferingOfIncenseInTheSecondChoir = registerNode<Basenode>({
	id: '090E5F56-C83A-43F4-8049-7F5622371C19',
	users: [chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id],
	type: NodeType.Section,
	value: textTheOfferingOfIncenseInTheSecondChoir.id,
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
	[sectionTheOfferingOfIncenseInTheSecondChoir.id],
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
	[sectionTheOfferingOfIncenseInTheSecondChoir.id],
	[sectionTheOfferingOfIncenseForTheGospel.id],
	[sectionTheOfferingOfIncenseForTheRelicsOfTheSaints.id],
	[sectionTheOfferingOfIncenseForThePatriarch.id],
	[sectionTheOfferingOfIncenseForTheMetropolitan.id],
	[sectionTheOfferingOfIncenseForTheBishop.id],
	[sectionTheOfferingOfIncenseForTheHegumenDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForThePriestDuringTheLiturgy.id],
	[sectionTheOfferingOfIncenseForAllHegumensAndPriestsAtTheThresholdOfTheHolyOfHolies.id],
	[sectionTheConclusionOfTheOfferingOfIncense.id]
];

partTheLiturgyOfTheWord.children = [
	[chapterTheOfferingOfIncenseBeforeAndDuringTheReadingOfThePaulineEpistle.id]
];
