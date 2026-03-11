<script lang="ts">
	import BreadcrumbBar from '$lib/components/helpers/BreadcrumbBar.svelte';
	import ChildrenMenu from '$lib/components/nodes/helper/ChildrenMenu.svelte';
	import SelectorNode from '$lib/components/nodes/SelectorNode.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { Type } from '$lib/models/type.model';
	import { selection } from '$lib/states/helpers/selection.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	const root: Basenode = {
		id: '7047EB00-02DF-11F1-B558-0800200C9A66',
		type: Type.Clause,
		children: libraries.values.map((lib) => [lib.id]),
		users: [],
		value: '938B9CA6-57CA-4201-9A6B-FD1E4BFC2B53',
		shown: false,
		tags: []
	};
</script>

{#if selection.value.library === null}
	<ChildrenMenu model={root} />
{:else}
	<BreadcrumbBar />
	<SelectorNode model={libraries.values[selection.value.library[0]]} />
{/if}
