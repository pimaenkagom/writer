<script lang="ts">
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import type { Status } from '$lib/models/contents/status.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { statuses } from '$lib/states/contents/statuses.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import { onMount } from 'svelte';
	import Arabic from '../helpers/languages/Arabic.svelte';
	import Coptic from '../helpers/languages/Coptic.svelte';
	import Modal from '../helpers/Modal.svelte';
	import MultilingualTextEditor from './MultilingualTextEditor.svelte';

	let { model }: { model: MultilingualText } = $props();

	let availableStatuses = $state<Status[]>([]);

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	function del() {
		multilingualTexts.remove(model.id);
	}

	onMount(async () => {
		availableStatuses = await statuses.getAll();
	});
</script>

<div class="box">
	<div class="columns">
		<div class="column is-narrow"></div>
		{#each Object.entries(model.texts) as [language, text]}
			<div class="column">
				<p><strong>{capitalize(language)}</strong></p>
				{#if language == 'coptic'}
					<Coptic><p>{text.value}</p></Coptic>
				{:else if language == 'arabic'}
					<Arabic><p>{text.value}</p></Arabic>
				{:else}
					<p>{text.value}</p>
				{/if}
			</div>
		{/each}
		<div class="column is-narrow">
			<p class="buttons is-right">
				<button class="button" aria-label="Delete" onclick={del}>
					<span class="icon is-small">
						<i class="fa-solid fa-trash"></i>
					</span>
				</button>
				<button class="button" aria-label="Edit text" onclick={openEditor}>
					<span class="icon is-small">
						<i class="fa-solid fa-pen"></i>
					</span>
				</button>
			</p>
			<p class=" is-family-code has-text-grey">{model.id}</p>
		</div>
	</div>
</div>
<Modal title="Editor" bind:isActive={isEditing}>
	<MultilingualTextEditor {model} bind:isNotSaved={isEditing} />
</Modal>
