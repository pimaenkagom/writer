<script lang="ts">
	import BasenodeViewer from '$lib/components/nodes/helper/BasenodeViewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<BasenodeViewer {model} />
