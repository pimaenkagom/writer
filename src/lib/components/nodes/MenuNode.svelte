<script lang="ts">
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import NodeHead from '$lib/components/nodes/helper/NodeHead.svelte';
	import SelectorNode from '$lib/components/nodes/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { selection } from '$lib/states/helpers/selection.svelte';
	import { getCollectionForType, subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	const subtype = $derived(subtypeOf(model.type));
	const collection = $derived(getCollectionForType(subtype));

	const selectedChildIndex = $derived(selection.value[subtype]);
	const childIsSelected = $derived(selectedChildIndex !== null);

	const selectedChildId = $derived(
		childIsSelected ? model.children[selectedChildIndex![0]][selectedChildIndex![1]] : null
	);
	const selectedChild = $derived(childIsSelected ? collection.items[selectedChildId!] : null);
</script>

{#if selectedChild}
	<SelectorNode model={selectedChild} />
{:else}
	<NodeHead {model} />
	<ChildrenMenu {model} />
{/if}
