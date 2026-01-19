<script lang="ts">
	import { setSetting, settings } from '$lib/states/helpers/settings.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
</script>

<section class="section">
	<div class="container">
		<h1 class="title">Settings</h1>
		{#each Object.values(settings.value) as setting}
			{#if setting.shown}
				<div class="field">
					<label class="label" for={setting.key}>{capitalize(setting.key)}</label>
					<div class="control is-expanded">
						{#if setting.availables.length === 0}
							<input
								class="input"
								type="text"
								id={setting.key}
								bind:value={setting.current}
								on:change={() => {
									setSetting(setting.key, setting.current);
								}}
							/>
						{:else}
							<div class="select is-fullwidth">
								<select
									id={setting.key}
									bind:value={setting.current}
									on:change={() => {
										setSetting(setting.key, setting.current);
									}}
								>
									{#each setting.availables as option}
										<option value={option}>{option}</option>
									{/each}
								</select>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
