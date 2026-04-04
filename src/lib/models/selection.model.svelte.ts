import type { Basenode } from '$lib/models/basenode.model';
import { State, Stated } from '$lib/models/helpers/state.model.svelte';
import type { NodeType } from '$lib/models/node-type.model';
import { getCollectionForNodeType, supertypeOf } from '$lib/states/nodes.svelte';
import { notify } from '$lib/states/notifications.svelte';
import { setSetting, settings } from '$lib/states/settings.svelte';
import { order } from '$lib/utilities/nodes/order';
import { untrack } from 'svelte';

function getSettingsValue(nodeType: NodeType) {
	return JSON.parse(settings.value[nodeType].current) as [number, number] | null;
}

export class Selection extends Stated {
	private _indices = $state<Record<NodeType, [number, number] | null>>(
		Object.fromEntries(order.map((nodeType) => [nodeType, null])) as Record<
			NodeType,
			[number, number] | null
		>
	);

	private _nodes = $state<Record<NodeType, Basenode | null>>(
		Object.fromEntries(order.map((nodeType) => [nodeType, null])) as Record<
			NodeType,
			Basenode | null
		>
	);

	private selectedNodeType = $derived(
		order.findLast((nodeType) => this._indices[nodeType] !== null) ?? null
	);

	private loadSelectionFromSettings() {
		this.state = State.Loading;

		for (const nodeType of order) {
			const loadedIndex = getSettingsValue(nodeType);

			this._indices[nodeType] = loadedIndex;

			if (loadedIndex !== null) {
				const isRoot = nodeType === order[0];
				if (isRoot) {
					this._nodes[nodeType] = getCollectionForNodeType(nodeType).values[loadedIndex[0]];
				} else {
					const parentNode = this._nodes[supertypeOf(nodeType)];
					if (parentNode === null) {
						throw new Error(
							`Cannot load selection for ${nodeType} because supertype is not loaded.`
						);
					}

					const nodeId = parentNode.children[loadedIndex[0]][loadedIndex[1]];
					this._nodes[nodeType] = getCollectionForNodeType(nodeType).items[nodeId];
				}
			}
		}
		this.state = State.Ready;
	}

	public get indices() {
		if (untrack(() => this.state !== State.Ready)) {
			Promise.resolve().then(() => {
				if (this.state !== State.Ready) this.loadSelectionFromSettings();
			});
		}

		return this._indices;
	}

	public get nodes() {
		if (untrack(() => this.state !== State.Ready)) {
			Promise.resolve().then(() => {
				if (this.state !== State.Ready) this.loadSelectionFromSettings();
			});
		}

		return this._nodes;
	}

	public get node() {
		if (this.selectedNodeType === null) {
			return null;
		}

		return this.nodes[this.selectedNodeType];
	}

	public get parent() {
		if (this.selectedNodeType === null) {
			return null;
		}

		if (this.selectedNodeType === order[0]) {
			return null;
		}

		return this.nodes[supertypeOf(this.selectedNodeType)];
	}

	public get isRoot() {
		return this.selectedNodeType === null;
	}

	private get isFirstChild() {
		if (this.selectedNodeType === null) {
			return false;
		}

		const selected = this.indices[this.selectedNodeType];
		if (selected === null) {
			return false;
		}

		return selected[0] === 0;
	}

	private get isLastChild() {
		if (this.selectedNodeType === null) {
			return false;
		}

		const selected = this.indices[this.selectedNodeType];
		if (selected === null) {
			return false;
		}

		const parent = this.parent;
		if (parent === null) {
			return false;
		}

		return selected[0] === parent.children.length - 1;
	}

	private isOutOfRange(index: number, alternative: number) {
		if (index < 0) {
			return true;
		}

		if (alternative < 0) {
			return true;
		}

		if (this.node === null) {
			return true;
		}

		if (this.node.children.length <= index) {
			return true;
		}

		if (this.node.children[index].length <= alternative) {
			return true;
		}

		return false;
	}

	public select(index: number, alternative: number = 0) {
		if (this.isOutOfRange(index, alternative)) {
			notify(
				`Cannot select child at index ${index} and alternative ${alternative} because it is out of range.`,
				'error'
			);
		}

		this.state = State.Loading;
		const nodeType = this.selectedNodeType ?? order[0];

		// set settings
		setSetting(nodeType, JSON.stringify([index, alternative]));

		// set indices
		this._indices[nodeType] = [index, alternative];

		// set node
		if (this.node === null) {
			this._nodes[nodeType] = getCollectionForNodeType(nodeType).values[0];
		} else {
			const newNodeId = this.node.children[index][alternative];
			this._nodes[nodeType] = getCollectionForNodeType(nodeType).items[newNodeId];
		}

		this.state = State.Ready;
	}

	public selectFirstChild() {
		this.select(0);
	}

	public selectLastChild() {
		if (this.node === null) {
			this.select(getCollectionForNodeType(order[0]).values.length - 1);
		} else {
			const indexOfLastChild = this.node.children.length - 1;
			this.select(indexOfLastChild);
		}
	}

	public unselect() {
		if (this.selectedNodeType === null) {
			return;
		}

		setSetting(this.selectedNodeType, JSON.stringify(null));
		this._indices[this.selectedNodeType] = null;
		this._nodes[this.selectedNodeType] = null;
	}

	public unselectUntilType(nodeType: NodeType) {
		while (this.selectedNodeType !== null && this.selectedNodeType !== nodeType) {
			this.unselect();
		}
	}

	private move(steps: number) {
		const nodeType = this.selectedNodeType;
		if (nodeType === null) {
			return;
		}

		const nodeIndex = this.indices[nodeType];
		if (nodeIndex === null) {
			return;
		}

		const newSelectedIndex = nodeIndex[0] + steps;

		this.unselect();

		if (!this.isOutOfRange(newSelectedIndex, 0)) {
			this.select(newSelectedIndex);
		}
	}

	public next() {
		this.move(1);
	}

	public previous() {
		this.move(-1);
	}
}
