<script lang="ts">
	import SelectorNode from '$lib/components/nodes/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';

	const { model, language }: { model: Basenode; language?: string } = $props();
</script>

<SelectorNode {model} {language} />
