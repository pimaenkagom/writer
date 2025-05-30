<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="is-flex is-flex-direction-column is-fullheight-custom">
	<Header />
	<div class=" is-flex-grow-1">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	.is-fullheight-custom {
		min-height: 100dvh;
	}
</style>
