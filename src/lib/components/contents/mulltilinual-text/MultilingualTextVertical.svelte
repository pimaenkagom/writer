<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';

	let { model, showLabel = false }: { model: MultilingualText; showLabel?: boolean } = $props();
</script>

<div class="">
	{#each getSelectedLanguages() as language}
		<p>
			{#if showLabel}<strong>{capitalize(language)}</strong>{/if}
			{#if language == 'coptic'}
				<Coptic><Text model={model.texts[language]} /></Coptic>
			{:else if language == 'arabic'}
				<Arabic><Text model={model.texts[language]} /></Arabic>
			{:else}
				<Latin><Text model={model.texts[language]} /></Latin>
			{/if}
		</p>
	{/each}
</div>
