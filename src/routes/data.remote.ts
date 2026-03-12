import { query } from '$app/server';

export const getImage = query(async () => {
	return 'https://placehold.co/24x24';
});
