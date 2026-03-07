<script lang="ts">
	import SelectorNode from '$lib/components/nodes/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<SelectorNode {model} />
