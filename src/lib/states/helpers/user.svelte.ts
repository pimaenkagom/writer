import { auth, db } from '$lib/firebase';
import type { State } from '$lib/models/helpers/state.model';
import type { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// TODO Refactor

interface UserData {
	user: User | null;
	roles: string[];
}

const state = $state<State<UserData>>({
	state: 'init',
	value: {
		user: null,
		roles: []
	}
});

// Initialize auth listener
if (auth) {
	state.state = 'loading';

	auth.onAuthStateChanged(async (firebaseUser) => {
		state.value.user = firebaseUser;

		if (firebaseUser && db) {
			// Load user roles from Firestore
			const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
			if (userDoc.exists()) {
				state.value.roles = userDoc.data().roles ?? [];
			} else {
				state.value.roles = [];
			}
		} else {
			state.value.roles = [];
		}

		state.state = 'ready';
	});
}

export function hasRole(role: string): boolean {
	return state.value.roles.includes(role);
}

export function hasAnyRole(roles: string[]): boolean {
	return roles.some((role) => state.value.roles.includes(role));
}

export function hasAllRoles(roles: string[]): boolean {
	return roles.every((role) => state.value.roles.includes(role));
}

export const userState = {
	get state() {
		return state.state;
	},
	get user() {
		return state.value.user;
	},
	get roles() {
		return state.value.roles;
	},
	get isAuthenticated() {
		return state.value.user !== null;
	}
};
