<script lang="ts">
	import MultilinualTextList from '$lib/components/contents/mulltilinual-text/MultilinualTextList.svelte';
	import Executer from '$lib/components/header/Executer.svelte';
	import Link from '$lib/components/header/helper/Link.svelte';
	import Languages from '$lib/components/header/Languages.svelte';
	import Login from '$lib/components/header/Login.svelte';
	import Settings from '$lib/components/header/Settings.svelte';
	import AuthGuard from '$lib/components/helpers/AuthGuard.svelte';
	import Coptic from '$lib/components/helpers/languages/Coptic.svelte';
	import { Role } from '$lib/models/helpers/roles.model';

	let isActive = $state(false);

	function toggleIsActive() {
		isActive = !isActive;
	}

	document.documentElement.classList.add('has-navbar-fixed-top');
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<span class="is-size-5">
				<Coptic>Ⲡⲓⲙⲁⲛ̀ⲕⲁϫⲱⲙ</Coptic>
			</span>
		</a>

		<AuthGuard roles={[Role.Admin]}>
			<a class="navbar-item" href={null}>
				<Executer />
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
