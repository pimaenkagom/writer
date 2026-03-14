<script lang="ts">
	import Modal from '$lib/components/layout/Modal.svelte';

	let { class: className = '', children, title, icon, isWide = false } = $props();
	let isActive = $state(false);

	function openModal() {
		isActive = true;
	}
</script>

<a class={[className]} href={null} {title} onclick={openModal}>
	<span class="icon">
		<i class={icon}></i>
	</span>
</a>

<Modal {title} {icon} {isWide} bind:isActive>
	{@render children?.()}
</Modal>
