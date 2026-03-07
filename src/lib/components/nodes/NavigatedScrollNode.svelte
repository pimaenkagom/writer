<script lang="ts">
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import ChildrenNavigation from '$lib/components/nodes/helper/ChildrenNavigation.svelte';
	import NodeHead from '$lib/components/nodes/helper/NodeHead.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="columns">
	<div class="column is-narrow">
		<ChildrenNavigation {model} />
	</div>
	<div class="column">
		<NodeHead {model} />
		<section class="section">
			<div class="container">
				<ChildNodes {model} />
			</div>
		</section>
	</div>
</div>
