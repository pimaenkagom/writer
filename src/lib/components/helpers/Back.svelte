<script lang="ts">
	import { selection } from '$lib/states/selection.svelte';

	const { isButton = false }: { isButton?: boolean } = $props();

	function back() {
		selection.unselect();
	}
</script>

{#if !selection.isRoot}
	<button class:button={isButton} title="Back" onclick={back}>
		<span class="icon">
			<i class="fa-solid fa-arrow-left"></i>
		</span>
	</button>
{/if}
