<script lang="ts">
	import MultilingualTextBrowser from '$lib/components/contents/mulltilinual-text/MultilingualTextBrowser.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import { ContentType } from '$lib/models/content-type.model';
	import type { NodeType } from '$lib/models/node-type.model';
	import { getCollectionForNodeType } from '$lib/states/nodes.svelte';

	const { nodeType }: { nodeType: NodeType } = $props();

	let isActive = $state(false);

	function openBrowser() {
		isActive = true;
	}

	function select(id: string) {
		const collections = getCollectionForNodeType(nodeType);
		collections.create({
			users: [],
			type: nodeType,
			value: id,
			contentType: ContentType.MultilingualText,
			shown: true,
			tags: [],
			children: []
		});

		isActive = false;
	}
</script>

<button class="button" onclick={openBrowser}>
	<span class="icon">
		<i class="fa-solid fa-plus"></i>
	</span>
	<span>New</span>
</button>

<Modal title="Editor" bind:isActive isWide={true}>
	<MultilingualTextBrowser isSelected={select} />
</Modal>
