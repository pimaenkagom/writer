<script lang="ts">
	import AddNewNode from '$lib/components/nodes/helper/AddNewNode.svelte';
	import NodeViewer from '$lib/components/nodes/helper/NodeViewer.svelte';
	import type { NodeType } from '$lib/models/node-type.model';
	import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
	import { getCollectionForNodeType } from '$lib/states/nodes.svelte';

	const { nodeType, isSelected }: { nodeType: NodeType; isSelected: (id: string) => void } =
		$props();

	const nodes = $derived(getCollectionForNodeType(nodeType).values);
	let filter = $state('');

	const filtered = $derived(
		nodes.filter((node) => {
			const search = filter.toLowerCase();
			return (
				node.id.toLowerCase().includes(search) ||
				node.content.toLowerCase().includes(search) ||
				Object.values(multilingualTexts.items[node.content].texts).some((t) =>
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
			<div class="column is-narrow">
				<div class="buttons is-right">
					<AddNewNode {nodeType} />
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section">
	<div class="container">
		{#each filtered as node}
			<div class="media is-align-items-center">
				<div class="media-content"><NodeViewer model={node} /></div>
				<div class="media-right">
					<button class="button" title="Select" onclick={() => isSelected(node.id)}>
						<span class="icon is-small">
							<i class="fa-solid fa-arrow-right"></i>
						</span>
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
