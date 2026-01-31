<script lang="ts">
	import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
	import { order } from '$lib/utilities/nodes/order';

	const isRoot = $derived(order.every((type) => +settings.value[type].current === 0));

	function back() {
		for (const type of order.toReversed()) {
			if (+settings.value[type].current !== 0) {
				setSetting(type, '0');
				break;
			}
		}
	}
</script>

{#if !isRoot}
	<button class="button" title="Back" onclick={back}>
		<span class="icon is-small">
			<i class="fa-solid fa-arrow-left"></i>
		</span>
	</button>
{/if}
