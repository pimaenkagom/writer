<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { multilingualTexts } from '$lib/states/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(multilingualTexts.items[model.content]);
</script>

<section class="section">
	<div class="container">
		<MultilingualTextHorizontal model={multilingualText} />
	</div>
</section>
