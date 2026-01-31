<script lang="ts">
	import Back from '$lib/components/helpers/Back.svelte';
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import Detector from '$lib/components/nodes/helper/Detector.svelte';
	import NodeContent from '$lib/components/nodes/helper/NodeContent.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import { subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	const subtype = $derived(subtypeOf(model.type));

	let current = $derived(+settings.value[subtype].current);
</script>

<NodeContent {model} />
{current}
{#if current === 0}
	<ChildrenMenu {model} />
{:else}
	{@const nodeId = model.children[current - 1]}

	{#if model.children[current - 1]}
		<Back />
		<Detector nodeId={model.children[current - 1]} />
	{:else}
		<p style="color:red">ERROR: nodeId is {String(nodeId)} at index {current - 1}</p>
	{/if}
{/if}
