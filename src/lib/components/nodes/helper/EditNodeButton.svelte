<script lang="ts">
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import Editor from '$lib/components/nodes/helper/Editor.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { Role } from '$lib/models/roles.model';
	import { getCollectionForNodeType } from '$lib/states/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	// svelte-ignore state_referenced_locally
	const snapshot = $state($state.snapshot(model));

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	function save() {
		getCollectionForNodeType(model.nodeType).update(snapshot.id, snapshot);
	}
</script>

<AuthGuard roles={[Role.Writer]}>
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
</AuthGuard>
