<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import Back from '$lib/components/helpers/Back.svelte';
	import DetectorNode from '$lib/components/nodes/helper/DetectorNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
	import { subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const { model }: { model: Basenode } = $props();

	const current = $derived(+settings.value[subtypeOf(model.type)].current);

	const multilingualText = $derived(multilingualTexts.items[model.value]);

	function setCurrent(index: number) {
		console.log('children:', model.children, 'index:', index, 'value:', model.children[index - 1]);
		setSetting(subtypeOf(model.type), String(index));
	}

	function resetCurrent() {
		setSetting(subtypeOf(model.type), '0');
	}
</script>

<section class="section">
	<div class="container">
		<MultilingualTextHorizontal model={multilingualText} />
		{#each model.children as nodeId}
			{#if false}<DetectorNode {nodeId} />{/if}
		{/each}
	</div>
</section>
<button onclick={resetCurrent}>Reset</button>
<Back />
<section class="section">
	<div class="container">
		{#if current === 0}
			{#each model.children as nodes, index}
				{#each nodes as nodeId}
					<button onclick={() => setCurrent(index + 1)}>{nodeId}</button>
				{/each}
			{/each}
		{:else}
			{@const nodeId = model.children[current - 1]}
			<p>
				DEBUG: current={current}, children.length={model.children.length}, nodeId={nodeId}, type={typeof nodeId}
			</p>
			{#if nodeId}
				<DetectorNode {nodeId} />
			{:else}
				<p style="color:red">ERROR: nodeId is {String(nodeId)} at index {current - 1}</p>
			{/if}
		{/if}
	</div>
</section>
