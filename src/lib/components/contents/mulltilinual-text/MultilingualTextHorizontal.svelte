<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';

	const { model, showLabel = false }: { model: MultilingualText; showLabel?: boolean } = $props();
</script>

<div class="columns">
	{#each getSelectedLanguages() as language}
		<div class="column">
			{#if showLabel}
				<p>
					<strong>{capitalize(language)}</strong>
				</p>
			{/if}
			{#if language == 'coptic'}
				<p><Coptic><Text model={model.texts[language]} /></Coptic></p>
			{:else if language == 'arabic'}
				<p class="has-text-right"><Arabic><Text model={model.texts[language]} /></Arabic></p>
			{:else}
				<p><Latin>{model.texts[language].value}</Latin></p>
			{/if}
		</div>
	{/each}
</div>
