<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { select } from '$lib/states/helpers/selection.svelte';

	let { model }: { model: Basenode; selected?: number } = $props();
</script>

<section class="section">
	<div class="container">
		<div class="fixed-grid">
			<div class="grid">
				{#each model.children as nodeId, index}
					<button type="button" class="cell" onclick={() => select(index)}>
						<div class="box">
							<NodePreviewer id={nodeId} />
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
