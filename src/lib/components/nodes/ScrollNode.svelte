<script lang="ts">
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import ScrollNodeHead from '$lib/components/nodes/helper/ScrollNodeHead.svelte';
	import type { Basenode } from '$lib/models/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<ScrollNodeHead {model} />
<section class="section">
	<div class="container">
		<ChildNodes {model} />
	</div>
</section>
