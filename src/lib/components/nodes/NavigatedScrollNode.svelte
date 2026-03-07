<script lang="ts">
	import ChildrenNavigation from '$lib/components/nodes/helper/ChildrenNavigation.svelte';
	import ScrollNode from '$lib/components/nodes/ScrollNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="columns">
	<div class="column is-narrow">
		<ChildrenNavigation {model} />
	</div>
	<div class="column">
		<ScrollNode {model} />
	</div>
</div>
