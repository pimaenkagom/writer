const ids = new Set<string>();

export function generateId() {
	const id = crypto.randomUUID().toUpperCase();

	if (ids.has(id)) {
		return generateId();
	}

	ids.add(id);
	return id;
}
