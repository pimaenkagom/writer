<script lang="ts">
	import Y from '$lib/components/nodes/helper/Y.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<Y {model} />
