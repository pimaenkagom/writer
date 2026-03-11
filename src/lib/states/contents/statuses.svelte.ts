import { Collection } from '$lib/models/collection.model.svelte';
import type { Status } from '$lib/models/contents/status.model';

export const statuses = new Collection<Status>('statuses');
