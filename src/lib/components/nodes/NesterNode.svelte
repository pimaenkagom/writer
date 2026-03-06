<script lang="ts">
	import MenuNode from '$lib/components/nodes/MenuNode.svelte';
	import ScrollNode from '$lib/components/nodes/ScrollNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getCurrentNesting, getNesting } from '$lib/states/helpers/nesting.svelte';

	let { model }: { model: Basenode } = $props();

	const isNested = $state.snapshot(getCurrentNesting() < getNesting());
</script>

{#if isNested}
	<MenuNode {model} />
{:else}
	<ScrollNode {model} />
{/if}
