<script lang="ts">
	import { page } from '$app/state';

	import { onMount } from 'svelte';

	let isLoading = $state(true);

	onMount(async () => {
		// await loadDatabaseData();
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
