import { auth, db } from '$lib/firebase';
import { Role } from '$lib/models/helpers/roles.model';
import type { State } from '$lib/models/helpers/state.model';
import type { User } from '$lib/models/helpers/user.model';
import {
	createUserWithEmailAndPassword,
	EmailAuthProvider,
	reauthenticateWithCredential,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	verifyBeforeUpdateEmail
} from 'firebase/auth';

import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';

export const user = $state<State<User>>({
	state: 'init',
	value: {
		user: null,
		roles: []
	}
});

auth?.onAuthStateChanged(async (firebaseUser) => {
	user.state = 'loading';

	user.value.user = firebaseUser;
	if (firebaseUser && db) {
		const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
		if (userDoc.exists()) {
			user.value.roles = userDoc.data().roles ?? [];
		} else {
			user.value.roles = [];
		}
	} else {
		user.value.roles = [];
	}

	user.state = 'ready';
});

export async function login(email: string, password: string) {
	if (auth) {
		await signInWithEmailAndPassword(auth, email, password);
	}
}

export async function resetPassword(email: string) {
	if (auth) {
		await sendPasswordResetEmail(auth, email);
	}
}

export async function resetEmail(email: string, password: string) {
	if (user.value.user) {
		await reauthenticateWithCredential(
			user.value.user,
			EmailAuthProvider.credential(user.value.user.email!, password)
		);
		await verifyBeforeUpdateEmail(user.value.user, email);
	}
}

export async function signup(email: string, password: string) {
	if (!auth) {
		return;
	}

	await createUserWithEmailAndPassword(auth, email, password);

	await setDoc(doc(db!, 'users', user.value.user!.uid), {
		roles: [Role.Reader]
	});
	user.value.roles = [Role.Reader];
}

export async function logout() {
	if (auth) {
		await signOut(auth);
	}
}

export async function deleteAccount(password: string) {
	if (!db || !user.value.user) {
		return;
	}

	await reauthenticateWithCredential(
		user.value.user,
		EmailAuthProvider.credential(user.value.user.email!, password)
	);
	const userRef = doc(db!, 'users', user.value.user.uid);
	await deleteDoc(userRef);

	await user.value.user.delete();
}

export function isAuthenticated() {
	return user.value.user !== null;
}

export function hasRole(role: string): boolean {
	return user.value.roles.includes(role);
}

export function isAdmin() {
	return hasRole(Role.Admin);
}

export function hasAnyRole(roles: string[]): boolean {
	return roles.some((role) => user.value.roles.includes(role));
}

export function hasAllRoles(roles: string[]): boolean {
	return roles.every((role) => user.value.roles.includes(role));
}
