import type { Basenode } from '$lib/models/basenode.model';
import { ContentType } from '$lib/models/content-type.model';
import { NodeType } from '$lib/models/node-type.model';
import { makeMultilingualTextWithId } from '$lib/utilities/initializer/constructors';

export const textTheCallToPrayer = await makeMultilingualTextWithId(
	'36C2A70F-8125-4452-88F2-EA4C1914C6B5',
	'79B83BF6-2EA9-4FA1-ABD0-956EE9FC5DD9',
	'Ἡ Πρόσκλησις εἰς τὴν Προσευχήν',
	'3B1F7D64-1332-4845-9686-8D5C206FB0F0',
	'Ⲡⲓⲑⲱϩⲉⲙ ⲉ̀ⲡⲓϣ̀ⲗⲏⲗ',
	'9F99B7E8-F64E-4927-83A0-88452D6BEF8A',
	'اَلدَّعْوَةُ إِلَى الصَّلاَةِ',
	'0DB185D5-E84A-434A-B986-C88035FAEEBC',
	'The Call to Prayer',
	'DB4EB9F2-A005-46B6-A7C1-13D7BBEF4CC1',
	'Der Aufruf zum Gebet'
);

export const sectionTheCallToPrayer: Basenode = {
	id: 'CCB6C1FC-9A77-4018-98A9-FF45C0DC3D9B',
	users: [],
	type: NodeType.Section,
	value: textTheCallToPrayer.id,
	valueType: ContentType.MultilingualText,
	children: []
};
