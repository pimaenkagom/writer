<script lang="ts">
	import { clearNotification, notifications } from '$lib/states/helpers/notifications.svelte';
</script>

{#if notifications.value.length !== 0}
	<section class="section">
		{#each notifications.value as notification, index}
			<div class="block">
				<div class="notification">
					<button
						class="delete"
						aria-label="Discard notification"
						onclick={() => clearNotification(index)}
					>
					</button>
					{notification}
				</div>
			</div>
		{/each}
	</section>
{/if}
