<script lang="ts">
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import MenuNodeHead from '$lib/components/nodes/helper/MenuNodeHead.svelte';
	import SelectorNode from '$lib/components/nodes/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getCollectionForNodeType, subtypeOf } from '$lib/states/nodes.svelte';
	import { selection } from '$lib/states/selection.svelte';

	const { model }: { model: Basenode } = $props();

	const subtype = $derived(subtypeOf(model.type));
	const collection = $derived(getCollectionForNodeType(subtype));

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
	<MenuNodeHead {model} />
	<ChildrenMenu {model} />
{/if}
