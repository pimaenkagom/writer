<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Notifications from '$lib/components/helpers/Notifications.svelte';
	import { onMount } from 'svelte';

	import DataLoader from '$lib/components/helpers/DataLoader.svelte';
	import { dataLoader, loadData } from '$lib/states/helpers/loader.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import '../app.css';

	let { children } = $props();

	onMount(async () => {
		await loadData();
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', settings.value.appearance.current);
	});
</script>

<div class="is-flex is-flex-direction-column is-fullheight-custom">
	{#if dataLoader.state !== 'ready'}
		<DataLoader />
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
