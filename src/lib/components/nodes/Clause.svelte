<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Clause from '$lib/components/nodes/Clause.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getCollectionForType } from '$lib/states/nodes/nodes.svelte';

	let { model, language }: { model: Basenode; language: string } = $props();
</script>

<Text model={multilingualTexts.items[model.value].texts[language]} />
{#each model.children as nodeId}
	{#each model.childrenTypes as type}
		{#if Object.keys(getCollectionForType(type).items).includes(nodeId)}
			<Clause model={getCollectionForType(type).items[nodeId]} {language} />
		{/if}
	{/each}
	<!-- <Clause model={node} {language} /> -->
{/each}
