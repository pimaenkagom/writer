<script lang="ts">
	import { adminRole, hasAnyRole, userState } from '$lib/states/helpers/user.svelte';
	import type { Snippet } from 'svelte';

	let { children, roles }: { children: Snippet; roles: string[] } = $props();
</script>

{#if userState.isAuthenticated}
	{#if hasAnyRole([adminRole]) || hasAnyRole(roles)}
		{@render children?.()}
	{/if}
{/if}
