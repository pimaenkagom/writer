<script lang="ts">
	import BreadcrumbBar from '$lib/components/helpers/BreadcrumbBar.svelte';
	import Presenter from '$lib/components/layout/Presenter.svelte';
	import NesterNode from '$lib/components/nodes/NesterNode.svelte';
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import { settings } from '$lib/states/helpers/settings.svelte';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	const root: Basenode = {
		id: '7047EB00-02DF-11F1-B558-0800200C9A66',
		type: 'root',
		children: libraries.values.map((lib) => lib.id),
		users: [],
		value: '938B9CA6-57CA-4201-9A6B-FD1E4BFC2B53',
		shown: false,
		tags: [],
		childrenTypes: libraries.values.map((lib) => lib.type)
	};
</script>

<Presenter isActive={settings.value.mode.current === 'slides'}>
	<BreadcrumbBar />
	<NesterNode model={root} />
</Presenter>
