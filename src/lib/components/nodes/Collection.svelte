<script lang="ts">
	import Menu from '$lib/components/layout/Menu.svelte';
	import BasenodeViewer from '$lib/components/nodes/helper/BasenodeViewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<BasenodeViewer {model} />

<Menu {model} />
