<script lang="ts">
	import { getModelById } from '$lib/states/nodes/nodes.svelte';
	import Selector from './Selector.svelte';

	let { nodeId }: { nodeId: string } = $props();
	let id = $derived(nodeId);
	let idSnapshot = $state.snapshot(id);
	let model = getModelById(idSnapshot);
</script>

<Selector {model} />
