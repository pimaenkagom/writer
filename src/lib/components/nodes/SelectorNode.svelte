<script lang="ts">
	import MenuNode from '$lib/components/nodes/MenuNode.svelte';
	import NavigatedScrollNode from '$lib/components/nodes/NavigatedScrollNode.svelte';
	import ParagraphNode from '$lib/components/nodes/ParagraphNode.svelte';
	import RecursiveNode from '$lib/components/nodes/RecursiveNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { NodeType } from '$lib/models/node-type.model';
	import { settings } from '$lib/states/settings.svelte';
	import ScrollNode from './ScrollNode.svelte';
	import SlidesNode from './SlidesNode.svelte';

	const { model, language }: { model: Basenode; language?: string } = $props();
	const isSliding = $derived(settings.value.mode.current === 'slides');
</script>

{#if model.type === NodeType.Library}
	<MenuNode {model} />
{:else if model.type === NodeType.Collection}
	<MenuNode {model} />
{:else if model.type === NodeType.Book}
	<MenuNode {model} />
{:else if model.type === NodeType.Part}
	<MenuNode {model} />
{:else if model.type === NodeType.Chapter}
	{#if isSliding}
		<MenuNode {model} />
	{:else}
		<NavigatedScrollNode {model} />
	{/if}
{:else if model.type === NodeType.Section}
	{#if isSliding}
		<SlidesNode {model} />
	{:else}
		<ScrollNode {model} />
	{/if}
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
