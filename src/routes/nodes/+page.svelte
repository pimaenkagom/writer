<script lang="ts">
	import NodeReader from '$lib/components/nodes/NodeReader.svelte';
	import NodeWriter from '$lib/components/nodes/NodeWriter.svelte';
	import Modal from '$lib/components/helpers/Modal.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';
	import { onMount } from 'svelte';

	let isCreating = $state(false);
	let selectedNodeType = $state('library');

	function openCreator() {
		isCreating = true;
	}

	function closeCreator() {
		isCreating = false;
	}

	onMount(async () => {
		await libraries.load();
	});
</script>

<section class="section">
	<div class="container">
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<h1 class="title">Node Manager</h1>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<button class="button is-primary" onclick={openCreator}>
						<span class="icon">
							<i class="fa-solid fa-plus"></i>
						</span>
						<span>Create New Node</span>
					</button>
				</div>
			</div>
		</div>

		<div class="tabs">
			<ul>
				<li class:is-active={selectedNodeType === 'library'}>
					<a href="#library" onclick={() => (selectedNodeType = 'library')}>Libraries</a>
				</li>
				<li class:is-active={selectedNodeType === 'collection'}>
					<a href="#collection" onclick={() => (selectedNodeType = 'collection')}>Collections</a>
				</li>
				<li class:is-active={selectedNodeType === 'book'}>
					<a href="#book" onclick={() => (selectedNodeType = 'book')}>Books</a>
				</li>
			</ul>
		</div>

		{#if libraries.state === 'loading'}
			<div class="notification is-info is-light">
				<span class="icon">
					<i class="fa-solid fa-spinner fa-spin"></i>
				</span>
				Loading nodes...
			</div>
		{:else if libraries.state === 'error'}
			<div class="notification is-danger is-light">Error loading nodes</div>
		{:else if libraries.values.length === 0}
			<div class="notification is-warning is-light">No nodes found. Create your first node!</div>
		{:else}
			<div class="columns is-multiline">
				{#each libraries.values as node}
					<div class="column is-full">
						<NodeReader {node} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

{#if isCreating}
	<Modal title="Create New Node" bind:isActive={isCreating}>
		<NodeWriter nodeType={selectedNodeType} bind:isSaved={isCreating} />
	</Modal>
{/if}
