import type { path } from '$lib/models/helpers/path.model';

// TODO Convert maybe to a record
export interface MetaData {
	logo: path;
	showTitle: boolean;
	visibility: string[]; // TODO Create visibility tags.
	appearance: string[]; //  TODO Create appearance tags.
}

// TODO Maybe store visibility rules in db
