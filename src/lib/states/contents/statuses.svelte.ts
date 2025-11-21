import type { Status } from '$lib/models/contents/status.model';
import { Collection } from '$lib/models/helpers/collection.model.svelte';

export const statuses = new Collection<Status>('statuses');
