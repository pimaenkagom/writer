<script lang="ts">
	import Presenter from '$lib/components/layout/Presenter.svelte';
	import SelectorNode from '$lib/components/nodes/helper/SelectorNode.svelte';
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
				<li><a href={null}>{currentLibrary ?? 'null'}</a></li>
				<li><a href={null}>{currentCollection ?? 'null'}</a></li>
				<li><a href={null}>{currentBook ?? 'null'}</a></li>
				<li><a href={null}>{currentPart ?? 'null'}</a></li>
				<li><a href={null}>{currentChapter ?? 'null'}</a></li>
				<li><a href={null}>{currentSection ?? 'null'}</a></li>
				<li><a href={null}>{currentParagraph ?? 'null'}</a></li>
				<li><a href={null}>{currentClause ?? 'null'}</a></li>
			</ul>
		</nav>
	</div>
</section>

<Presenter isActive={settings.value.mode.current === 'slides'}>
	<section class="section">
		<div class="container">
			{#each libraries.values as lib}
				<SelectorNode model={lib} />
			{/each}
		</div>
	</section>
</Presenter>
