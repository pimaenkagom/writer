<script lang="ts">
	import Back from '$lib/components/helpers/Back.svelte';
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import Detector from '$lib/components/nodes/helper/Detector.svelte';
	import NodeContent from '$lib/components/nodes/helper/NodeContent.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { selection } from '$lib/states/helpers/selection.svelte';
	import { subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	const subtype = $derived(subtypeOf(model.type));

	let current = $derived(selection.value[subtype]);

	const childIsSelected = $derived(current !== null);
</script>

<NodeContent {model} />
{#if current === null}
	<ChildrenMenu {model} />
{:else}
	<Back />
	{#if model.children[current]}
		<Detector nodeId={model.children[current]} />
	{:else}
		{@const nodeId = model.children[current]}
		<p style="color:red">ERROR: nodeId is {String(nodeId)} at index {current}</p>
	{/if}
{/if}
