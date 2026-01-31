<script lang="ts">
	import Stage from '$lib/components/layout/Stage.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

<Stage {model} />
