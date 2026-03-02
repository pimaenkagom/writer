<script lang="ts">
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import DetectorNode from '$lib/components/nodes/helper/DetectorNode.svelte';
	import NodeHead from '$lib/components/nodes/helper/NodeHead.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { selection } from '$lib/states/helpers/selection.svelte';
	import { subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	const subtype = $derived(subtypeOf(model.type));

	let current = $derived(selection.value[subtype]);

	const childIsSelected = $derived(current !== null);
</script>

{#if current === null}
	<NodeHead {model} />
	<ChildrenMenu {model} />
{:else if model.children[current]}
	<DetectorNode nodeId={model.children[current]} />
{:else}
	{@const nodeId = model.children[current]}
	<p style="color:red">ERROR: nodeId is {String(nodeId)} at index {current}</p>
{/if}
