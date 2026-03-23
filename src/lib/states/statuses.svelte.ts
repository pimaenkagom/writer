import { Collection } from '$lib/models/collection.model.svelte';
import type { Status } from '$lib/models/status.model';

export const statuses = new Collection<Status>('statuses');
