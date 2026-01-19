<script lang="ts">
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { collections } from '$lib/states/nodes/nodes.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import BasenodeViewer from './BasenodeViewer.svelte';

	let { model }: { model: Basenode } = $props();

	const multilingualText = $derived(multilingualTexts.items[model.value]);
	const values = $derived(multilingualText?.texts || {});
	const hasValues = $derived(Object.keys(values).length > 0);

	function select() {
		console.log('Select basenode for editing:', model.id);
	}
</script>

<section class="section">
	<div class="container">
		{#each getSelectedLanguages() as language}
			<div class="column">
				<h1 class="title">
					{#if language == 'coptic'}
						<Coptic>{multilingualText.texts[language].value}</Coptic>
					{:else if language == 'arabic'}
						<Arabic>{multilingualText.texts[language].value}</Arabic>
					{:else}
						<p>{multilingualText.texts[language].value}</p>
					{/if}
				</h1>
			</div>
		{/each}
		{#if hasValues}
			<div class="columns">
				{#each Object.entries(values) as [language, text]}
					<div class="column">
						<p><strong>{capitalize(language)}</strong></p>
						<p>{text.value}</p>
					</div>
				{/each}
				<div class="column is-narrow">
					<button class="button" aria-label="Edit text" onclick={select}>
						<span class="icon is-small">
							<i class="fa-solid fa-pen"></i>
						</span>
					</button>
				</div>
			</div>
		{/if}
		{#if model.children && model.children.length > 0}
			{#each model.children as child}
				{#if collections.items[child]}
					<BasenodeViewer model={collections.items[child]} />
				{/if}
			{/each}
		{/if}
	</div>
</section>
