export function capitalize(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function titlize(value: string) {
	return value.replace(/\b\w/g, (c) => c.toUpperCase());
}
