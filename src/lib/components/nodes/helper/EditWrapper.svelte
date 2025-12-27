<script lang="ts">
	import Selector from '$lib/components/nodes/helper/Selector.svelte';
	import Modal from '$lib/layout/Modal.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import Editor from './Editor.svelte';

	let { model, language }: { model: Basenode; language?: string | undefined } = $props();

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}
</script>

<div class="columns">
	<div class="column is-narrow">
		<button class="button" aria-label="Open Editor" onclick={openEditor}>
			<span class="icon is-small">
				<i class="fa-solid fa-pen"></i>
			</span>
		</button>
		<Modal bind:isActive={isEditing}>
			<Editor {model} />
		</Modal>
	</div>
	<div class="column">
		<Selector {model} {language} />
	</div>
</div>
