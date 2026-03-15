<script lang="ts">
	import MultilinualTextList from '$lib/components/contents/mulltilinual-text/MultilinualTextList.svelte';
	import Executer from '$lib/components/header/Executer.svelte';
	import Exporter from '$lib/components/header/Exporter.svelte';
	import Link from '$lib/components/header/helper/Link.svelte';
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import { Role } from '$lib/models/roles.model';
	import Languages from '$lib/pages/Languages.svelte';
	import Login from '$lib/pages/Login.svelte';
	import Settings from '$lib/pages/Settings.svelte';

	document.documentElement.classList.add('has-navbar-fixed-top');
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand is-fullwidth-custom">
		<div class="navbar-item">
			<span class="is-size-5 is-unselectable">
				<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
			</span>
		</div>
		<div class="is-flex-grow-1"></div>
		<AuthGuard roles={[Role.Admin]}>
			<div class="navbar-item">
				<Executer />
			</div>
		</AuthGuard>
		<AuthGuard roles={[Role.Writer]}>
			<div class="navbar-item">
				<Exporter />
			</div>
		</AuthGuard>
		<AuthGuard roles={[Role.Writer]}>
			<Link class="navbar-item" title="Writer" icon="fa-solid fa-pen" isWide={true}>
				<MultilinualTextList />
			</Link>
		</AuthGuard>
		<Link class="navbar-item" title="Languages" icon="fa-solid fa-globe">
			<Languages />
		</Link>
		<Link class="navbar-item" title="Settings" icon="fa-solid fa-cog">
			<Settings />
		</Link>
		<Link class="navbar-item" title="User" icon="fa-solid fa-user">
			<Login />
		</Link>
	</div>
</nav>

<style>
	.is-fullwidth-custom {
		min-width: 100vw;
	}
</style>
