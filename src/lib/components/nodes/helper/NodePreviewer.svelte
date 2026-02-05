<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getModelById } from '$lib/states/nodes/nodes.svelte';

	const { id }: { id: string } = $props();
	const model = $derived(getModelById(id));
	const multilingualText = $derived(multilingualTexts.items[model.value]);
</script>

<MultilingualTextHorizontal model={multilingualText} />
<p>{model.type}</p>
<p>{id}</p>
