<script lang="ts">
	import type { Basenode } from '$lib/models/basenode.model';
	import { getChildnodes } from '$lib/utilities/nodes/children';
	import {
		innerHeight,
		online,
		outerHeight,
		screenLeft,
		screenTop,
		scrollY
	} from 'svelte/reactivity/window';
	import MenuNodeHead from './helper/MenuNodeHead.svelte';
	import VisibilityNode from './VisibilityNode.svelte';

	const { model }: { model: Basenode } = $props();
	const children = $derived(getChildnodes(model));
</script>

<MenuNodeHead {model} />

<section class="section">
	<div id="screen" class="container-fluid"></div>
</section>

<section id="screen" class="section">
	<div class="container">
		{#each children as alternatives, index}
			{#each alternatives as child}
				<VisibilityNode model={child} />
			{/each}
		{/each}
	</div>
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
		M {document.getElementById('main')?.clientHeight}
		S {document.getElementById('screen')?.clientHeight}
	</div>
</section>
