<script lang="ts">
	import { notify } from '$lib/states/notifications.svelte';
	import { generateLibrary } from '$lib/utilities/generator/nodes';

	async function execute() {
		await generateLibrary();
		notify('Library generated!');
	}
</script>

<button class="button" aria-label="Execute" onclick={execute}>
	<span class="icon is-small">
		<i class="fa-solid fa-terminal"></i>
	</span>
</button>
