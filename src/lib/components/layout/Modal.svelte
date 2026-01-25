<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		isActive = $bindable(false),
		title = '',
		icon = '',
		isWide = false,
		saveFunc = () => {},
		hasSaveFunc = false
	}: {
		children: Snippet;
		isActive: boolean;
		title: string;
		icon?: string;
		isWide?: boolean;
		saveFunc?: () => void;
		hasSaveFunc?: boolean;
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
			<div class="modal-card-title">
				<span class="icon">
					<i class={icon}></i>
				</span>
				<span class="has-text-weight-semibold">{title}</span>
			</div>
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
	.modal-card {
		max-width: 90%;
	}

	.is-wide {
		width: 1200px;
	}
</style>
