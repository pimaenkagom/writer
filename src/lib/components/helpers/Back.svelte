<script lang="ts">
	import { selection, unselect } from '$lib/states/helpers/selection.svelte';
	import { order } from '$lib/utilities/nodes/order';

	const isRoot = $derived(order.every((type) => selection.value[type] === null));

	function back() {
		unselect();
	}
</script>

{#if !isRoot}
	<button class="button" title="Back" onclick={back}>
		<span class="icon is-small">
			<i class="fa-solid fa-arrow-left"></i>
		</span>
	</button>
{/if}
