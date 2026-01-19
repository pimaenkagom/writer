<script lang="ts">
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import Selector from '$lib/components/nodes/helper/Selector.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { getCollectionForType } from '$lib/states/nodes/nodes.svelte';
	import Editor from './Editor.svelte';

	const { model, language }: { model: Basenode; language?: string | undefined } = $props();

	// svelte-ignore state_referenced_locally
	const snapshot = $state($state.snapshot(model));

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	function save() {
		getCollectionForType(model.type).update(snapshot.id, snapshot);
	}
</script>

<div class="columns">
	<AuthGuard roles={['writer']}>
		<div class="column is-narrow">
			<section class="section">
				<div class="container">
					<button class="button" aria-label="Open Editor" onclick={openEditor}>
						<span class="icon is-small">
							<i class="fa-solid fa-pen"></i>
						</span>
					</button>
					<Modal
						bind:isActive={isEditing}
						title="Edit Node"
						isWide={true}
						saveFunc={save}
						hasSaveFunc={true}
					>
						<Editor model={snapshot} />
					</Modal>
				</div>
			</section>
		</div>
	</AuthGuard>
	<div class="column">
		<Selector {model} {language} />
	</div>
</div>
