<script lang="ts">
	let { children } = $props();
</script>

<span class="noto-sans-coptic-regular">
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
</style>
