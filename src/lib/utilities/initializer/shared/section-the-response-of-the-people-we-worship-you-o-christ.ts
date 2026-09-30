import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithIdWithoutGreek } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheResponseOfThePeopleWeWorshipYouOChrist =
	await makeMultilingualTextWithIdWithoutGreek(
		'44B0C4C4-0B55-473B-AB20-391E2F33528F',
		'188CF048-E1A7-4E0E-85A9-E46F1128604D',
		'Ϯⲉⲣⲟⲩⲱ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ϫⲉ Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
		'32EF319D-7EA3-424E-BED0-F95F0CC53D3F',
		'مَرَدُّ الشَّعْبِ نَسْجُدُ لَكَ أَيُّهَا الْمَسِيحُ',
		'1FBA5052-0722-442A-ADD5-FAEBC9C82FE4',
		'The Response of the People We Worship You, O Christ',
		'25DD97A0-1DB6-4F74-9504-B04915EC5550',
		'Die Erwiderung des Volkes Wir beten dich an, o Christus'
	);

export const sectionTheResponseOfThePeopleWeWorshipYouOChrist = registerNode<Basenode>({
	id: '852E5B1F-E0BB-47F1-AFF2-BAF2D36BA7CE',
	users: [],
	type: NodeType.Section,
	value: textTheResponseOfThePeopleWeWorshipYouOChrist.id,
	valueType: ContentType.MultilingualText,
	children: []
});
