<script lang="ts">
	import {
		login,
		logout,
		resetEmail,
		resetPassword,
		signup,
		user
	} from '$lib/states/helpers/user.svelte';

	let isSigningUp = $state(false);
	let showPassword = $state(false);

	let email = $state('');
	let newEmail = $state('');
	let password = $state('');
	let reauthenticationPassword = $state('');
	let reauthenticationPassword2 = $state('');
	let message = $state('');

	async function handleSubmit() {
		try {
			message = '';
			if (isSigningUp) {
				await signup(email, password);
			} else {
				await login(email, password);
			}
			email = '';
			password = '';
		} catch (error: any) {
			message = error.message;
		}
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	function authenticate(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		event.preventDefault();
		handleSubmit();
	}

	function changeEmail() {
		if (newEmail !== '') {
			resetEmail(newEmail, reauthenticationPassword);
			newEmail = '';
			reauthenticationPassword = '';
		}
	}

	function changePassword() {
		if (user.value.user?.email) {
			resetPassword(user.value.user.email);
		}
	}

	function forgotPassword() {
		resetPassword(email);
	}
</script>

{#if user.state !== 'ready'}
	<p>
		<progress class="progress"></progress>
	</p>
{:else if user.value.user}
	<p class="subtitle">Info</p>
	<div class="field is-horizontal">
		<div class="field-label">
			<label class="label" for="#email">Email</label>
		</div>
		<div class="field-body">
			<div id="email" class="field">
				<div class="control">
					<div>
						{user.value.user.email}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
			<label class="label" for="#roles">Permissions</label>
		</div>
		<div class="field-body">
			<div id="roles" class="field">
				<div class="control">
					<div class="tags">
						{#each user.value.roles as role}
							<span class="tag">{role}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<p class="subtitle">Account Settings</p>
	<div class="field is-horizontal">
		<div class="field-label">
			<label class="label" for="#resetEmail">Reset email</label>
		</div>
		<div class="field-body">
			<div class="field">
				<div class="control">
					<input class="input" type="email" placeholder="New email" bind:value={newEmail} />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Password"
						bind:value={reauthenticationPassword}
					/>
				</div>
			</div>
			<div id="resetEmail" class="field">
				<div class="control">
					<button class="button is-danger" disabled={newEmail === ''} onclick={changeEmail}
						>Reset
					</button>
				</div>
				<p class="help">An email will be send to you.</p>
			</div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
			<label class="label" for="#resetPassword">Reset password</label>
		</div>
		<div class="field-body">
			<div class="field">
				<div class="control">
					<button id="resetPassword" class="button is-danger" onclick={changePassword}>Reset</button
					>
				</div>
				<p class="help">An email will be send to you.</p>
			</div>
		</div>
	</div>
	<hr />
	<p class="subtitle">Danger Zone</p>
	<div class="field is-horizontal">
		<div class="field-label">
			<label class="label" for="#deleteAccount">Delete Account</label>
		</div>
		<div class="field-body">
			<div class="field">
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Password"
						bind:value={reauthenticationPassword2}
					/>
				</div>
			</div>
			<div id="deleteAccount" class="field">
				<div class="control">
					<button
						class="button is-danger"
						disabled={reauthenticationPassword2 === ''}
						onclick={changeEmail}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="field is-grouped is-grouped-right">
		<p class="control">
			<button class="button" onclick={logout}>Log out</button>
		</p>
	</div>
{:else}
	<div class="container">
		<form onsubmit={authenticate}>
			<div class="tabs is-boxed">
				<ul>
					<li class:is-active={!isSigningUp}>
						<a
							onclick={() => {
								isSigningUp = false;
							}}
						>
							<span class="icon">
								<i class="fa-solid fa-arrow-right-to-bracket"></i>
							</span>
							<span>Log in</span>
						</a>
					</li>
					<li class:is-active={isSigningUp}>
						<a
							onclick={() => {
								isSigningUp = true;
							}}
						>
							<span class="icon is-small">
								<i class="fa-solid fa-user-plus"></i>
							</span>
							<span>Sign up</span>
						</a>
					</li>
				</ul>
			</div>

			<div class="field">
				<div class="control has-icons-left">
					<span class="icon is-small is-left">
						<i class="fa-solid fa-envelope"></i>
					</span>
					<input class="input" type="email" placeholder="Email" required bind:value={email} />
				</div>
			</div>
			<div class="field has-addons">
				<div class="control is-expanded has-icons-left">
					<span class="icon is-small is-left">
						<i class="fa-solid fa-lock"></i>
					</span>
					<input
						class="input"
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						required
						bind:value={password}
					/>
				</div>
				<div class="control">
					<button
						class="button"
						type="button"
						title="Toggle Passwort Visibility"
						onclick={togglePasswordVisibility}
					>
						<span class="icon">
							{#if showPassword}
								<i class="fa-solid fa-eye-slash"></i>
							{:else}
								<i class="fa-solid fa-eye"></i>
							{/if}
						</span>
					</button>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<p>
						&nbsp;
						{#if !isSigningUp && email !== ''}
							<a href={null} onclick={forgotPassword}>Reset password</a>
						{/if}
					</p>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<p>&nbsp;{message}</p>
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				{#if isSigningUp}
					<div class="control">
						<button class="button is-link" type="button">
							<span class="icon">
								<i class="fa-solid fa-user-plus"></i>
							</span>
							<span>Sign up</span>
						</button>
					</div>
				{:else}
					<div class="control">
						<button class="button is-success" type="submit">
							<span class="icon">
								<i class="fa-solid fa-arrow-right-to-bracket"></i>
							</span>
							<span>Log in</span>
						</button>
					</div>
				{/if}
			</div>
		</form>
	</div>
{/if}
