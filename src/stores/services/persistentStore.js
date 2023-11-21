import { writable } from 'svelte/store';

/**
 * @param {string} key
 * @param {null} startValue
 */

export function persistentStore(key, startValue) {
	if (typeof window === 'undefined') {
		return writable(startValue);
	}
	const storedValue = localStorage.getItem(key);
	const initialValue = storedValue === null ? startValue : JSON.parse(storedValue);
	const store = writable(initialValue);

	store.subscribe((value) => {
		localStorage.setItem(key, JSON.stringify(value));
	});

	return store;
}
