import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { type User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyDhQjEElT_ucpLqgOJkcXitocT2jwH5M_0',
	authDomain: 'league-def22.firebaseapp.com',
	projectId: 'league-def22',
	storageBucket: 'league-def22.appspot.com',
	messagingSenderId: '559216934714',
	appId: '1:559216934714:web:20f5a7b10a0af4103fda03',
	measurementId: 'G-BH4KX9PXZT'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 *
 * @returns a store with the current firebase user
 */
function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn('Auth is not initialized or not in the browser');
		const { subscribe } = writable<User | null>(null);

		return { subscribe };
	}

	const { subscribe } = writable<User | null>(auth?.currentUser ?? null, (set) => {
		onAuthStateChanged(auth, (user) => {
			set(user);
		});

		// return () => unsubscribe();
	});

	return { subscribe };
}

export const user = userStore();
