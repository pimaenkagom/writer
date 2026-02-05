<script lang="ts">
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import Back from '$lib/components/helpers/Back.svelte';
	import Detector from '$lib/components/nodes/helper/Detector.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
	import { subtypeOf } from '$lib/states/nodes/nodes.svelte';

	const currentLibrary = $derived(+settings.value.library.current);
	const currentCollection = $derived(+settings.value.collection.current);
	const currentBook = $derived(+settings.value.book.current);
	const currentPart = $derived(+settings.value.part.current);
	const currentChapter = $derived(+settings.value.chapter.current);
	const currentSection = $derived(+settings.value.section.current);
	const currentParagraph = $derived(+settings.value.paragraph.current);
	const currentClause = $derived(+settings.value.clause.current);

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
		<nav class="breadcrumb has-dot-separator">
			<ul>
				<li><a href={null}>{currentLibrary}</a></li>
				<li><a href={null}>{currentCollection}</a></li>
				<li><a href={null}>{currentBook}</a></li>
				<li><a href={null}>{currentPart}</a></li>
				<li><a href={null}>{currentChapter}</a></li>
				<li><a href={null}>{currentSection}</a></li>
				<li><a href={null}>{currentParagraph}</a></li>
				<li><a href={null}>{currentClause}</a></li>
			</ul>
		</nav>
	</div>
</section>

<section class="section">
	<div class="container">
		<MultilingualTextHorizontal model={multilingualText} />
		{#each model.children as nodeId}
			{#if false}<Detector {nodeId} />{/if}
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
				<Detector {nodeId} />
			{:else}
				<p style="color:red">ERROR: nodeId is {String(nodeId)} at index {current - 1}</p>
			{/if}
		{/if}
	</div>
</section>
