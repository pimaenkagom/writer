<script lang="ts">
	import Coptic from './helpers/languages/Coptic.svelte';
	import Login from './Login.svelte';

	let isActive = $state(false);

	function toggleIsActive() {
		isActive = !isActive;
	}
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<span class="is-size-4">
				<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
			</span>
		</a>
		<a
			onclick={toggleIsActive}
			class:is-active={isActive}
			class="navbar-burger"
			href="/"
			role="button"
			aria-label="menu"
			aria-expanded="false"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div class:is-active={isActive} class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/presenter">Presenter</a>
			<a class="navbar-item" href="/settings">Settings</a>
			<a class="navbar-item" href="/writer">Writer</a>
		</div>
		<div class="navbar-end">
			<div class="navbar-item has-dropdown is-hoverable">
				<span class="navbar-link">More</span>

				<div class="navbar-dropdown is-right">
					<Login />
				</div>
			</div>
		</div>
	</div>
</nav>
