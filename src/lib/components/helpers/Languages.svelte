<script lang="ts">
	import { delimiter, getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { setSetting } from '$lib/states/helpers/settings.svelte';
	import Modal from '../../layout/Modal.svelte';

	let isActive = $state(false);

	function openModal() {
		isActive = true;
	}

	$effect(() => {
		setSetting('languages', getSelectedLanguages().join(delimiter));
	});
</script>

<section class="section">
	<div class="container">
		<button class="button" aria-label="Execute" onclick={openModal}>
			<span class="icon is-small">
				<i class="fa-solid fa-language"></i>
			</span>
		</button>
	</div>
</section>

{#if isActive}
	<Modal title="Languages" bind:isActive>
		<div class="content">
			<ul>
				{#each getSelectedLanguages() as lang}
					<li>{lang}</li>
				{/each}
			</ul>
		</div>
	</Modal>
{/if}
