<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import BasenodeViewer from './helper/BasenodeViewer.svelte';

	let { model }: { model: Basenode } = $props();
</script>

<BasenodeViewer {model} />
