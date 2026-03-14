<script lang="ts">
	import MultilingualTextVertical from '$lib/components/contents/mulltilinual-text/MultilingualTextVertical.svelte';
	import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
	import { getModelById } from '$lib/states/nodes.svelte';

	const { id }: { id: string } = $props();
	const model = $derived(getModelById(id));
	const multilingualText = $derived(multilingualTexts.items[model.content]);
</script>

<MultilingualTextVertical model={multilingualText} />
