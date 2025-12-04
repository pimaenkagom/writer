<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Notifications from '$lib/components/helpers/Notifications.svelte';
	import { onMount } from 'svelte';

	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import { load, loader } from '$lib/states/helpers/loader.svelte';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import '../app.css';

	let { children } = $props();

	onMount(async () => {
		load();
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', settings.value.appearance.current);
	});
</script>

<div class="is-flex is-flex-direction-column is-fullheight-custom">
	{#if loader.state !== 'ready'}
		<section class="hero is-halfheight">
			<div class="hero-body">
				<div class="container has-text-centered">
					<img src="/favicon.png" alt="Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ" />
					<h1 class="title">
						<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
					</h1>
				</div>
			</div>
		</section>
		<section class="hero is-halfheight">
			<div class="hero-body">
				<div class="container has-text-centered">
					<progress class="progress is-large" value={100 - loader.value} max="100"></progress>
					<!-- <progress class="progress is-large"></progress> -->
					<p class="subtitle">
						The source code is licensed under
						<a href="https://opensource.org/license/agpl-v3">
							GNU Affero General Public License version 3
						</a>.
					</p>
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
