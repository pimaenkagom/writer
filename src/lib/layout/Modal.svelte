<script lang="ts">
	let { children, isActive = $bindable(false), title = '' } = $props();

	function closeModal() {
		isActive = false;
	}
</script>

<div class="modal" class:is-active={isActive}>
	<div class="modal-background"></div>
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">{title}</p>
			<button class="delete" aria-label="close" onclick={closeModal}></button>
		</header>
		<section class="modal-card-body">
			{@render children?.()}
		</section>
		<footer class="modal-card-foot"></footer>
	</div>
</div>
