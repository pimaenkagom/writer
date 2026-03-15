<script lang="ts">
	import MultilingualTextSystemLanguage from '$lib/components/contents/mulltilinual-text/MultilingualTextSystemLanguage.svelte';
	import type { Basenode } from '$lib/models/basenode.model';
	import { select } from '$lib/states/selection.svelte';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import { getMultilingualText } from '$lib/utilities/nodes/multilingual-texts';

	const { model }: { model: Basenode } = $props();
	const children = $derived(getChildnodes(model));
</script>

<section class="section">
	<div class="container">
		<aside class="menu">
			<p class="menu-label">Content</p>
			<ul class="menu-list">
				{#each children as alternatives, index}
					{#each alternatives as child}
						<li>
							<a href="#{child.id}" onclick={() => select(index)}>
								<MultilingualTextSystemLanguage model={getMultilingualText(child)} />
							</a>
						</li>
					{/each}
				{/each}
			</ul>
		</aside>
	</div>
</section>
