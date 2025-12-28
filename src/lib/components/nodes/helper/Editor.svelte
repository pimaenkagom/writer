<script lang="ts">
	import MultilingualText from '$lib/components/contents/mulltilinual-text/MultilingualText.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	let { model }: { model: Basenode } = $props();
</script>

Node Editor

{model.id}

<MultilingualText model={multilingualTexts.items[model.value]} />
