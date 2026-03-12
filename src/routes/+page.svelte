<script lang="ts">
	import { resolve } from '$app/paths';
	import { Avatar, Tabs } from 'bits-ui';
	import { getImage } from './data.remote';
</script>

<Tabs.Root value="account">
	<Tabs.List>
		<Tabs.Trigger value="account">Account</Tabs.Trigger>
		<Tabs.Trigger value="password">Password</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="account">Make changes to your account here.</Tabs.Content>
	<Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>

<a href={resolve('/hello-world')} style="display: block;">Link test</a>

<Avatar.Root>
	<svelte:boundary>
		<Avatar.Image loading="lazy" src={await getImage()} alt="Logo" />

		{#snippet pending()}
			<Avatar.Image loading="lazy" src="https://placehold.co/24x24" alt="Logo" />
		{/snippet}

		{#snippet failed()}
			Failed to load image
		{/snippet}
	</svelte:boundary>

	<Avatar.Fallback>Fallback</Avatar.Fallback>
</Avatar.Root>
