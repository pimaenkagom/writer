<script lang="ts">
	let {
		children,
		isActive = $bindable(false),
		title = '',
		isWide = false,
		saveFunc = () => {},
		hasSaveFunc = false
	} = $props();

	function save() {
		saveFunc();
		closeModal();
	}

	function closeModal() {
		isActive = false;
	}
</script>

<div class="modal" class:is-active={isActive}>
	<div class="modal-background"></div>
	<div class="modal-card" class:is-wide={isWide}>
		<header class="modal-card-head">
			<p class="modal-card-title">{title}</p>
			<button class="delete" aria-label="close" onclick={closeModal}></button>
		</header>
		<section class="modal-card-body">
			{@render children?.()}
		</section>
		<footer class="modal-card-foot">
			{#if hasSaveFunc}
				<div class="container">
					<div class="buttons is-right">
						<button class="button is-primary" onclick={save}>
							<span class="icon">
								<i class="fa-solid fa-floppy-disk"></i>
							</span>
							<span>Save</span>
						</button>
					</div>
				</div>
			{/if}
		</footer>
	</div>
</div>

<style>
	.is-wide {
		width: 1200px;
		max-width: 90%;
	}
</style>
