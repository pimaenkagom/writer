<script lang="ts">
	import { selection, unselect } from '$lib/states/selection.svelte';
	import { order } from '$lib/utilities/nodes/order';

	const { isButton = false }: { isButton?: boolean } = $props();

	const isRoot = $derived(order.every((type) => selection.value[type] === null));

	function back() {
		unselect();
	}
</script>

{#if !isRoot}
	<button class:button={isButton} title="Back" onclick={back}>
		<span class="icon">
			<i class="fa-solid fa-arrow-left"></i>
		</span>
	</button>
{/if}
