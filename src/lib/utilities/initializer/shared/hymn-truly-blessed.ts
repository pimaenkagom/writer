import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithIdWithoutGreek } from '$lib/utilities/initializer/constructors';
import { registerNode } from '$lib/utilities/initializer/registry';

export const textTheHymnTrulyBlessed = await makeMultilingualTextWithIdWithoutGreek(
	'3C363325-291A-406C-B398-D020C8946AA3',
	'17D8B58B-28CF-4996-8682-05DD135C0683',
	'Ⲡⲓϫⲱ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ',
	'1FA3DDC8-BBE8-49C2-81CF-5AC82EFC52DD',
	'اللَّحْنُ مُبَارَكٌ أَنْتَ بِالْحَقِيقَةِ',
	'828F2C07-E798-458A-B60C-A47F3170E947',
	'The Hymn Blessed are You indeed',
	'9E819EBC-1B6F-4B62-AAAB-8F3F8BEEDCD4',
	'Das Lied Wahrlich gesegnet'
);

export const sectionTheHymnTrulyBlessed = registerNode<Basenode>({
	id: '77B05D26-AB37-4291-8B3F-9E871824594E',
	users: [],
	type: NodeType.Section,
	value: textTheHymnTrulyBlessed.id,
	valueType: ContentType.MultilingualText,
	children: []
});
