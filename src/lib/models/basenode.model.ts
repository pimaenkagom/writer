import type { ContentType } from '$lib/models/content-type.model';
import type { id } from '$lib/models/helpers/id.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';
import type { MetaData } from '$lib/models/meta-data.model';
import type { NodeType } from '$lib/models/node-type.model';

export interface Basenode extends Identifiable {
	readonly id: id;
	users: id[];
	type: NodeType;
	value: id;
	valueType: ContentType;
	children: id[][];
	meta?: MetaData;
	// TODO Add level, specific types, footnote and meta data
}
