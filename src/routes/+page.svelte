<script lang="ts">
	import Executer from '$lib/components/helpers/Executer.svelte';
	import Languages from '$lib/components/helpers/Languages.svelte';
	import Selector from '$lib/components/nodes/helper/Selector.svelte';
	import Presenter from '$lib/layout/Presenter.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	const currentLibrary = $derived(+settings.value.library.current);
	const currentCollection = $derived(+settings.value.collection.current);
	const currentBook = $derived(+settings.value.book.current);
	const currentPart = $derived(+settings.value.part.current);
	const currentChapter = $derived(+settings.value.chapter.current);
	const currentSection = $derived(+settings.value.section.current);
	const currentParagraph = $derived(+settings.value.paragraph.current);
	const currentClause = $derived(+settings.value.clause.current);
</script>

<section class="section">
	<div class="container">
		<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
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

<Languages />

<Executer />
<Presenter isActive={settings.value.mode.current === 'slides'}>
	<section class="section">
		<div class="container">
			{#each libraries.values as lib}
				<Selector model={lib} />
			{/each}
		</div>
	</section>
</Presenter>
