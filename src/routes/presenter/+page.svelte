<script lang="ts">
	import { onMount } from 'svelte';
	import {
		innerHeight,
		online,
		outerHeight,
		screenLeft,
		screenTop,
		scrollY
	} from 'svelte/reactivity/window';

	let strings = Array.from(
		{ length: 50 },
		(_, __) =>
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus massa ac orci efficitur, vitae varius urna hendrerit. Pellentesque iaculis venenatis fermentum. Proin eget ex nec sapien viverra viverra quis et dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dui accumsan, pellentesque dolor condimentum, feugiat odio. Suspendisse tincidunt, quam at condimentum iaculis, dui augue varius risus, eget cursus eros nulla id tortor.'
		// 'Praesent quam mauris, aliquam id sodales a, ornare ac lectus. In volutpat sem sodales aliquet vulputate. Aliquam porta lectus eget interdum mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eu sodales turpis. Integer sollicitudin consequat dui, eget fermentum mauris ultricies nec. Nullam fringilla tincidunt tempus.'
	);

	onMount(() => {
		for (let i = 0; i < strings.length; ++i) {
			const p = document.createElement('p');
			p.textContent = strings[i];
			document.getElementById('screen')?.appendChild(p);
		}
	});
</script>

<section class="section">
	<div id="screen" class="container-fluid"></div>
</section>
<section class="section">
	<div class="container">
		{online.current}
		{innerHeight.current}
		{outerHeight.current}
		{screenLeft.current}
		{screenTop.current}
		{scrollY.current}
	</div>
	<div class="container">
		{document.getElementById('main')?.clientHeight}
		{document.getElementById('screen')?.clientHeight}
	</div>
</section>

<section class="section">
	<div class="container-fluid">
		<!--
		<table class="table is-fullwidth is-hoverable">
			<thead>
				<tr>
					<th>Deutsch</th>
					<th>Deutsch</th>
					<th>Deutsch</th>
				</tr>
			</thead>
			<tbody>
				{#each strings as string, index}
					<tr>
						<td>{string}</td>
						<td>{string}</td>
						<td>{string}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		-->
	</div>
</section>
