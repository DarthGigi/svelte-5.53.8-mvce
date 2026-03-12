<script lang="ts">
	import { Tabs } from 'bits-ui';
	import {
		getProfileContext,
		ProfileContext,
		setProfileContext
	} from '../../context/createContext.svelte';
	import Sections from './Sections.svelte';

	let { data }: { data: { items: number[]; profile: { username: string } } } = $props();

	const items = $derived(data.items);
	const profile = $derived(data.profile);

	// Initialize the profile context
	const profileClass = new ProfileContext();
	setProfileContext(profileClass);

	// Update the profile context when the data changes
	$effect.pre(() => {
		profileClass.current = profile;
	});
</script>

<Tabs.List>
	{#each items as item (item)}
		<Tabs.Trigger value={item.toString()}>{item}</Tabs.Trigger>
	{/each}
</Tabs.List>

{#each items as item (item)}
	<Tabs.Content value={item.toString()}>Make changes to your {item} here.</Tabs.Content>
{/each}

{#if getProfileContext().current}
	<Sections />
{/if}
