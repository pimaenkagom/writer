<script lang="ts">
	import { delimiter, getSelectedLanguages } from '$lib/states/contents/languages.svelte';
	import { setSetting } from '$lib/states/helpers/settings.svelte';

	$effect(() => {
		setSetting('languages', getSelectedLanguages().join(delimiter));
	});
</script>
