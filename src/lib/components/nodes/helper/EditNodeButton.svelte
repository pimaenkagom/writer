<script lang="ts">
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import Editor from '$lib/components/nodes/helper/Editor.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { NodeType } from '$lib/models/node-type.model';
	import { Role } from '$lib/models/roles.model';
	import { getCollectionForNodeType } from '$lib/states/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	let snapshot = $state<Basenode | null>(null);

	let isEditing = $state(false);

	function openEditor() {
		snapshot = $state.snapshot(model);
		isEditing = true;
	}

	function save() {
		getCollectionForNodeType(model.type).update(snapshot!.id, snapshot!);
	}
</script>

<AuthGuard roles={[Role.Writer]}>
	<button
		class:button={model.type !== NodeType.Clause}
		aria-label="Open Editor"
		onclick={openEditor}
	>
		<span class="icon is-small">
			<i class="fa-solid fa-pen"></i>
		</span>
	</button>
	{#if snapshot !== null}
		<Modal
			bind:isActive={isEditing}
			title="Edit Node"
			isWide={true}
			saveFunc={save}
			hasSaveFunc={true}
		>
			<Editor model={snapshot} />
		</Modal>
	{/if}
</AuthGuard>
