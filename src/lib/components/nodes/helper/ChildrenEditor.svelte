<script lang="ts">
	import Modal from '$lib/components/layout/Modal.svelte';
	import Browser from '$lib/components/nodes/helper/Browser.svelte';
	import NodePreviewer from '$lib/components/nodes/helper/NodePreviewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();

	let isSelecting = $state(false);
	let insertAtIndex = $state(0);

	function add(index: number) {
		insertAtIndex = index;
		isSelecting = true;
	}

	function insert(id: string) {
		model.children = model.children.toSpliced(insertAtIndex + 1, 0, id);
		isSelecting = false;
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
	<div class="media is-align-items-center">
		<div class="media-left">
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
		<div class="media-content">
			<NodePreviewer {id} />
		</div>
		<div class="media-right">
			<p class="buttons is-centered">
				<button
					class="button"
					aria-label="Move up"
					onclick={() => moveUp(index)}
					disabled={index === 0}
				>
					<span class="icon is-small">
						<i class="fa-solid fa-arrow-up"></i>
					</span>
				</button>
			</p>
			<p class="buttons is-centered">
				<button
					class="button"
					aria-label="Move down"
					onclick={() => moveDown(index)}
					disabled={index === model.children.length - 1}
				>
					<span class="icon is-small">
						<i class="fa-solid fa-arrow-down"></i>
					</span>
				</button>
			</p>
		</div>
	</div>

	<div class="media">
		<div class="media-content is-flex is-justify-content-center">
			<button class="" aria-label="Add" onclick={() => add(index)}>
				<span class="icon is-small">
					<i class="fa-solid fa-plus"></i>
				</span>
			</button>
		</div>
	</div>
{/each}

<Modal bind:isActive={isSelecting} title="Select">
	<Browser node={model} isSelected={insert} />
</Modal>
