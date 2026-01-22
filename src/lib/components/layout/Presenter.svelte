<script lang="ts">
	let { children, isActive } = $props();

	$effect(() => {
		(async () => {
			if (isActive) {
				if (!document.fullscreenElement) {
					await document.documentElement.requestFullscreen();
				}
			} else {
				if (document.fullscreenElement) {
					await document.exitFullscreen();
				}
			}
		})();
	});
</script>

{@render children?.()}
