<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { selection } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import { tick } from 'svelte';
	import SlidesNodeHead from './helper/SlidesNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();

	const children = $derived(getChildnodes(model));

	const indexOfFirstChild = $derived(0);
	const indexOfLastChild = $derived(model.children.length - 1);

	let indexOfFirstVisibleChild = $state(0);
	let indexOfLastVisibleChild = $state(0);

	let windowHeight = $state(0);
	let clientHeight = $state(0);

	async function expand(direction: 'forward' | 'backward') {
		while (true) {
			await tick();
			await new Promise((r) => requestAnimationFrame(r));

			if (direction === 'forward') {
				if (clientHeight >= windowHeight || indexOfLastVisibleChild >= indexOfLastChild) break;
				indexOfLastVisibleChild++;
			} else {
				if (clientHeight >= windowHeight || indexOfFirstVisibleChild <= indexOfFirstChild) break;
				indexOfFirstVisibleChild--;
			}
		}
	}

	function forward() {
		if (indexOfLastVisibleChild === indexOfLastChild) {
			selection.next();
			indexOfFirstVisibleChild = indexOfFirstChild;
			indexOfLastVisibleChild = indexOfFirstChild;
		} else {
			indexOfFirstVisibleChild = indexOfLastVisibleChild + 1;
			indexOfLastVisibleChild = indexOfFirstVisibleChild;
		}
		expand('forward');
	}

	function backward() {
		if (indexOfFirstVisibleChild === indexOfFirstChild) {
			selection.previous();
			indexOfFirstVisibleChild = indexOfLastChild;
			indexOfLastVisibleChild = indexOfLastChild;
		} else {
			indexOfLastVisibleChild = indexOfFirstVisibleChild - 1;
			indexOfFirstVisibleChild = indexOfLastVisibleChild;
		}
		expand('backward');
	}
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div bind:clientHeight>
	<SlidesNodeHead {model} />
	<section>
		<div class="container is-flex">
			<button class="button" title="Previous" onclick={backward}>
				<span class="icon">
					<i class="fa-solid fa-arrow-left"></i>
				</span>
			</button>

			<div class="is-flex-grow-1"></div>
			{indexOfFirstChild},{indexOfFirstVisibleChild},{indexOfLastVisibleChild},{indexOfLastChild}, {clientHeight},
			{windowHeight},{innerHeight}
			<div class="is-flex-grow-1"></div>

			<button class="button" title="Next" onclick={forward}>
				<span class="icon">
					<i class="fa-solid fa-arrow-right"></i>
				</span>
			</button>
		</div>
	</section>
	<section class="section">
		<div class="container">
			{#each children as alternatives, index}
				{#if index >= indexOfFirstVisibleChild && index <= indexOfLastVisibleChild}
					{#each alternatives as child}
						<VisibilityNode model={child} />
					{/each}
				{/if}
			{/each}
		</div>
	</section>
</div>
