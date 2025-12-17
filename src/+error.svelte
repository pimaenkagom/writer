<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="section">
	<div class="container">
		<h1 class="title">{page.status}</h1>
		<p class="subtitle">{page.error?.message}</p>
	</div>
</section>
