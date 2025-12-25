<script lang="ts">
	import Book from '$lib/components/nodes/Book.svelte';
	import Chapter from '$lib/components/nodes/Chapter.svelte';
	import Collection from '$lib/components/nodes/Collection.svelte';
	import Library from '$lib/components/nodes/Library.svelte';
	import Paragraph from '$lib/components/nodes/Paragraph.svelte';
	import Part from '$lib/components/nodes/Part.svelte';
	import Section from '$lib/components/nodes/Section.svelte';
	import Clause from '$lib/layout/Clause.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model, language }: { model: Basenode; language?: string | undefined } = $props();
</script>

{#if model.type === 'library'}
	<Library {model} />
{:else if model.type === 'collection'}
	<Collection {model} />
{:else if model.type === 'book'}
	<Book {model} />
{:else if model.type === 'part'}
	<Part {model} />
{:else if model.type === 'chapters'}
	<Chapter {model} />
{:else if model.type === 'section'}
	<Section {model} />
{:else if model.type === 'paragraph'}
	<Paragraph {model} />
{:else if model.type === 'clause' && language}
	<Clause {model} {language} />
{:else}
	<p>Unknown node type {model.type} or language is not set.</p>
{/if}
