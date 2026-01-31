<script lang="ts">
	import MultilingualTextVertical from '$lib/components/contents/mulltilinual-text/MultilingualTextVertical.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<section class="section">
	<div class="container">
		<MultilingualTextVertical model={multilingualText} />
	</div>
</section>
