<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getSelectedNodes, unselectUntilType } from '$lib/states/helpers/selection.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';

	const selectedNodes = $derived(getSelectedNodes());

	function getTextInSystemLanguage(id: string) {
		return multilingualTexts.items[id].texts[settings.value.systemLanguage.current];
	}
</script>

<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
	<ul>
		{#each selectedNodes as node, index}
			{#if index < selectedNodes.length}
				{#if selectedNodes[index + 1]}
					<li>
						<a class="has-text-grey" href={null} onclick={() => unselectUntilType(node.type)}>
							<Text model={getTextInSystemLanguage(node.value)} />
						</a>
					</li>
				{/if}
			{/if}
		{/each}
	</ul>
</nav>
