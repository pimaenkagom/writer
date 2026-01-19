<script lang="ts">
	import MultilingualTextViewer from '$lib/components/contents/mulltilinual-text/MultilingualText.svelte';
	import MultilingualTextEditor from '$lib/components/contents/mulltilinual-text/MultilingualTextEditor.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import type { Status } from '$lib/models/contents/status.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { statuses } from '$lib/states/contents/statuses.svelte';
	import { onMount } from 'svelte';

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
		<div class="column">
			<MultilingualTextViewer {model} />
		</div>
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
