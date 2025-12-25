<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import Modal from '../../layout/Modal.svelte';
	import Arabic from '../helpers/languages/Arabic.svelte';
	import Coptic from '../helpers/languages/Coptic.svelte';
	import NodeWriter from './NodeWriter.svelte';

	let {
		node,
		showChildren = true,
		showEditButton = true,
		depth = 0
	}: {
		node: Basenode;
		showChildren?: boolean;
		showEditButton?: boolean;
		depth?: number;
	} = $props();

	let isEditing = $state(false);

	function openEditor() {
		isEditing = true;
	}

	const multilingualText = $derived(multilingualTexts.items[node.value]);
	const texts = $derived(multilingualText?.texts || {});
	const hasTexts = $derived(Object.keys(texts).length > 0);

	const nodeTypeLabels: Record<string, string> = {
		library: 'Library',
		collection: 'Collection',
		book: 'Book',
		part: 'Part',
		chapter: 'Chapter',
		section: 'Section',
		paragraph: 'Paragraph',
		clause: 'Clause'
	};

	const indentClass = $derived(`ml-${Math.min(depth, 6)}`);
</script>

<article class="box {indentClass}">
	<div class="content">
		{#if node.type}
			<span class="tag is-info is-light">{nodeTypeLabels[node.type] || node.type}</span>
		{/if}

		{#if hasTexts}
			<div class="columns is-mobile">
				{#each Object.entries(texts) as [language, text]}
					<div class="column">
						<p class="is-size-7 has-text-weight-bold">{capitalize(language)}</p>
						{#if language === 'coptic'}
							<Coptic>
								<p>{text.value}</p>
							</Coptic>
						{:else if language === 'arabic'}
							<Arabic>
								<p>{text.value}</p>
							</Arabic>
						{:else}
							<p>{text.value}</p>
						{/if}
						{#if text.status}
							<span class="tag is-small">{text.status}</span>
						{/if}
					</div>
				{/each}
			</div>
		{/if}

		{#if node.tags && node.tags.length > 0}
			<div class="tags">
				{#each node.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}

		<div class="is-flex is-justify-content-space-between is-align-items-center mt-2">
			<p class="is-size-7 has-text-grey is-family-code">{node.id}</p>
			{#if showEditButton}
				<button class="button is-small" aria-label="Edit node" onclick={openEditor}>
					<span class="icon is-small">
						<i class="fa-solid fa-pen"></i>
					</span>
				</button>
			{/if}
		</div>
	</div>
</article>

{#if isEditing}
	<Modal title="Edit {nodeTypeLabels[node.type] || 'Node'}" bind:isActive={isEditing}>
		<NodeWriter {node} bind:isSaved={isEditing} />
	</Modal>
{/if}
