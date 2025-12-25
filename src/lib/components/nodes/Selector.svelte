<script lang="ts">
	import Library from '$lib/components/nodes/Library.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';

	let { model }: { model: Basenode } = $props();
</script>

{#if model.type === 'library'}
	<Library {model} />
{:else if model.type === 'collection'}
	<!-- TODO -->
{:else if model.type === 'book'}
	<!-- TODO -->
{:else if model.type === 'part'}
	<!-- TODO -->
{:else if model.type === 'chapters'}
	<!-- TODO -->
{:else if model.type === 'section'}
	<!-- TODO -->
{:else if model.type === 'paragraph'}
	<!-- TODO -->
{:else if model.type === 'clause'}
	<!-- TODO -->
{:else}
	<p>Unknown node type: {model.type}</p>
{/if}
