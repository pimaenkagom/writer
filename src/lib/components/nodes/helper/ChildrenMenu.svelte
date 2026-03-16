<script lang="ts">
	import NodeViewer from '$lib/components/nodes/helper/NodeViewer.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { select } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';

	const { model }: { model: Basenode } = $props();
	const children = $derived(getChildnodes(model));
</script>

<section class="section">
	<div class="container">
		<nav class="panel">
			{#each children as alternatives, index}
				{#each alternatives as child}
					<a class="panel-block" href={null} onclick={() => select(index)}>
						<span class="panel-icon">
							<i class="fas fa-book" aria-hidden="true"></i>
						</span>
						<NodeViewer model={child} />
					</a>
				{/each}
			{/each}
		</nav>
	</div>
</section>
