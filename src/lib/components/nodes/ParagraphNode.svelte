<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import Latin from '$lib/components/helpers/languages/Latin.svelte';
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import EditNodeButton from '$lib/components/nodes/helper/EditNodeButton.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getSelectedLanguages } from '$lib/states/languages.svelte';
	import { getMultilingualText } from '$lib/states/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(getMultilingualText(model.value));
</script>

<div class="columns">
	{#each getSelectedLanguages() as language}
		<div class="column">
			{#if language == 'coptic'}
				<p>
					<Coptic>
						<span class="has-text-weight-bold">
							<Text model={multilingualText.texts[language]} />
						</span>
						<ChildNodes {model} {language} />
					</Coptic>
				</p>
			{:else if language == 'arabic'}
				<p class="has-text-right">
					<Arabic>
						<span class="has-text-weight-bold">
							<Text model={multilingualText.texts[language]} />
						</span>
						<ChildNodes {model} {language} />
					</Arabic>
				</p>
			{:else}
				<p>
					<Latin>
						<span class="has-text-weight-bold">
							<Text model={multilingualText.texts[language]} />
						</span>
						<ChildNodes {model} {language} />
					</Latin>
				</p>
			{/if}
		</div>
	{/each}
	<div class="column is-narrow">
		<EditNodeButton {model} />
	</div>
</div>
