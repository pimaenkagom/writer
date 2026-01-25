import type { User as FirebaseUser } from 'firebase/auth';

export interface User {
	user: FirebaseUser | null;
	roles: string[];
}
