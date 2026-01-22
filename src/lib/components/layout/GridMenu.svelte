<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import Detector from '$lib/components/nodes/helper/Detector.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();

	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<section class="section">
	<div class="container">
		<MultilingualTextHorizontal model={multilingualText} />
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="fixed-grid">
			<div class="grid">
				<div class="cell">
					{#each model.children as nodeId}
						<Detector {nodeId} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
