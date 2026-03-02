<script lang="ts">
	import SelectorNode from '$lib/components/nodes/helper/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<SelectorNode {model} />
