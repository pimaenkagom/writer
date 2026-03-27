<script lang="ts">
	import MultilingualTextSystemLanguage from '$lib/components/contents/mulltilinual-text/MultilingualTextSystemLanguage.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getMultilingualText } from '$lib/utilities/nodes/multilingual-texts';

	const { model }: { model: Basenode } = $props();
	const multilingualText = $derived(getMultilingualText(model));
</script>

<MultilingualTextSystemLanguage model={multilingualText} />
