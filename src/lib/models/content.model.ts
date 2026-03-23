import type { ContentType } from '$lib/models/content-type.model';
import type { id } from '$lib/models/helpers/id.model';
import type { Identifiable } from '$lib/models/helpers/identifiable.model';

export interface Content extends Identifiable {
	readonly id: id;
	users: id[];
	value: id;
	type: ContentType;
}
