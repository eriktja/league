import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '$lib/firebase';

export const signUpWithEmailPassword = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};
