<script lang="ts">
	import Selector from '$lib/components/nodes/helper/Selector.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model, language }: { model: Basenode; language?: string | undefined } = $props();
</script>

<div class="columns">
	<div class="column is-narrow">Edit</div>
	<div class="column">
		<Selector {model} {language} />
	</div>
</div>
