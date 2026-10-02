import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnAStarRoseInTheEast = await makeMultilingualTextWithId(
	'6496E03C-D85D-4E8C-BC4B-CB0819342B32',
	'843C7546-E4C6-4ED9-A343-ADFA9E7AB7E6',
	'Ὁ Ὕμνος Ἀστὴρ ἀνέτειλεν ἐν τῇ ἀνατολῇ',
	'FA8ECB39-E550-45EC-B2E3-245E231E6E25',
	'Ⲡⲓϫⲱ ϫⲉ Ⲟⲩⲥⲓⲟⲩ ⲁϥϣⲁⲓ ϧⲉⲛ ⲛⲓⲙⲁⲛϣⲁⲓ',
	'C84879C6-0D79-4D64-81B5-8D9CB973B2B7',
	'اللَّحْنُ أَشْرَقَ نَجْمٌ فِي الْمَشْرِقِ',
	'C9AE5821-EBCC-4AAD-84DA-A2B2CBE7C3E2',
	'The Hymn A Star Rose in the East',
	'766B0A71-1571-4DC2-9ECE-34D558EE9821',
	'Das Lied Ein Stern ging im Osten auf'
);

export const sectionTheHymnAStarRoseInTheEast = registerNode<Basenode>({
	id: 'A0943273-10C6-4363-9FD9-D1D86D26BCDB',
	users: [],
	type: NodeType.Section,
	value: textTheHymnAStarRoseInTheEast.id,
	valueType: ContentType.MultilingualText,
	children: []
});
