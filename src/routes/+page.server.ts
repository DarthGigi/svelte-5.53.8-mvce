import type { PageServerLoad } from './$types';

export const load = (async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
}) satisfies PageServerLoad;
