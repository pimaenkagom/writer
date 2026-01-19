<script lang="ts">
	import { getModelById } from '$lib/states/nodes/nodes.svelte';
	import EditWrapper from './EditWrapper.svelte';

	let { nodeId }: { nodeId: string } = $props();
	const model = $derived(getModelById(nodeId));
</script>

<EditWrapper {model} />
