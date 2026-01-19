<script lang="ts">
	import Modal from '$lib/components/layout/Modal.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import Browser from './Browser.svelte';
	import NodePreviewer from './NodePreviewer.svelte';

	const { model }: { model: Basenode } = $props();

	let isSelecting = $state(false);
	let insertAtIndex = $state(0);

	function add(index: number) {
		insertAtIndex = index;
		isSelecting = true;
	}

	function remove(index: number) {
		model.children = model.children.toSpliced(index, 1);
	}

	function moveUp(index: number) {
		if (index < 1) {
			return;
		}

		const element = model.children[index];
		model.children = model.children.toSpliced(index, 1).toSpliced(index - 1, 0, element);
	}

	function moveDown(index: number) {
		if (index >= model.children.length - 1) {
			return;
		}

		const element = model.children[index];
		model.children = model.children.toSpliced(index, 1).toSpliced(index + 1, 0, element);
	}
</script>

{#each model.children as id, index}
	<div class="box">
		<div class="columns is-align-items-center">
			<div class="column is-narrow">
				<p class="buttons is-centered">
					<button
						class="button"
						aria-label="Delete"
						onclick={() => remove(model.children.indexOf(id))}
					>
						<span class="icon is-small">
							<i class="fa-solid fa-times"></i>
						</span>
					</button>
				</p>
			</div>
			<div class="column">
				<NodePreviewer {id} />
			</div>
			<div class="column is-narrow">
				<p class="buttons is-centered">
					<button class="button" aria-label="Move up" onclick={() => moveUp(index)}>
						<span class="icon is-small">
							<i class="fa-solid fa-arrow-up"></i>
						</span>
					</button>
				</p>
				<p class="buttons is-centered">
					<button class="button" aria-label="Move down" onclick={() => moveDown(index)}>
						<span class="icon is-small">
							<i class="fa-solid fa-arrow-down"></i>
						</span>
					</button>
				</p>
			</div>
		</div>
	</div>
	<p class="buttons is-centered">
		<button class="button" aria-label="Add" onclick={() => add(index)}>
			<span class="icon is-small">
				<i class="fa-solid fa-plus"></i>
			</span>
		</button>
	</p>
{/each}

<Modal bind:isActive={isSelecting} title="Select">
	<Browser
		node={model}
		index={insertAtIndex}
		isSelected={(id: string) => {
			model.children = model.children.toSpliced(insertAtIndex + 1, 0, id);
			isSelecting = false;
		}}
	/>
</Modal>
