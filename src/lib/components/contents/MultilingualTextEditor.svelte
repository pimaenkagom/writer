<script lang="ts">
	import type { MultilingualText } from '$lib/models/contents/multilingual-text.model';
	import type { Status } from '$lib/models/contents/status.model';
	import type { Text } from '$lib/models/contents/text.model';
	import { languages } from '$lib/states/contents/languages.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { statuses } from '$lib/states/contents/statuses.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import { onMount } from 'svelte';

	let {
		model = null,
		isNotSaved = $bindable(true)
	}: { model?: MultilingualText | null; isNotSaved?: boolean | null } = $props();

	const isNew = model == null;

	let multilingualText = $state<MultilingualText>(
		isNew
			? {
					id: '',
					texts: {}
				}
			: $state.snapshot(model)
	);

	let availableStatuses = $state<Status[]>([]);

	async function initializeWithEmptyStrings() {
		const availableLanguages = await languages.getAll();

		const newTexts: Record<string, Text> = {};
		for (const language of availableLanguages) {
			const text: Text = {
				value: '',
				status: '',
				strongWordsIndices: [],
				emphasizedWordsIndices: []
			};
			newTexts[language.value] = text;
		}

		// Reactively update the texts map
		multilingualText.texts = newTexts;
	}

	onMount(async () => {
		if (isNew) {
			await initializeWithEmptyStrings();
		}

		availableStatuses = await statuses.getAll();
	});

	function save() {
		const snapshot = $state.snapshot(multilingualText);
		if (isNew) {
			multilingualTexts.create(snapshot);
		} else {
			multilingualTexts.update(snapshot.id, snapshot);
		}
		isNotSaved = false;
	}
</script>

{#each Object.entries(multilingualText.texts) as [language, text]}
	<div class="field">
		<label class="label" for={language}>{capitalize(language)}</label>
		<div class="control">
			<textarea id={language} class="textarea" rows="3" bind:value={text.value}></textarea>
		</div>
	</div>
	<div class="field">
		<div class="control is-expanded">
			<label class="label" for="Status-{language}">Status</label>
			<div class="select is-fullwidth">
				<select id="Status-{language}" bind:value={text.status}>
					{#each availableStatuses as status}
						<option value={status.value}>{status.value}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
{/each}
<div class="columns">
	<div class="column">
		<div class="field is-grouped is-grouped-right">
			<p class="control">
				<button class="button is-primary" onclick={save}>
					<span class="icon">
						<i class="fa-solid fa-floppy-disk"></i>
					</span>
					<span>Save</span>
				</button>
			</p>
		</div>
	</div>
</div>
