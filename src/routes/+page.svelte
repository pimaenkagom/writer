<script lang="ts">
	import Presenter from '$lib/components/layout/Presenter.svelte';
	import NesterNode from '$lib/components/nodes/helper/NesterNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
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

	const root: Basenode = {
		id: '7047EB00-02DF-11F1-B558-0800200C9A66',
		type: 'root',
		children: libraries.values.map((lib) => lib.id),
		users: [],
		value: '938B9CA6-57CA-4201-9A6B-FD1E4BFC2B53',
		shown: false,
		tags: [],
		childrenTypes: libraries.values.map((lib) => lib.type)
	};
</script>

<section class="section">
	<div class="container">
		<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
			<ul>
				{#if currentLibrary !== null}<li><a href={null}>{currentLibrary}</a></li>{/if}
				{#if currentCollection !== null}<li><a href={null}>{currentCollection}</a></li>{/if}
				{#if currentBook !== null}<li><a href={null}>{currentBook}</a></li>{/if}
				{#if currentPart !== null}<li><a href={null}>{currentPart}</a></li>{/if}
				{#if currentChapter !== null}<li><a href={null}>{currentChapter}</a></li>{/if}
				{#if currentSection !== null}<li><a href={null}>{currentSection}</a></li>{/if}
				{#if currentParagraph !== null}<li><a href={null}>{currentParagraph}</a></li>{/if}
				{#if currentClause !== null}<li><a href={null}>{currentClause}</a></li>{/if}
			</ul>
		</nav>
	</div>
</section>

<Presenter isActive={settings.value.mode.current === 'slides'}>
	<section class="section">
		<div class="container">
			<NesterNode model={root} />
		</div>
	</section>
</Presenter>
