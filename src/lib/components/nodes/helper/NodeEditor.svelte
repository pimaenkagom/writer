<script lang="ts">
	import MultilingualTextBrowser from '$lib/components/contents/mulltilinual-text/MultilingualTextBrowser.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import NodeViewer from '$lib/components/nodes/helper/NodeViewer.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model }: { model: Basenode } = $props();

	let isSelecting = $state(false);

	function select() {
		isSelecting = true;
	}

	function swop(id: string) {
		console.log(model.value, 'Swopped to', id);
		model.value = id;
		isSelecting = false;
	}
</script>

<div class="columns">
	<div class="column">
		<NodeViewer {model} />
	</div>
	<div class="column is-narrow is-flex is-align-items-center">
		<p class="buttons is-centered">
			<button class="button" title="Edit" onclick={select}>
				<span class="icon">
					<i class="fa-solid fa-pen"></i>
				</span>
			</button>
		</p>
	</div>
</div>

<Modal bind:isActive={isSelecting} title="Select">
	<MultilingualTextBrowser isSelected={swop} />
</Modal>
