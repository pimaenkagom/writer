<script lang="ts">
	import ChildrenEditor from '$lib/components/nodes/helper/ChildrenEditor.svelte';
	import NodeEditor from '$lib/components/nodes/helper/NodeEditor.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { Type } from '$lib/models/type.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="box">
	<NodeEditor {model} />
</div>

{#if model.type !== Type.Clause}
	<ChildrenEditor {model} />
{/if}
