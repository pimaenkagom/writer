<script lang="ts">
	import Text from '$lib/components/contents/mulltilinual-text/Text.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { getSelectedNodes } from '$lib/states/helpers/selection.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';

	const selectedNodes = $derived(getSelectedNodes());

	function getTextInSystemLanguage(id: string) {
		return multilingualTexts.items[id].texts[settings.value.systemLanguage.current];
	}
</script>

<section class="section">
	<div class="container">
		<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
			<ul>
				{#each selectedNodes as node}
					<li><a href={null}><Text model={getTextInSystemLanguage(node.value)} /> </a></li>
				{/each}
				{#if selectedNodes.length === 0}
					<li><a href={null}>No selection</a></li>
				{/if}
			</ul>
		</nav>
	</div>
</section>
