<script lang="ts">
	import { getModelById } from '$lib/states/nodes/nodes.svelte';
	import Selector from './Selector.svelte';

	let { nodeId }: { nodeId: string } = $props();
	let model = getModelById(nodeId);
</script>

<Selector {model} />
