<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import ChildrenEditor from './ChildrenEditor.svelte';
	import NodePreviewer from './NodePreviewer.svelte';

	const { model }: { model: Basenode } = $props();
</script>

{model.id}

<NodePreviewer id={model.id} />

<ChildrenEditor {model} />
