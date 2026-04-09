export enum State {
	Initializing = 'initializing',
	Loading = 'loading',
	Ready = 'ready',
	Error = 'error'
}

export abstract class Stated {
	private _state = $state(State.Initializing);

	public get state() {
		return this._state;
	}

	protected set state(value: State) {
		this._state = value;
	}
}
