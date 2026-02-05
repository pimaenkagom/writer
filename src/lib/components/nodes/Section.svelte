<script lang="ts">
	import NesterNode from '$lib/components/nodes/helper/NesterNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<NesterNode {model} />

<!-- TODO Implement slideshow feature here -->
