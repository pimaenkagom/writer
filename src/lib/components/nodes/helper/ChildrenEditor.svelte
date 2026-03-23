<script lang="ts">
	import Modal from '$lib/components/layout/Modal.svelte';
	import NodeBrowser from '$lib/components/nodes/helper/NodeBrowser.svelte';
	import NodeViewer from '$lib/components/nodes/helper/NodeViewer.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { subtypeOf } from '$lib/states/nodes.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';

	const { model }: { model: Basenode } = $props();
	const children = $derived(getChildnodes(model));

	let isSelecting = $state(false);
	let insertAtIndex = $state(0);

	function add(index: number) {
		insertAtIndex = index;
		isSelecting = true;
	}

	function insert(id: string) {
		model.children = model.children.toSpliced(insertAtIndex + 1, 0, [id]);
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

<div class="media">
	<div class="media-content is-flex is-justify-content-center">
		<button class="" aria-label="Add" onclick={() => add(-1)}>
			<span class="icon is-small">
				<i class="fa-solid fa-plus"></i>
			</span>
		</button>
	</div>
</div>

{#each children as alternatives, index}
	{#each alternatives as child}
		<div class="media is-align-items-center">
			<div class="media-left">
				<p class="buttons is-centered">
					<button
						class="button"
						aria-label="Delete"
						onclick={() => remove(model.children.indexOf([child.id]))}
					>
						<span class="icon is-small">
							<i class="fa-solid fa-times"></i>
						</span>
					</button>
				</p>
			</div>
			<div class="media-content">
				<NodeViewer model={child} />
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
{/each}

<Modal bind:isActive={isSelecting} title="Select" isWide={true}>
	<NodeBrowser nodeType={subtypeOf(model.type)} isSelected={insert} />
</Modal>
