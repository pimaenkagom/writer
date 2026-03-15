<script lang="ts">
	import MultilingualTextVertical from '$lib/components/contents/mulltilinual-text/MultilingualTextVertical.svelte';
	import { getModelById } from '$lib/states/nodes.svelte';
	import { getMultilingualText } from '$lib/utilities/nodes/multilingual-texts';

	const { id }: { id: string } = $props();
	const model = $derived(getModelById(id));
	const multilingualText = $derived(getMultilingualText(model));
</script>

<MultilingualTextVertical model={multilingualText} />
