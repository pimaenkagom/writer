<script lang="ts">
	import { page } from '$app/state';
	import { setSetting, settings } from '$lib/states/helpers/settings.svelte';

	import { onMount } from 'svelte';

	let isLoading = $state(true);

	let selectedLibrary = $derived(page.params.library);
	let selectedCollection = $derived(page.params.collection);
	let selectedBook = $derived(page.params.book);
	let selectedPart = $derived(page.params.part);
	let selectedChapter = $derived(page.params.chapter);
	let selectedSection = $derived(page.params.section);
	let selectedParagraph = $derived(page.params.paragraph);
	let selectedClause = $derived(page.params.clause);

	onMount(async () => {
		if (page.params.library === undefined) {
			selectedLibrary = settings.value.library.current;
		} else if (page.params.library !== settings.value.library.current) {
			setSetting('library', page.params.library);
		} else {
			selectedLibrary = page.params.library;
		}

		if (
			page.params.library !== undefined &&
			page.params.library !== settings.value.library.current
		) {
			setSetting('library', page.params.library);
		}

		setSetting('library', page.params.library ?? '0');
		setSetting('collection', page.params.collection ?? '0');
		setSetting('book', page.params.book ?? '0');
		setSetting('part', page.params.part ?? '0');
		setSetting('chapter', page.params.chapter ?? '0');
		setSetting('section', page.params.section ?? '0');
		setSetting('paragraph', page.params.paragraph ?? '0');
		setSetting('clause', page.params.clause ?? '0');

		let n = 4;
		let s = 5;

		let a = 0;

		if (n !== null && n !== s) {
			s = n;
		}
		a = s;

		isLoading = false;
	});
</script>

{#if isLoading}
	<section class="section">
		<div class="container">
			<p>Loading...</p>
		</div>
	</section>
{:else}
	<section class="section">
		<div class="container">{page.params.library}</div>
		<div class="container">{page.params.collection}</div>
		<div class="container">{page.params.book}</div>
		<div class="container">{page.params.part}</div>
		<div class="container">{page.params.chapter}</div>
		<div class="container">{page.params.section}</div>
		<div class="container">{page.params.paragraph}</div>
		<div class="container">{page.params.clause}</div>
	</section>

	<section class="section">
		<div class="container">
			This is a page inside clause {page.params.clause} of paragraph {page.params.paragraph} of section
			{page.params.section} of chapter {page.params.chapter} of part {page.params.part} of book {page
				.params.book} of collection {page.params.collection} of library {page.params.library}.
		</div>
	</section>
{/if}
