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
		<div class="fixed-grid">
			<div class="grid">
				<div class="cell">Cell 1</div>
				<div class="cell">Cell 2</div>
				<div class="cell">Cell 3</div>
				<div class="cell">Cell 4</div>
				<div class="cell">Cell 5</div>
				<div class="cell">Cell 6</div>
				<div class="cell">Cell 7</div>
				<div class="cell">Cell 8</div>
				<div class="cell">Cell 9</div>
				<div class="cell">Cell 10</div>
				<div class="cell">Cell 11</div>
				<div class="cell">Cell 12</div>
			</div>
		</div>
		<MultilingualText model={multilingualText} />
		{#each model.children as nodeId}
			<Detector {nodeId} />
		{/each}
	</div>
</section>
