<script lang="ts">
	import VisibilityNode from '$lib/components/nodes/VisibilityNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getCollectionForNodeType, subtypeOf } from '$lib/states/nodes.svelte';

	const { model, language }: { model: Basenode; language?: string } = $props();
	const childrenType = $derived(subtypeOf(model.nodeType));
	const collection = $derived(getCollectionForNodeType(childrenType));
	const children = $derived(
		model.children.map((alternatives) => alternatives.map((id) => collection.items[id]))
	);
</script>

{#each children as alternatives}
	{#each alternatives as child}
		<VisibilityNode model={child} {language} />
	{/each}
{/each}
