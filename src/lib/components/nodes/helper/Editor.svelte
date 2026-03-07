<script lang="ts">
	import ChildrenEditor from '$lib/components/nodes/helper/ChildrenEditor.svelte';
	import NodeEditor from '$lib/components/nodes/helper/NodeEditor.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { Type } from '$lib/models/helpers/type.model';

	const { model }: { model: Basenode } = $props();
</script>

<div class="box">
	<NodeEditor {model} />
</div>

{#if model.type !== Type.Clause}
	<ChildrenEditor {model} />
{/if}
