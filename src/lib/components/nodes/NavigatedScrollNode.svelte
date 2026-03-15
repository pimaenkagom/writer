<script lang="ts">
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import ChildrenNavigation from '$lib/components/nodes/helper/ChildrenNavigation.svelte';
	import MenuNodeHead from '$lib/components/nodes/helper/MenuNodeHead.svelte';
	import type { Basenode } from '$lib/models/basenode.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="columns">
	<div class="column is-one-fifth">
		<ChildrenNavigation {model} />
	</div>
	<div class="column">
		<section class="section">
			<div class="container">
				<MenuNodeHead {model} />
				<ChildNodes {model} />
			</div>
		</section>
	</div>
</div>
