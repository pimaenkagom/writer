<script lang="ts">
	import type { Text } from '$lib/models/contents/text.model';

	let { model }: { model: Text } = $props();
</script>

{model.value}
