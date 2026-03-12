<script lang="ts">
	import { resolve } from '$app/paths';
	import Main from '$lib/components/Main.svelte';
	import { Avatar, Button, Tabs, Tooltip, type AvatarImageLoadingStatus } from 'bits-ui';
	import { IsInViewport } from 'runed';
	import { getData } from './data.remote';

	let hasBeenInViewport = $state(false);
	let targetNode = $state<HTMLButtonElement | null>(null);
	let loadingStatus = $state<AvatarImageLoadingStatus>(null!);
	const inViewport = new IsInViewport(() => targetNode, { rootMargin: '200px 0px', threshold: 0 });

	$effect(() => {
		if (inViewport.current && !hasBeenInViewport) {
			hasBeenInViewport = true;
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Tabs.Root value="account" class="w-[400px]">
	<svelte:boundary>
		{#snippet pending()}
			Loading...
		{/snippet}
		{#snippet failed()}
			Errored
		{/snippet}

		<Main data={await getData()} />
	</svelte:boundary>
</Tabs.Root>

<Button.Root href={resolve('/hello-world')}>Button</Button.Root>

<a href={resolve('/hello-world')} style="display: block;">Link test</a>

<img src="https://placehold.co/150x150" alt="Placeholder" />

<Tooltip.Root>
	<Tooltip.Trigger bind:ref={targetNode}>
		{#snippet child({ props })}
			<div {...props}>
				{#if hasBeenInViewport}
					<Avatar.Root bind:loadingStatus>
						<Avatar.Image
							loading="lazy"
							src="https://avatars.githubusercontent.com/u/23617963"
							alt="svelte"
						/>
						{#if loadingStatus === 'loading'}
							Loading...
						{:else}
							<Avatar.Fallback>Fallback</Avatar.Fallback>
						{/if}
					</Avatar.Root>
				{:else}
					Not in viewport yet
				{/if}
			</div>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Add to library</p>
	</Tooltip.Content>
</Tooltip.Root>
