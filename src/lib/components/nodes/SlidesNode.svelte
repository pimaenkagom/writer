<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { subtypeOf } from '$lib/states/nodes.svelte';
	import { next, previous, select, selection } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import { onMount, tick, untrack } from 'svelte';
	import { innerHeight } from 'svelte/reactivity/window';
	import SlidesNodeHead from './helper/SlidesNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();

	const children = $derived(getChildnodes(model));
	const subtype = $derived(subtypeOf(model.type));
	const selectedChildIndex = $derived(selection.value[subtype]);
	const childIsSelected = $derived(selectedChildIndex !== null);

	let visibleCount = $state(0);
	let clientHeight = $state(0);

	let start = $derived(selectedChildIndex?.[0] ?? 0);
	let end = $state(0);

	const visibileChildren = $derived(end - start);

	onMount(() => select(0));

	$effect(() => {
		const triggerStart = start;
		const triggerLength = children.length;
		const triggerHeight = innerHeight.current;

		untrack(async () => {
			end = triggerStart;
			await tick();
			while (
				end < triggerLength - 1 &&
				document.documentElement.scrollHeight <= (triggerHeight ?? 0)
			) {
				end++;
				await tick();
			}
			if (document.documentElement.scrollHeight > (triggerHeight ?? 0) && end > triggerStart) {
				end--;
			}
		});
	});

	$effect(() => {
		if (childIsSelected === null) {
			select(0);
		}
	});
</script>

<button class="button" title="Previous" onclick={() => previous()}>
	<span class="icon">
		<i class="fa-solid fa-arrow-left"></i>
	</span>
</button>

<button class="button" title="Next" onclick={() => next(visibileChildren + 1)}>
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
				<div class:is-hidden={index < start || index > end}>
					{#if true || index < visibleCount}
						{#each alternatives as child}
							<VisibilityNode model={child} />
						{/each}
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.is-hidden {
		display: none;
	}
</style>
