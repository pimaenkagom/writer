<script lang="ts">
	import ChildrenEditor from '$lib/components/nodes/helper/ChildrenEditor.svelte';
	import NodeEditor from '$lib/components/nodes/helper/NodeEditor.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { NodeType } from '$lib/models/node-type.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="box">
	<NodeEditor {model} />
</div>

{#if model.type !== NodeType.Clause}
	<ChildrenEditor {model} />
{/if}
