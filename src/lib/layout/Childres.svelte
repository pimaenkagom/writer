<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getCollectionForType } from '$lib/states/nodes/nodes.svelte';
	import Clause from './Clause.svelte';

	let { model, language }: { model: Basenode; language: string } = $props();
</script>

{#each model.children as nodeId}
	{#each model.childrenTypes as type}
		{#if Object.keys(getCollectionForType(type).items).includes(nodeId)}
			<Clause model={getCollectionForType(type).items[nodeId]} {language} />
		{/if}
	{/each}
{/each}
