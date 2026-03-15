<script lang="ts">
	import VisibilityNode from '$lib/components/nodes/VisibilityNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getChildnodes } from '$lib/utilities/nodes/children';

	const { model, language }: { model: Basenode; language?: string } = $props();
	const children = $derived(getChildnodes(model));
</script>

{#each children as alternatives}
	{#each alternatives as child}
		<VisibilityNode model={child} {language} />
	{/each}
{/each}
