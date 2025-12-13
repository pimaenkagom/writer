<script lang="ts">
	import Basenode from '$lib/components/nodes/BasenodeViewer.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	const currentLibrary = $derived(settings.value.library.current);
	const currentCollection = $derived(settings.value.collection.current);
	const currentBook = $derived(settings.value.book.current);
	const currentPart = $derived(settings.value.part.current);
	const currentChapter = $derived(settings.value.chapter.current);
	const currentSection = $derived(settings.value.section.current);
	const currentParagraph = $derived(settings.value.paragraph.current);
	const currentClause = $derived(settings.value.clause.current);
</script>

<section class="section">
	<div class="container">{currentLibrary}</div>
	<div class="container">{currentCollection}</div>
	<div class="container">{currentBook}</div>
	<div class="container">{currentPart}</div>
	<div class="container">{currentChapter}</div>
	<div class="container">{currentSection}</div>
	<div class="container">{currentParagraph}</div>
	<div class="container">{currentClause}</div>
</section>

<section class="section">
	<div class="container">
		This is clause {currentClause} of paragraph {currentParagraph} of section
		{currentSection} of chapter {currentChapter} of part {currentPart} of book {currentBook} of collection
		{currentCollection} of library {currentLibrary}.
	</div>
</section>

<section class="section">
	<div class="container">
		<section class="section">
			<div class="container">
				{#each libraries.values as lib}
					<Basenode model={lib} />
				{/each}
			</div>
		</section>
	</div>
</section>
