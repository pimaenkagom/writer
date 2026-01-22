<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<NodePreviewer id={model.id} />
