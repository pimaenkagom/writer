<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import ChildNodes from '$lib/components/nodes/helper/ChildNodes.svelte';
	import EditNodeButton from '$lib/components/nodes/helper/EditNodeButton.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getMultilingualText } from '$lib/states/contents/multilingual-text.svelte';

	const { model, language }: { model: Basenode; language: string } = $props();
	const multilingualText = $derived(getMultilingualText(model.value));
	const text = $derived(multilingualText.texts[language]);
</script>

<Text model={text} />
<EditNodeButton {model} />
{#if model.children.length > 0}
	<ChildNodes {model} {language} />
{/if}
