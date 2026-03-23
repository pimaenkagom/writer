<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getMultilingualText } from '$lib/utilities/nodes/multilingual-texts';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(getMultilingualText(model));
</script>

<MultilingualTextHorizontal model={multilingualText} />
<p>{model.type} {model.id}</p>
