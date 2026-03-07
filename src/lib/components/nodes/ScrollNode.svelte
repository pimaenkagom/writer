<script lang="ts">
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import NodeHead from '$lib/components/nodes/helper/NodeHead.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<NodeHead {model} />
<section class="section">
	<div class="container">
		<ChildNodes {model} />
	</div>
</section>
