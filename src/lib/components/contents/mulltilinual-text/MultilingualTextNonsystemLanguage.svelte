<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { MultilingualText } from '$lib/models/multilingual-text.model';
	import { getSelectedLanguages, getSystemLanguage } from '$lib/states/languages.svelte';

	const { model }: { model: MultilingualText } = $props();
	const systemLanguage = $derived(getSystemLanguage());
</script>

<div class="">
	{#each getSelectedLanguages() as language}
		{#if language !== systemLanguage}
			<p class="has-text-left">
				{#if language == 'coptic'}
					<Coptic><Text model={model.texts[language]} /></Coptic>
				{:else if language == 'arabic'}
					<Arabic><Text model={model.texts[language]} /></Arabic>
				{:else}
					<Latin><Text model={model.texts[language]} /></Latin>
				{/if}
			</p>
		{/if}
	{/each}
</div>
