import { auth, db } from '$lib/firebase';
import type { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface UserState {
	user: User | null;
	roles: string[];
	loading: boolean;
}

export const adminRole = 'admin';

let state = $state<UserState>({
	user: null,
	roles: [],
	loading: true
});

// Initialize auth listener
if (auth) {
	auth.onAuthStateChanged(async (firebaseUser) => {
		state.user = firebaseUser;

		if (firebaseUser && db) {
			// Load user roles from Firestore
			const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
			if (userDoc.exists()) {
				state.roles = userDoc.data().roles ?? [];
			} else {
				state.roles = [];
			}
		} else {
			state.roles = [];
		}

		state.loading = false;
	});
}

export function hasRole(role: string): boolean {
	return state.roles.includes(role);
}

export function hasAnyRole(roles: string[]): boolean {
	console.log('Checking roles:', roles, 'against user roles:', state.roles);
	return roles.some((role) => state.roles.includes(role));
}

export function hasAllRoles(roles: string[]): boolean {
	return roles.every((role) => state.roles.includes(role));
}

export const userState = {
	get user() {
		return state.user;
	},
	get roles() {
		return state.roles;
	},
	get loading() {
		return state.loading;
	},
	get isAuthenticated() {
		return state.user !== null;
	}
};
