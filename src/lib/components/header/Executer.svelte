<script lang="ts">
	import { Type } from '$lib/models/helpers/type.model';
	import { libraries } from '$lib/states/nodes/nodes.svelte';

	function execute() {
		console.log('Execute button clicked');

		libraries.create({
			users: ['5C5AB17F-A194-4123-A4A0-D26CE5B0AA08'],
			type: Type.Library,
			value: '0D3818FC-B90B-4114-AAA3-DEBDD47E464E',
			shown: true,
			tags: [],
			children: [],
			childrenTypes: []
		});
	}
</script>

<button class="button" aria-label="Execute" onclick={execute}>
	<span class="icon is-small">
		<i class="fa-solid fa-terminal"></i>
	</span>
</button>
