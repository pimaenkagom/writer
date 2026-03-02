<script lang="ts">
	import SelectorNode from '$lib/components/nodes/helper/SelectorNode.svelte';
	import { getModelById } from '$lib/states/nodes/nodes.svelte';

	let { nodeId }: { nodeId: string } = $props();
	const model = $derived(getModelById(nodeId));
</script>

<SelectorNode {model} />
