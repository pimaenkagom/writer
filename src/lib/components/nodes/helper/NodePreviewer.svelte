<script lang="ts">
	import MultilingualText from '$lib/components/contents/mulltilinual-text/MultilingualText.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getModelById } from '$lib/states/nodes/nodes.svelte';

	const { id }: { id: string } = $props();
	const model = $derived(getModelById(id));
	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<MultilingualText model={multilingualText} />
<p>{id}</p>
