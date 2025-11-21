export interface State<T> {
	state: 'init' | 'loading' | 'ready' | 'error';
	value: T;
}
