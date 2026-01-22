<script lang="ts">
	import AddNewButton from '$lib/components/contents/mulltilinual-text/AddNewButton.svelte';
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getCollectionForType, subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const {
		node,
		index,
		isSelected
	}: { node: Basenode; index: number; isSelected: (id: string) => void } = $props();

	const nodes = $derived(getCollectionForType(subtypeOf(node.type)).values);
	let filter = $state('');

	const filtered = $derived(
		nodes.filter((node) => {
			const search = filter.toLowerCase();
			return (
				node.id.toLowerCase().includes(search) ||
				node.value.toLowerCase().includes(search) ||
				Object.values(multilingualTexts.items[node.value].texts).some((t) =>
					t.value.toLowerCase().includes(search)
				)
			);
		})
	);

	function clearFilter() {
		filter = '';
	}
</script>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
				<h1 class="title">Writer</h1>
			</div>
			<div class="column">
				<div class="buttons is-right">
					<AddNewButton />
				</div>
			</div>
		</div>
		<div class="field has-addons">
			<div class="control has-icons-left is-expanded">
				<span class="icon is-small is-left">
					<i class="fa-solid fa-filter"></i>
				</span>
				<input class="input" type="text" placeholder="Filter" bind:value={filter} />
			</div>
			<div class="control">
				<button class="button" aria-label="Clear filter" onclick={clearFilter}>
					<span class="icon">
						<i class="fa-solid fa-times"></i>
					</span>
				</button>
			</div>
		</div>
	</div>
</section>

{#each filtered as node}
	<article class="media is-align-items-center">
		<div class="media-left"></div>
		<div class="media-content"><NodePreviewer id={node.id} /></div>
		<div class="media-right">
			<button class="button" title="Select" onclick={() => isSelected(node.id)}>
				<span class="icon is-small">
					<i class="fa-solid fa-arrow-right"></i>
				</span>
			</button>
		</div>
	</article>
{/each}
