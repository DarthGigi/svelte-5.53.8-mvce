<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Tooltip } from 'bits-ui';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>
