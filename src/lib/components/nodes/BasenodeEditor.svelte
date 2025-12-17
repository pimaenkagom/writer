<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';

	let {
		model = null,
		isSaved = $bindable(false)
	}: { model?: Basenode | null; isSaved?: boolean | null } = $props();

	const isNew = model == null;

	let basenode = $state<Basenode>(
		isNew
			? {
					id: 'new',
					users: [],
					type: 'basenode',
					value: '938B9CA6-57CA-4201-9A6B-FD1E4BFC2B53',
					shown: true,
					tags: [],
					children: [],
					childrenTypes: []
				}
			: $state.snapshot(model)
	);

	function save() {
		const snapshot = $state.snapshot(basenode);
		if (isNew) {
			libraries.create(snapshot);
		} else {
			libraries.update(snapshot.id, snapshot);
		}
		isSaved = true;
	}
</script>

<div class="columns">
	{#each Object.entries(multilingualTexts.items[basenode.value].texts) as [language, text]}
		<div class="column">
			<p><strong>{capitalize(language)}</strong></p>
			<p>{text.value}</p>
		</div>
	{/each}
</div>
<div class="columns">
	<div class="column">
		<div class="field is-grouped is-grouped-right">
			<p class="control">
				<button class="button is-primary" onclick={save}>
					<span class="icon">
						<i class="fa-solid fa-floppy-disk"></i>
					</span>
					<span>Save</span>
				</button>
			</p>
		</div>
	</div>
</div>
