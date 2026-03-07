<script lang="ts">
	import MultilinualTextList from '$lib/components/contents/mulltilinual-text/MultilinualTextList.svelte';
	import Executer from '$lib/components/header/Executer.svelte';
	import Link from '$lib/components/header/helper/Link.svelte';
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import { Role } from '$lib/models/helpers/roles.model';
	import Exporter from '$lib/pages/Exporter.svelte';
	import Languages from '$lib/pages/Languages.svelte';
	import Login from '$lib/pages/Login.svelte';
	import Settings from '$lib/pages/Settings.svelte';

	document.documentElement.classList.add('has-navbar-fixed-top');
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand">
		<div class="navbar-item">
			<span class="is-size-5 is-unselectable">
				<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
			</span>
		</div>
	</div>
	<div class="navbar-brand is-flex-grow-1"></div>
	<div class="navbar-brand">
		<AuthGuard roles={[Role.Admin]}>
			<a class="navbar-item" href={null}>
				<Executer />
			</a>
		</AuthGuard>
		<AuthGuard roles={[Role.Writer]}>
			<a class="navbar-item" href={null}>
				<Link title="Export" icon="fa-solid fa-download">
					<Exporter />
				</Link>
			</a>
		</AuthGuard>
		<AuthGuard roles={[Role.Writer]}>
			<a class="navbar-item" href={null}>
				<Link title="Writer" icon="fa-solid fa-pen" isWide={true}>
					<MultilinualTextList />
				</Link>
			</a>
		</AuthGuard>
		<a class="navbar-item" href={null}>
			<Link title="Languages" icon="fa-solid fa-globe">
				<Languages />
			</Link>
		</a>
		<a class="navbar-item" href={null}>
			<Link title="Settings" icon="fa-solid fa-cog">
				<Settings />
			</Link>
		</a>
		<a class="navbar-item" href={null}>
			<Link title="User" icon="fa-solid fa-user">
				<Login />
			</Link>
		</a>
	</div>
</nav>
