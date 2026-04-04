<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { subtypeOf } from '$lib/states/nodes.svelte';
	import { selection } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import SlidesNodeHead from './helper/SlidesNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();

	const children = $derived(getChildnodes(model));
	const subtype = $derived(subtypeOf(model.type));
	const selectedChildIndex = $derived(selection.indices[subtype]);

	let visibleCount = $state(0);
	let clientHeight = $state(0);

	let start = $derived(selectedChildIndex?.[0] ?? 0);
	let end = $state(0);

	function forward() {
		throw new Error('Function not implemented.');
	}

	function backward() {
		throw new Error('Function not implemented.');
	}
</script>

<button class="button" title="Previous" onclick={forward}>
	<span class="icon">
		<i class="fa-solid fa-arrow-left"></i>
	</span>
</button>

<button class="button" title="Next" onclick={backward}>
	<span class="icon">
		<i class="fa-solid fa-arrow-right"></i>
	</span>
</button>

<div bind:clientHeight>
	<SlidesNodeHead {model} />
	{start},{end}
	<section class="section">
		<div class="container">
			{#each children as alternatives, index}
				{#if index < start || index > end}
					{#each alternatives as child}
						<VisibilityNode model={child} />
					{/each}
				{/if}
			{/each}
		</div>
	</section>
</div>
