<script lang="ts">
	import MultilingualTextEditor from '$lib/components/contents/mulltilinual-text/MultilingualTextEditor.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';

	let openModal = $state(false);

	function addNew() {
		openModal = true;
	}
</script>

<button class="button" onclick={addNew}>
	<span class="icon">
		<i class="fa-solid fa-plus"></i>
	</span>
	<span>New</span>
</button>

<Modal title="Editor" bind:isActive={openModal}>
	<MultilingualTextEditor bind:isNotSaved={openModal} />
</Modal>
