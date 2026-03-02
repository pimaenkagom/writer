<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { getMultilingualText } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(getMultilingualText(model.value));
</script>

<div class="columns">
	{#each getSelectedLanguages() as language}
		<div class="column">
			{#if language == 'coptic'}
				<p><Coptic><Text model={multilingualText.texts[language]} /></Coptic></p>
			{:else if language == 'arabic'}
				<p class="has-text-right">
					<Arabic><Text model={multilingualText.texts[language]} /></Arabic>
				</p>
			{:else}
				<p><Latin>{multilingualText.texts[language].value}</Latin></p>
			{/if}
		</div>
	{/each}
</div>
