<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<MultilingualTextHorizontal model={multilingualText} />
<p>{model.id}</p>
