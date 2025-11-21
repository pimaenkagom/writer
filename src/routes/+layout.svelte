<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Notifications from '$lib/components/helpers/Notifications.svelte';
	import { onMount } from 'svelte';

	import { languages } from '$lib/states/contents/languages.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { statuses } from '$lib/states/contents/statuses.svelte';
	import { loadSettingsIfNotLoaded, settings } from '$lib/states/helpers/settings.svelte';
	import {
		books,
		chapters,
		clauses,
		collections,
		libraries,
		paragraphs,
		parts,
		sections
	} from '$lib/states/nodes/nodes.svelte';
	import '../app.css';

	let { children } = $props();

	let progressToDo = $state(100);

	onMount(async () => {
		loadSettingsIfNotLoaded();

		await libraries.loadIfNotLoaded();
		progressToDo /= 2;

		await collections.loadIfNotLoaded();
		progressToDo /= 2;

		await books.loadIfNotLoaded();
		progressToDo /= 2;

		await parts.loadIfNotLoaded();
		progressToDo /= 2;

		await chapters.loadIfNotLoaded();
		progressToDo /= 2;

		await sections.loadIfNotLoaded();
		progressToDo /= 2;

		await paragraphs.loadIfNotLoaded();
		progressToDo /= 2;

		await clauses.loadIfNotLoaded();
		progressToDo /= 2;

		await multilingualTexts.loadIfNotLoaded();
		progressToDo /= 2;

		await languages.loadIfNotLoaded();
		progressToDo /= 2;

		await statuses.loadIfNotLoaded();
		progressToDo = 0;
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', settings.value.appearance.current);
	});
</script>

<div class="is-flex is-flex-direction-column is-fullheight-custom">
	{#if progressToDo > 0}
		<section class="hero is-fullheight">
			<div class="hero-body">
				<div class="container">
					<progress class="progress is-large" value={100 - progressToDo} max="100">80 %</progress>
					<!-- <progress class="progress is-large"></progress> -->
				</div>
			</div>
		</section>
	{:else}
		<Header />
		<Notifications />

		<div id="main" class="is-flex-grow-1">
			{@render children()}
		</div>
		<Footer />
	{/if}
</div>

<style>
	.is-fullheight-custom {
		min-height: 100dvh;
	}
</style>
