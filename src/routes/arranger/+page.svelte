<script lang="ts">
	import Basenode from '$lib/components/nodes/Basenode.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		await libraries.load();
	});
</script>

<section class="section">
	<div class="container">
		{#each libraries.values as lib}
			<Basenode model={lib} />
		{/each}
	</div>
</section>
