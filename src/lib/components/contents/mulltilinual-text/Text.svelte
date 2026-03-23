<script lang="ts">
	import type { Text } from '$lib/models/text.model';

	let { model }: { model: Text } = $props();
</script>

{model.value}
