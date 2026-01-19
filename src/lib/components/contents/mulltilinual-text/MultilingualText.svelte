<script lang="ts">
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import Text from './Text.svelte';

	let { model }: { model: MultilingualText } = $props();
</script>

<div class="columns">
	{#each getSelectedLanguages() as language}
		<div class="column">
			<p>
				<strong>{capitalize(language)}</strong>
			</p>
			<p>
				{#if language == 'coptic'}
					<Coptic><Text model={model.texts[language]} /></Coptic>
				{:else if language == 'arabic'}
					<Arabic><Text model={model.texts[language]} /></Arabic>
				{:else}
					<Latin>{model.texts[language].value}</Latin>
				{/if}
			</p>
		</div>
	{/each}
</div>
