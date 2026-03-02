<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import { getSystemLanguage } from '$lib/states/contents/languages.svelte';

	const { model }: { model: MultilingualText } = $props();
	const systemLanguage = $derived(getSystemLanguage());
</script>

<p class="has-text-left">
	{#if systemLanguage == 'coptic'}
		<Coptic><Text model={model.texts[systemLanguage]} /></Coptic>
	{:else if systemLanguage == 'arabic'}
		<Arabic><Text model={model.texts[systemLanguage]} /></Arabic>
	{:else}
		<Latin><Text model={model.texts[systemLanguage]} /></Latin>
	{/if}
</p>
