<script lang="ts">
	import AddNewButton from '$lib/components/contents/mulltilinual-text/AddNewButton.svelte';
	import MultilingualTextHorizontal from '$lib/components/contents/mulltilinual-text/MultilingualTextHorizontal.svelte';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';

	const { isSelected }: { isSelected: (id: string) => void } = $props();

	let filter = $state('');

	const filtered = $derived(
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
</script>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
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
			<div class="column is-narrow">
				<div class="buttons is-right">
					<AddNewButton />
				</div>
			</div>
		</div>
	</div>
</section>

{#each filtered as item}
	<article class="media is-align-items-center">
		<div class="media-left"></div>
		<div class="media-content">
			<MultilingualTextHorizontal model={item} />
		</div>
		<div class="media-right">
			<button class="button" title="Select" onclick={() => isSelected(item.id)}>
				<span class="icon is-small">
					<i class="fa-solid fa-arrow-right"></i>
				</span>
			</button>
		</div>
	</article>
{/each}
