import { writable } from 'svelte/store';

export function testStore(name, initialValue) {
	return writable(initialValue);
}
