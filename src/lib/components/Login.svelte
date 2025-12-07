<script lang="ts">
	import { auth } from '$lib/firebase';
	import type { User } from 'firebase/auth';
	import {
		createUserWithEmailAndPassword,
		signInWithEmailAndPassword,
		signOut
	} from 'firebase/auth';

	let user: User | null = $state(null);
	let loading = $state(true);
	let email = $state('');
	let password = $state('');
	let isRegistering = $state(false);
	let errorMessage = $state('');

	$effect(() => {
		if (auth === undefined) {
			return;
		}

		const unsubscribe = auth.onAuthStateChanged((userData) => {
			user = userData;
			loading = false;
		});

		return () => unsubscribe();
	});

	async function handleSubmit() {
		if (auth === undefined) {
			return;
		}

		try {
			errorMessage = '';
			if (isRegistering) {
				await createUserWithEmailAndPassword(auth, email, password);
			} else {
				await signInWithEmailAndPassword(auth, email, password);
			}
			email = '';
			password = '';
		} catch (error: any) {
			errorMessage = error.message;
		}
	}

	async function logout() {
		if (auth === undefined) {
			return;
		}

		await signOut(auth);
	}
</script>

{#if loading}
	<p>Loading...</p>
{:else if user}
	<div>
		<p class="subtitle">Willkommen, {user.email}!</p>
		<button class="button" onclick={logout}>Ausloggen</button>
	</div>
{:else}
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
	>
		<h2 class="title">{isRegistering ? 'Registrieren' : 'Anmelden'}</h2>

		{#if errorMessage}
			<p class="subtitle">{errorMessage}</p>
		{/if}

		<button class="button" type="button" onclick={() => (isRegistering = !isRegistering)}>
			{isRegistering ? 'Bereits einen Account? Anmelden' : 'Neuer Benutzer? Registrieren'}
		</button>
	</form>

	<div class="field">
		<p class="control has-icons-left">
			<span class="icon is-small is-left">
				<i class="fa-solid fa-envelope"></i>
			</span>
			<input class="input" type="email" placeholder="Email" required bind:value={email} />
		</p>
	</div>
	<div class="field">
		<p class="control has-icons-left">
			<span class="icon is-small is-left">
				<i class="fa-solid fa-lock"></i>
			</span>
			<input class="input" type="password" placeholder="Password" required bind:value={password} />
		</p>
	</div>
	<div class="field">
		<p class="control">
			<button class="button is-success" onclick={handleSubmit}>
				{isRegistering ? 'Sign up' : 'Log in'}
			</button>
		</p>
	</div>
{/if}
