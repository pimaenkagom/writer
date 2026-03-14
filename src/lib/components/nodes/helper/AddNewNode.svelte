<script lang="ts">
	import MultilingualTextBrowser from '$lib/components/contents/mulltilinual-text/MultilingualTextBrowser.svelte';
	import Modal from '$lib/components/layout/Modal.svelte';
	import type { Type } from '$lib/models/type.model';
	import { getCollectionForType } from '$lib/states/nodes/nodes.svelte';

	const { type }: { type: Type } = $props();

	let isActive = $state(false);

	function openBrowser() {
		isActive = true;
	}

	function select(id: string) {
		const collections = getCollectionForType(type);
		collections.create({
			users: [],
			type: type,
			value: id,
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
