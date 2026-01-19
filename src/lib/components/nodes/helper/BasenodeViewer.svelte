<script lang="ts">
	import MultilingualText from '$lib/components/contents/mulltilinual-text/MultilingualText.svelte';
	import Detector from '$lib/components/nodes/helper/Detector.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();

	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<section class="section">
	<div class="container">
		<MultilingualText model={multilingualText} />
		{#each model.children as nodeId}
			<Detector {nodeId} />
		{/each}
	</div>
</section>
