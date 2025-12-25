<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import Detector from './helper/Detector.svelte';

	let { model }: { model: Basenode } = $props();

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	const multilingualText = $derived(multilingualTexts.items[model.value]);
	const values = $derived(multilingualText?.texts || {});
	const hasValues = $derived(Object.keys(values).length > 0);
</script>

<section class="section">
	<div class="container">
		{#if hasValues}
			<div class="columns">
				{#each Object.entries(values) as [language, text]}
					<div class="column">
						<p><strong>{capitalize(language)}</strong></p>
						<p>{text.value}</p>
					</div>
				{/each}
				<div class="column is-narrow">
					<button class="button" aria-label="Edit text" onclick={openEditor}>
						<span class="icon is-small">
							<i class="fa-solid fa-pen"></i>
						</span>
					</button>
				</div>
			</div>
		{/if}

		{#each model.children as nodeId}
			<Detector {nodeId} />
		{/each}
	</div>
</section>
