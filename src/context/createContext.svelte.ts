import { createContext } from 'svelte';

export class ProfileContext {
	#current: { username: string } | null = $state(null);

	get current() {
		return this.#current;
	}

	set current(value: { username: string } | null) {
		this.#current = value;
	}
}

export const [getProfileContext, setProfileContext] = createContext<ProfileContext>();
