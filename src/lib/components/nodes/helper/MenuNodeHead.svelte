<script lang="ts">
	import MultilingualTextSystemLanguage from '$lib/components/contents/mulltilinual-text/MultilingualTextSystemLanguage.svelte';
	import BreadcrumbBar from '$lib/components/helpers/BreadcrumbBar.svelte';
	import EditNodeButton from '$lib/components/nodes/helper/EditNodeButton.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { getMultilingualText } from '$lib/utilities/nodes/multilingual-texts';

	const { model }: { model: Basenode } = $props();

	const multilingualText = $derived(getMultilingualText(model));
</script>

<section class="section">
	<BreadcrumbBar />
	<div class="container">
		<div class="columns">
			<div class="column">
				<h1 class="title">
					<MultilingualTextSystemLanguage model={multilingualText} />
				</h1>
			</div>
			<div class="column is-narrow">
				<EditNodeButton {model} />
			</div>
		</div>
	</div>
</section>
