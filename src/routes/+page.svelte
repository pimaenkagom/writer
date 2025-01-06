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
		const unsubscribe = auth.onAuthStateChanged((userData) => {
			user = userData;
			loading = false;
		});

		return () => unsubscribe();
	});

	async function handleSubmit() {
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
</script>

{#if loading}
	<p>Loading...</p>
{:else if user}
	<div>
		<p>Willkommen, {user.email}!</p>
		<button onclick={() => signOut(auth)}>Ausloggen</button>
	</div>
{:else}
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
	>
		<h2>{isRegistering ? 'Registrieren' : 'Anmelden'}</h2>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" required bind:value={email} />
		</div>

		<div>
			<label for="password">Passwort:</label>
			<input type="password" id="password" required bind:value={password} minlength="6" />
		</div>

		<button type="submit">
			{isRegistering ? 'Registrieren' : 'Anmelden'}
		</button>

		<button type="button" onclick={() => (isRegistering = !isRegistering)}>
			{isRegistering ? 'Bereits einen Account? Anmelden' : 'Neuer Benutzer? Registrieren'}
		</button>
	</form>
{/if}

<style>
	form {
		max-width: 300px;
		margin: 0 auto;
		padding: 20px;
	}

	.error {
		color: red;
		margin-bottom: 10px;
	}

	div {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
	}

	input {
		width: 100%;
		padding: 8px;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	button {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button[type='button'] {
		background-color: transparent;
		color: #4caf50;
		border: 1px solid #4caf50;
	}
</style>
