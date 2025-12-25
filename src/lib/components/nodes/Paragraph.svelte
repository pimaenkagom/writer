<script lang="ts">
	import Arabic from '$lib/components/helpers/languages/Arabic.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import Clause from '../../layout/Clause.svelte';

	let { model }: { model: Basenode } = $props();
</script>

<div class="container">
	<div class="columns">
		<div class="column is-narrow"></div>
		{#each getSelectedLanguages() as language}
			<div class="column">
				{#if language == 'coptic'}
					<Coptic><p><Clause {model} {language} /></p></Coptic>
				{:else if language == 'arabic'}
					<Arabic><p><Clause {model} {language} /></p></Arabic>
				{:else}
					<p><Clause {model} {language} /></p>
				{/if}
			</div>
		{/each}
	</div>
</div>
