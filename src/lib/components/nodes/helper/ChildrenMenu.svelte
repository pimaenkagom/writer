<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { select } from '$lib/states/helpers/selection.svelte';

	let { model }: { model: Basenode; selected?: number } = $props();
</script>

<section class="section">
	<div class="container">
		{#each model.children as nodeId, index}
			<div class="media">
				<div class="media-left"></div>
				<div class="media-content">
					<button type="button" class="" onclick={() => select(index)}>
						<NodePreviewer id={nodeId} />
					</button>
				</div>
				<div class="media-right"></div>
			</div>
		{/each}
	</div>
</section>
