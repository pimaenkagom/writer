<script lang="ts">
	import {
		delimiter,
		getAvailablesLanguages,
		getSelectedLanguages
	} from '$lib/states/contents/languages.svelte';
	import { setSetting } from '$lib/states/helpers/settings.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';

	function toggle() {}

	$effect(() => {
		setSetting('languages', getSelectedLanguages().join(delimiter));
	});
</script>

<div class="content">
	{#each getAvailablesLanguages() as language}
		<div class="box">
			<div class="media">
				<div class="media-content">
					{capitalize(language)}
				</div>
				<div class="media-right">
					<button title={language} onclick={toggle}>
						<span class="icon">
							<i class="fa-solid fa-eye"></i>
							<i class="fa-solid fa-eye-slash"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>
