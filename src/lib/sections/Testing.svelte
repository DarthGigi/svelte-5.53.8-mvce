<script lang="ts">
	import { getProfileContext } from '../../context/createContext.svelte';

	const profile = $derived(getProfileContext().current);
</script>

{#if profile}
	<h1>{profile.username}</h1>
{/if}
