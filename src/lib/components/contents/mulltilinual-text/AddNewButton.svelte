<script lang="ts">
	import Modal from '$lib/layout/Modal.svelte';
	import MultilingualTextEditor from './MultilingualTextEditor.svelte';

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
