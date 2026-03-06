<script lang="ts">
	import MenuNode from '$lib/components/nodes/MenuNode.svelte';
	import ParagraphNode from '$lib/components/nodes/ParagraphNode.svelte';
	import RecursiveNode from '$lib/components/nodes/RecursiveNode.svelte';
	import ScrollNode from '$lib/components/nodes/ScrollNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	const { model, language }: { model: Basenode; language?: string } = $props();
</script>

{#if model.type === 'library'}
	<MenuNode {model} />
{:else if model.type === 'collection'}
	<MenuNode {model} />
{:else if model.type === 'book'}
	<MenuNode {model} />
{:else if model.type === 'part'}
	<ScrollNode {model} />
{:else if model.type === 'chapter'}
	<ScrollNode {model} />
{:else if model.type === 'section'}
	<ScrollNode {model} />
{:else if model.type === 'paragraph'}
	<ParagraphNode {model} />
{:else if model.type === 'clause'}
	{#if language}
		<RecursiveNode {model} {language} />
	{:else}
		<ParagraphNode {model} />
	{/if}
{:else}
	<p>Unknown node type {model.type} or language is not set.</p>
{/if}
