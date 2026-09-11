import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { bookTheLiturgyAccordingToBasil } from '$lib/utilities/initializer/books';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';
import { sectionTheHymnTrulyBlessed } from '$lib/utilities/initializer/shared/hymn-truly-blessed';

export const textTheReceptionOfAPatriarchMetropolitanOrBishop = await makeMultilingualTextWithId(
	'3584475F-391D-4E1E-9782-216AAB172CDA',
	'5B2C231E-6432-40CE-8323-E9939AE3E933',
	'Ἡ Ὑποδοχὴ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
	'B7CB326E-EA15-4C48-93DC-34F114328B09',
	'Ⲡⲓϣⲱⲡ ⲉ̀ⲣⲟϥ ⲛ̀ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
	'2B1843E0-AFC4-48AB-9E86-F4D309BFBDF9',
	'اِسْتِقْبَالُ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
	'CCC4C56F-D15E-44A9-83E4-54BF1047389C',
	'The Reception of a Patriarch, Metropolitan or Bishop',
	'255C6742-5CC4-4365-AE59-8DFCCAB103DD',
	'Der Empfang eines Patriarchen, Metropoliten oder Bischofs'
);

export const partTheReceptionOfAPatriarchMetropolitanOrBishop = registerNode<Basenode>({
	id: 'F5A6BE5C-A420-4B8B-A601-C9040F169736',
	users: [bookTheLiturgyAccordingToBasil.id],
	type: NodeType.Part,
	value: textTheReceptionOfAPatriarchMetropolitanOrBishop.id,
	valueType: ContentType.MultilingualText,
	children: [[]]
});

bookTheLiturgyAccordingToBasil.children = [
	...bookTheLiturgyAccordingToBasil.children,
	[partTheReceptionOfAPatriarchMetropolitanOrBishop.id]
];

export const textTheReceptionOfAPatriarchMetropolitanOrBishopChapter =
	await makeMultilingualTextWithId(
		'4EAF35E7-AE5A-4AAB-8B68-52CB7B505A63',
		'9C6695CC-DFAC-40B9-AE1E-66E7A9D86211',
		'Ἡ Ὑποδοχὴ Πατριάρχου, Μητροπολίτου, ἢ Ἐπισκόπου',
		'C6888AE9-B537-40CE-90A8-C395E1A5D46E',
		'Ⲡⲓϣⲱⲡ ⲉ̀ⲣⲟϥ ⲛ̀ⲟⲩⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲓⲉ ⲟⲩⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲓⲉ ⲟⲩⲉⲡⲓⲥⲕⲟⲡⲟⲥ',
		'33E38566-0D8D-4F19-856E-3A9DAB6CA473',
		'اِسْتِقْبَالُ بَطْرِيَرْكٍ أَوْ مُطْرَانٍ أَوْ أُسْقُفٍ',
		'836A940D-DD3E-425D-A341-97154A7CE461',
		'The Reception of a Patriarch, Metropolitan or Bishop',
		'D5A4C88A-B5F4-4809-B74A-4AD9F1583EF4',
		'Der Empfang eines Patriarchen, Metropoliten oder Bischofs'
	);

export const chapterTheReceptionOfAPatriarchMetropolitanOrBishop = registerNode<Basenode>({
	id: '14723A09-B96D-4BA4-B5C9-3D94BC3B02FA',
	users: [partTheReceptionOfAPatriarchMetropolitanOrBishop.id],
	type: NodeType.Chapter,
	value: textTheReceptionOfAPatriarchMetropolitanOrBishopChapter.id,
	valueType: ContentType.MultilingualText,
	children: []
});

partTheReceptionOfAPatriarchMetropolitanOrBishop.children = [
	[chapterTheReceptionOfAPatriarchMetropolitanOrBishop.id]
];

export const textTheHymnChristIsRisen = await makeMultilingualTextWithId(
	'6A561924-5D81-4220-A611-F322C1D0A59C',
	'52255CEC-1792-456A-8B9D-F0DC18275522',
	'Ὁ Ὕμνος Χριστὸς Ἀνέστη',
	'4A91B258-3B59-47F9-A725-34A944E7896D',
	'Ⲡⲓϫⲱ ϫⲉ Ⲭⲣⲓⲥⲧⲟⲥ ⲁⲛⲉⲥⲧⲏ',
	'41FC44BF-1D8B-47F4-9068-044142EC3EA1',
	'اللَّحْنُ الْمَسِيحُ قَامَ',
	'BA7B8609-4847-4804-80E7-4E04795C8721',
	'The Hymn Christ Is Risen',
	'8626B8A1-9EC7-423F-B65C-9D693DDF8201',
	'Das Lied Christus ist auferstanden'
);

export const sectionTheHymnChristIsRisen = registerNode<Basenode>({
	id: 'C5127270-E3EB-4447-9665-1841A870B6EB',
	users: [chapterTheReceptionOfAPatriarchMetropolitanOrBishop.id],
	type: NodeType.Section,
	value: textTheHymnChristIsRisen.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnChristHasAscended = await makeMultilingualTextWithId(
	'8C59D05F-B09F-4DE1-A1F3-A6811B4ABC43',
	'0F554AE0-AE5F-469A-AA45-F2016296E632',
	'Ὁ Ὕμνος Χριστὸς Ἀνελήφθη',
	'8A576AC4-E64C-4961-9571-D87F92977437',
	'Ⲡⲓϫⲱ ϫⲉ Ⲭⲣⲓⲥⲧⲟⲥ ⲁⲛⲁⲗⲏⲯⲓⲛ',
	'9778D508-21C9-4300-BEA0-E8C349164E6E',
	'اللَّحْنُ الْمَسِيحُ صَعِدَ',
	'3C193BD3-ED4A-432E-920A-9FAC0A40BCAB',
	'The Hymn Christ Has Ascended',
	'0A18CF0E-C241-4793-AE7F-56B36178D26A',
	'Das Lied Christus ist aufgefahren'
);

export const sectionTheHymnChristHasAscended = registerNode<Basenode>({
	id: 'B6D44DC2-500F-45E3-8233-5C34FCFEAF43',
	users: [chapterTheReceptionOfAPatriarchMetropolitanOrBishop.id],
	type: NodeType.Section,
	value: textTheHymnChristHasAscended.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnBlessedIsHeWhoComesInTheNameOfTheLord = await makeMultilingualTextWithId(
	'F0F767C4-6D47-4137-B7B2-DB123D57755C',
	'2DB7E242-191A-4AF3-99A4-7BA3365F0E0C',
	'Ὁ Ὕμνος Εὐλογημένος ὁ ἐρχόμενος ἐν ὀνόματι Κυρίου',
	'7DA68FD0-5957-4F81-9C38-B4C1406BFC7D',
	'Ⲡⲓϫⲱ ϫⲉ Ⲉⲩⲗⲟⲅⲏⲙⲉⲛⲟⲥ ⲟ ⲉⲣⲭⲟⲙⲉⲛⲟⲥ ⲉⲛ ⲟⲛⲟⲙⲁⲧⲓ Ⲕⲩⲣⲓⲟⲩ',
	'71F5C20D-698F-41E2-8706-F6F3238F9CA4',
	'اللَّحْنُ مُبَارَكٌ الآتِي بِاسْمِ الرَّبِّ',
	'B2D7D844-1BB6-4C1E-9C73-8E7BD6D492A0',
	'The Hymn Blessed Is He Who Comes in the Name of the Lord',
	'8A554695-81F0-49C1-9528-3F1F9C4C824A',
	'Das Lied Gesegnet sei er, der kommt im Namen des Herrn'
);

export const sectionTheHymnBlessedIsHeWhoComesInTheNameOfTheLord = registerNode<Basenode>({
	id: 'CD218E32-811B-4E80-9E23-4DA2EFB56588',
	users: [chapterTheReceptionOfAPatriarchMetropolitanOrBishop.id],
	type: NodeType.Section,
	value: textTheHymnBlessedIsHeWhoComesInTheNameOfTheLord.id,
	valueType: ContentType.MultilingualText,
	children: []
});

export const textTheHymnHowBeautifulThatYouHaveComeToday = await makeMultilingualTextWithId(
	'18E303B8-F21D-42E2-BC2A-580B04006D20',
	'A75FF9C6-44D2-4D11-8AC8-02A1DEC7E52F',
	'Ὡς Ὡραῖον ὅτι Ἦλθες Σήμερον',
	'E8F3FEB9-26CE-458F-9FC3-D81F78658CF9',
	'Ⲡⲓϫⲱ ϫⲉ Ⲕⲁⲗⲱⲥ ⲁⲕⲓ̀ ϣⲁⲣⲟⲛ ⲛ̀ⲫⲟⲟⲩ',
	'7BE7CA96-35A2-4805-862D-9C1C1066C52C',
	'اللَّحْنُ مَا أَجْمَلَ أَنْ أَتَيْتَ الْيَوْمَ',
	'C5AAF25F-0BBE-49CE-96D7-BC4D241A6C3D',
	'The Hymn How Beautiful That You Have Come Today',
	'44AE8A86-FF93-4A85-A6E8-BCAB8CA11930',
	'Das Lied Wie schön, dass du heute gekommen bist'
);

export const sectionTheHymnHowBeautifulThatYouHaveComeToday = registerNode<Basenode>({
	id: 'F8655B24-B2C7-4C3A-AFA9-85AC6BAF7F0D',
	users: [chapterTheReceptionOfAPatriarchMetropolitanOrBishop.id],
	type: NodeType.Section,
	value: textTheHymnHowBeautifulThatYouHaveComeToday.id,
	valueType: ContentType.MultilingualText,
	children: []
});

chapterTheReceptionOfAPatriarchMetropolitanOrBishop.children = [
	[sectionTheHymnChristIsRisen.id],
	[sectionTheHymnChristHasAscended.id],
	[sectionTheHymnBlessedIsHeWhoComesInTheNameOfTheLord.id],
	[sectionTheHymnTrulyBlessed.id],
	[sectionTheHymnHowBeautifulThatYouHaveComeToday.id]
];
