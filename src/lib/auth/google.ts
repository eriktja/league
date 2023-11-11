import { auth } from '$lib/firebase';
import { redirect } from '@sveltejs/kit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();
	const user = await signInWithPopup(auth, provider);
	// console.log(user);
}

export function logOut() {
	console.log('Log out');
	signOut(auth);
}
