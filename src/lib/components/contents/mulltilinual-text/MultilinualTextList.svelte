<script lang="ts">
	import MultilingualText from '$lib/components/contents/mulltilinual-text/MultilingualText.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { onMount } from 'svelte';
	import AddNewButton from './AddNewButton.svelte';

	let filter = $state('');

	let filteredTexts = $derived(
		multilingualTexts.values.filter((text) => {
			const search = filter.toLowerCase();
			return (
				text.id.toLowerCase().includes(search) ||
				Object.values(text.texts).some((t) => t.value.toLowerCase().includes(search))
			);
		})
	);

	function clearFilter() {
		filter = '';
	}

	onMount(async () => {
		await multilingualTexts.load();
	});
</script>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
				<h1 class="title">Writer</h1>
			</div>
			<div class="column">
				<div class="buttons is-right">
					<AddNewButton />
				</div>
			</div>
		</div>
		<div class="field has-addons">
			<div class="control has-icons-left is-expanded">
				<span class="icon is-small is-left">
					<i class="fa-solid fa-filter"></i>
				</span>
				<input class="input" type="text" placeholder="Filter" bind:value={filter} />
			</div>
			<div class="control">
				<button class="button" aria-label="Clear filter" onclick={clearFilter}>
					<span class="icon">
						<i class="fa-solid fa-times"></i>
					</span>
				</button>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		{#each filteredTexts as multilingualText}
			<MultilingualText model={multilingualText} />
		{/each}
	</div>
</section>
