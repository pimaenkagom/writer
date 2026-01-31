<script lang="ts">
	import Presenter from '$lib/components/layout/Presenter.svelte';
	import Selector from '$lib/components/nodes/helper/Selector.svelte';
	import { selection } from '$lib/states/helpers/selection.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	const currentLibrary = $derived(selection.value.library);
	const currentCollection = $derived(selection.value.collection);
	const currentBook = $derived(selection.value.book);
	const currentPart = $derived(selection.value.part);
	const currentChapter = $derived(selection.value.chapter);
	const currentSection = $derived(selection.value.section);
	const currentParagraph = $derived(selection.value.paragraph);
	const currentClause = $derived(selection.value.clause);
</script>

<section class="section">
	<div class="container">
		<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
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
			<ul>
				{#if currentLibrary !== 0}<li><a href={null}>{currentLibrary}</a></li>{/if}
				{#if currentCollection !== 0}<li><a href={null}>{currentCollection}</a></li>{/if}
				{#if currentBook !== 0}<li><a href={null}>{currentBook}</a></li>{/if}
				{#if currentPart !== 0}<li><a href={null}>{currentPart}</a></li>{/if}
				{#if currentChapter !== 0}<li><a href={null}>{currentChapter}</a></li>{/if}
				{#if currentSection !== 0}<li><a href={null}>{currentSection}</a></li>{/if}
				{#if currentParagraph !== 0}<li><a href={null}>{currentParagraph}</a></li>{/if}
				{#if currentClause !== 0}<li><a href={null}>{currentClause}</a></li>{/if}
			</ul>
		</nav>
	</div>
</section>

<Presenter isActive={settings.value.mode.current === 'slides'}>
	<section class="section">
		<div class="container">
			{#each libraries.values as lib}
				<Selector model={lib} />
			{/each}
		</div>
	</section>
</Presenter>
