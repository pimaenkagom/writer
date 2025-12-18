<script>
	import { dataLoader, dataLoaderMaxValue } from '$lib/states/helpers/loader.svelte';
	import Coptic from './languages/Coptic.svelte';
</script>

<section class="hero is-halfheight">
	<div class="hero-body">
		<div class="container has-text-centered">
			<h1 class="title">
				<span id="logo">
					<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
				</span>
			</h1>
		</div>
	</div>
</section>
<section class="hero is-halfheight">
	<div class="hero-body">
		<div class="container has-text-centered">
			{#if dataLoader.state === 'init'}
				<progress class="progress is-large"></progress>
			{/if}

			{#if dataLoader.state === 'loading'}
				<progress class="progress is-large" value={dataLoader.value} max={dataLoaderMaxValue}>
				</progress>
			{/if}

			{#if dataLoader.state === 'error'}
				<progress
					class="progress is-danger is-large"
					value={dataLoaderMaxValue}
					max={dataLoaderMaxValue}
				></progress>
			{/if}

			<p class="subtitle">
				The source code is licensed under
				<a href="https://opensource.org/license/agpl-v3">
					GNU Affero General Public License version 3
				</a>.
			</p>
		</div>
	</div>
</section>

<style>
	#logo {
		font-size: 8rem;
	}
</style>
