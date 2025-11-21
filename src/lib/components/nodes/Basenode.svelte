<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import Modal from '../helpers/Modal.svelte';
	import BasenodeEditor from './BasenodeEditor.svelte';

	let { model }: { model: Basenode } = $props();

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	const values = multilingualTexts.items[model.value].texts;
</script>

<section class="section">
	<div class="container">
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
		{#each model.children as child}
			<!-- <Base model={child} /> -->
			{child}
		{/each}
	</div>
</section>
<Modal title="Editor" bind:isActive={isEditing}>
	<BasenodeEditor {model} bind:isSaved={isEditing} />
</Modal>
