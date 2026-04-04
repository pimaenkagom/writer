<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
	import { selection } from '$lib/states/selection.svelte';
	import { settings } from '$lib/states/settings.svelte';

	const selectedNodes = $derived(Object.values(selection.nodes).filter((node) => node !== null));

	function getTextInSystemLanguage(node: Basenode) {
		return multilingualTexts.items[node.id].texts[settings.value.systemLanguage.current];
	}
</script>

<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
	<ul>
		{#each selectedNodes as node, index}
			{#if index < selectedNodes.length}
				{#if selectedNodes[index + 1]}
					<li>
						<a
							class="has-text-grey"
							href={null}
							onclick={() => selection.unselectUntilType(node.type)}
						>
							<Text model={getTextInSystemLanguage(node)} />
						</a>
					</li>
				{/if}
			{/if}
		{/each}
	</ul>
</nav>
