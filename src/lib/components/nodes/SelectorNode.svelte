<script lang="ts">
	import MenuNode from '$lib/components/nodes/MenuNode.svelte';
	import ParagraphNode from '$lib/components/nodes/ParagraphNode.svelte';
	import RecursiveNode from '$lib/components/nodes/RecursiveNode.svelte';
	import ScrollNode from '$lib/components/nodes/ScrollNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { NodeType } from '$lib/models/helpers/node-types.model';

	const { model, language }: { model: Basenode; language?: string } = $props();
</script>

{#if model.type === NodeType.Library}
	<MenuNode {model} />
{:else if model.type === NodeType.Collection}
	<MenuNode {model} />
{:else if model.type === NodeType.Book}
	<MenuNode {model} />
{:else if model.type === NodeType.Part}
	<ScrollNode {model} />
{:else if model.type === NodeType.Chapter}
	<ScrollNode {model} />
{:else if model.type === NodeType.Section}
	<ScrollNode {model} />
{:else if model.type === NodeType.Paragraph}
	<ParagraphNode {model} />
{:else if model.type === NodeType.Clause}
	{#if language}
		<RecursiveNode {model} {language} />
	{:else}
		<ParagraphNode {model} />
	{/if}
{:else}
	<p>Unknown node type {model.type} or language is not set.</p>
{/if}
