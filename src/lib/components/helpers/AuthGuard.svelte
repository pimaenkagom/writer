<script lang="ts">
	import { Role } from '$lib/models/helpers/roles.model';
	import { hasAnyRole, userState } from '$lib/states/helpers/user.svelte';
	import type { Snippet } from 'svelte';

	let { children, roles }: { children: Snippet; roles: string[] } = $props();
</script>

{#if userState.isAuthenticated}
	{#if hasAnyRole([Role.Admin]) || hasAnyRole(roles)}
		{@render children?.()}
	{/if}
{/if}
