<script lang="ts">
	import MenuNode from '$lib/components/nodes/MenuNode.svelte';
	import NavigatedScrollNode from '$lib/components/nodes/NavigatedScrollNode.svelte';
	import ParagraphNode from '$lib/components/nodes/ParagraphNode.svelte';
	import RecursiveNode from '$lib/components/nodes/RecursiveNode.svelte';
	import ScrollNode from '$lib/components/nodes/ScrollNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { Type } from '$lib/models/type.model';

	const { model, language }: { model: Basenode; language?: string } = $props();
</script>

{#if model.type === Type.Library}
	<MenuNode {model} />
{:else if model.type === Type.Collection}
	<MenuNode {model} />
{:else if model.type === Type.Book}
	<MenuNode {model} />
{:else if model.type === Type.Part}
	<ScrollNode {model} />
{:else if model.type === Type.Chapter}
	<NavigatedScrollNode {model} />
{:else if model.type === Type.Section}
	<ScrollNode {model} />
{:else if model.type === Type.Paragraph}
	<ParagraphNode {model} />
{:else if model.type === Type.Clause}
	{#if language}
		<RecursiveNode {model} {language} />
	{:else}
		<ParagraphNode {model} />
	{/if}
{:else}
	<p>Unknown node type {model.type} or language is not set.</p>
{/if}
