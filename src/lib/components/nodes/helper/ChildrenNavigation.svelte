<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { select } from '$lib/states/helpers/selection.svelte';

	let { model }: { model: Basenode; selected?: number } = $props();
</script>

<section class="section">
	<div class="container">
		<nav class="panel">
			{#each model.children as alternatives, index}
				{#each alternatives as nodeId}
					<a class="panel-block" href={null} onclick={() => select(index)}>
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						<NodePreviewer id={nodeId} />
					</a>
				{/each}
			{/each}
		</nav>
	</div>
</section>
