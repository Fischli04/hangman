import { writable, type Writable } from 'svelte/store';
import type { LettersSet } from './types';

const letters = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
    M: false,
    N: false,
    O: false,
    P: false,
    Q: false,
    R: false,
    S: false,
    T: false,
    U: false,
    V: false,
    W: false,
    X: false,
    Y: false,
    Z: false,
}

export const Letters: Writable<LettersSet> = writable(letters);

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		reset: () => set(0)
	};
}

export const WrongPresses = createCount();

export const RightPresses = createCount();

export const SelectedWord = writable("");

export const Reveal = writable(false);