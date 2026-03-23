<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import MenuNodeHead from './helper/MenuNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();
	const children = $derived(getChildnodes(model));
</script>

<MenuNodeHead {model} />
<section class="section">
	<div class="container">
		{#each children as alternatives}
			{#each alternatives as child}
				<VisibilityNode model={child} />
			{/each}
		{/each}
	</div>
</section>
