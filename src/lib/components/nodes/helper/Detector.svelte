<script lang="ts">
	import EditWrapper from '$lib/components/nodes/helper/EditWrapper.svelte';
	import { getModelById } from '$lib/states/nodes/nodes.svelte';

	let { nodeId }: { nodeId: string } = $props();
	const model = $derived(getModelById(nodeId));
</script>

<EditWrapper {model} />
