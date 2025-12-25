<script lang="ts">
	import { collections } from '$lib/states/nodes/nodes.svelte';

	function execute() {
		console.log('Execute button clicked');
		collections.create({
			users: ['1B31A044-0119-4251-A656-A63A2E22ADE9'],
			type: 'collection',
			value: '1563E323-A203-40B3-AB5E-6A990BD4CE66',
			shown: true,
			tags: [],
			children: [],
			childrenTypes: []
		});
	}
</script>

<section class="section">
	<div class="container">
		<button class="button" aria-label="Execute" onclick={execute}>
			<span class="icon is-small">
				<i class="fa-solid fa-terminal"></i>
			</span>
		</button>
	</div>
</section>
