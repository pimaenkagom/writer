<script lang="ts">
	let { children, isActive } = $props();

	$effect(() => {
		(async () => {
			if (isActive) {
				if (!document.fullscreenElement) {
					await document.documentElement.requestFullscreen();
				}
				console.log('entered fullscreen');
			} else {
				if (document.fullscreenElement) {
					await document.exitFullscreen();
				}
				console.log('exited fullscreen');
			}
		})();
	});
</script>

{isActive ? 'slides' : 'scroll'}
{@render children?.()}
