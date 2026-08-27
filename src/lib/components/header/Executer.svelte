<script lang="ts">
	import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
	import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
	import { notify } from '$lib/states/notifications.svelte';
	import { initializeLibrary } from '$lib/utilities/initializer/initializer';
	import { order } from '$lib/utilities/nodes/order';

	async function emptyDatabase() {
		for (const nodeType of order) {
			await getCollectionForNodeType(nodeType).clear();
		}
		await multilingualTexts.clear();
	}

	async function execute() {
		await emptyDatabase();
		await initializeLibrary();
		notify('Library initialized!');
	}
</script>

<button class="button" aria-label="Execute" onclick={execute}>
	<span class="icon is-small">
		<i class="fa-solid fa-terminal"></i>
	</span>
</button>
