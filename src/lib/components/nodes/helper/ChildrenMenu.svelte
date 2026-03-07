<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { select } from '$lib/states/helpers/selection.svelte';

	let { model }: { model: Basenode } = $props();
</script>

<section class="section">
	<div class="container">
		<nav class="panel">
			{#each model.children as nodeId, index}
				<a class="panel-block" href={null} onclick={() => select(index)}>
					<span class="panel-icon">
						<i class="fas fa-book" aria-hidden="true"></i>
					</span>
					<NodePreviewer id={nodeId} />
				</a>
			{/each}
		</nav>
	</div>
</section>
