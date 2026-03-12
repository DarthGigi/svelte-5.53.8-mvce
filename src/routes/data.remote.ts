import { query } from '$app/server';

export const getData = query(async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
	return {
		message: 'Hello from the server!',
		items: [1, 2, 3, 4, 5],
		profile: {
			username: 'svelte-dev'
		}
	};
});
