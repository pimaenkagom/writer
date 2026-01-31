<script lang="ts">
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';
</script>

<section class="section">
	<div class="container">
		{#each libraries.values as library}
			<div class="box">
				<NodePreviewer id={library.id} />
			</div>
		{/each}
	</div>
</section>
