<script lang="ts">
	import Modal from '$lib/components/layout/Modal.svelte';

	let { children, title, icon, isWide = false } = $props();
	let isActive = $state(false);

	function openModal() {
		isActive = true;
	}
</script>

<button {title} onclick={openModal}>
	<span class="icon">
		<i class={icon}></i>
	</span>
</button>

<Modal {title} {icon} {isWide} bind:isActive>
	{@render children?.()}
</Modal>
