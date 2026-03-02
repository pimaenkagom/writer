<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import DetectorNode from '$lib/components/nodes/helper/DetectorNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();

	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<section class="section">
	<div class="container">
		<MultilingualTextHorizontal model={multilingualText} />
		{#each model.children as nodeId}
			<DetectorNode {nodeId} />
		{/each}
	</div>
</section>
