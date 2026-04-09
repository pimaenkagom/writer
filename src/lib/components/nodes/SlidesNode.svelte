<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { selection } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import SlidesNodeHead from './helper/SlidesNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();

	const children = $derived(getChildnodes(model));

	const indexOfFirstChild = $derived(0);
	const indexOfLastChild = $derived(model.children.length - 1);

	let indexOfFirstVisibleChild = $state(0);
	let indexOfLastVisibleChild = $state(0);

	let clientHeight = $state(0);

	function forward() {
		if (indexOfLastVisibleChild === indexOfLastChild) {
			selection.next();
		} else {
			indexOfFirstVisibleChild = indexOfLastVisibleChild + 1;
			indexOfLastVisibleChild = indexOfFirstVisibleChild;
		}
	}

	function backward() {
		if (indexOfFirstVisibleChild === indexOfFirstChild) {
			selection.previous();
		} else {
			indexOfFirstVisibleChild = indexOfLastVisibleChild - 1;
			indexOfLastVisibleChild = indexOfFirstVisibleChild;
		}
	}
</script>

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
