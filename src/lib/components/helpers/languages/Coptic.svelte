<script lang="ts">
	let { children } = $props();
</script>

<span class="is-size-5 noto-sans-coptic-regular athanasius">
	{@render children?.()}
</span>

<style>
	@font-face {
		font-family: 'Noto Sans Coptic';
		font-style: normal;
		font-weight: 400;
		src: local('Noto Sans Coptic'), url(/fonts/noto-sans-coptic-regular.ttf);
	}

	.noto-sans-coptic-regular {
		font-family: 'Noto Sans Coptic';
	}

	@font-face {
		font-family: 'Athanasius';
		font-style: normal;
		font-weight: 400;
		src: local('Athanasius'), url(/fonts/athanasius.ttf);
	}

	.athanasius {
		font-family: 'Athanasius';
	}
</style>
