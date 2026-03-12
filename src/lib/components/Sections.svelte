<script lang="ts">
	import { Tabs } from 'bits-ui';

	const SECTIONS = {
		Testing: () => import('$lib/sections/Testing.svelte')
	} satisfies Record<string, () => Promise<{ default: unknown }>>;

	const internalState = $state({
		tabValue: 'Testing'
	});
</script>

{#key internalState.tabValue}
	{#if internalState.tabValue in SECTIONS}
		<Tabs.Root
			value={internalState.tabValue}
			class="contents"
			data-section={internalState.tabValue}
		>
			<Tabs.Content value={internalState.tabValue} class="section">
				{#await SECTIONS[internalState.tabValue as keyof typeof SECTIONS]()}
					<div>Loading...</div>
				{:then { default: Component }}
					<svelte:boundary>
						{#snippet pending()}
							Loading...
						{/snippet}
						{#snippet failed()}
							Something went wrong loading this section.
						{/snippet}
						<Component />
					</svelte:boundary>
				{:catch}
					<div>Failed to load the section.</div>
				{/await}
			</Tabs.Content>
		</Tabs.Root>
	{:else}
		<div>Section not found.</div>
	{/if}
{/key}
