<script lang="ts">
	let { children, isActive } = $props();

	$effect(() => {
		(async () => {
			if (isActive) {
				await document.documentElement.requestFullscreen();
				console.log('entered fullscreen');
			} else {
				await document.exitFullscreen();
				console.log('exited fullscreen');
			}
		})();
	});
</script>

{isActive ? 'slides' : 'scroll'}
{@render children?.()}
