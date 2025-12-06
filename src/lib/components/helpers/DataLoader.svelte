<script>
	import { dataLoader } from '$lib/states/helpers/loader.svelte';
	import Coptic from './languages/Coptic.svelte';
</script>

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
			{#if dataLoader.state === 'init'}
				<progress class="progress is-large"></progress>
			{/if}

			{#if dataLoader.state === 'loading'}
				<progress class="progress is-large" value={dataLoader.value} max="100"></progress>
			{/if}

			{#if dataLoader.state === 'error'}
				<progress class="progress is-danger is-large" value="100" max="100"></progress>
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
