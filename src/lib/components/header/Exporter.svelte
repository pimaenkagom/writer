<script lang="ts">
	import { download } from '$lib/utilities/nodes/exporter';
</script>

<button class="button" aria-label="Execute" onclick={download}>
	<span class="icon is-small">
		<i class="fa-solid fa-download"></i>
	</span>
</button>
