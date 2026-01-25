<script lang="ts">
	import { hasAnyRole, isAdmin, isAuthenticated } from '$lib/states/helpers/user.svelte';
	import type { Snippet } from 'svelte';

	let { children, roles }: { children: Snippet; roles: string[] } = $props();
</script>

{#if isAuthenticated()}
	{#if isAdmin() || hasAnyRole(roles)}
		{@render children?.()}
	{/if}
{/if}
