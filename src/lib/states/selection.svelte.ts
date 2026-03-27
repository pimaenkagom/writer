import type { Basenode } from '$lib/models/basenode.model';
import type { State } from '$lib/models/helpers/state.model';
import type { NodeType } from '$lib/models/node-type.model';
import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
import { setSetting, settings } from '$lib/states/settings.svelte';
import { order } from '$lib/utilities/nodes/order';

let steps = 1;

function getSettingsValue(nodeType: NodeType) {
	return JSON.parse(settings.value[nodeType].current) as [number, number] | null;
}

function isOverflowing(newIndex: number) {
	const nodes = getSelectedNodes();
	const parentOfSelected = nodes.toReversed()[1];
	return parentOfSelected.children.length <= newIndex;
}

function isUnderflowing(newIndex: number) {
	return newIndex < 0;
}

function isFirstChild() {
	for (const nodeType of order.toReversed()) {
		const selected = selection.value[nodeType];
		if (selected !== null) {
			const indexOfLastChild = 0;
			return selected[0] === indexOfLastChild;
		}
	}
}

function isLastChild() {
	for (const nodeType of order.toReversed()) {
		const selected = selection.value[nodeType];
		if (selected !== null) {
			const nodes = getSelectedNodes();
			const parentOfSelected = nodes.toReversed()[1];
			const indexOfLastChild = parentOfSelected.children.length - 1;
			return selected[0] === indexOfLastChild;
		}
	}
}

function selectFirstChild() {
	select(0);
}

function selectLastChild() {
	const nodes = getSelectedNodes();
	const indexOfLastChild = nodes.toReversed()[0].children.length - 1;
	select(indexOfLastChild);
}

export const selection = $state<State<Record<NodeType, [number, number] | null>>>({
	state: 'init',
	value: Object.fromEntries(order.map((nodeType) => [nodeType, null])) as Record<
		NodeType,
		[number, number] | null
	>
});

export function loadSelectionFromSettings() {
	selection.state = 'loading';
	for (const nodeType of order) {
		selection.value[nodeType] = getSettingsValue(nodeType);
	}
	selection.state = 'ready';
}

export function getSelectedNodes() {
	const result: Basenode[] = [];

	for (const nodeType of order) {
		const selected = selection.value[nodeType];

		if (selected === null) {
			break;
		}

		const isRoot = result.length === 0;
		if (isRoot) {
			result.push(getCollectionForNodeType(nodeType).values[selected[0]]);
		} else {
			const nextNodeId = result[result.length - 1].children[selected[0]][selected[1]];
			result.push(getCollectionForNodeType(nodeType).items[nextNodeId]);
		}
	}

	return result;
}

export function select(index: number, alternative: number = 0) {
	for (const nodeType of order) {
		if (selection.value[nodeType] === null) {
			setSetting(nodeType, JSON.stringify([index, alternative]));
			selection.value[nodeType] = [index, alternative];
			break;
		}
	}
}

export function next(jump: number = 1) {
	if (jump < 1) {
		jump = 1;
	}

	steps = jump;
	for (const nodeType of order.toReversed()) {
		const nodeIndex = selection.value[nodeType];
		if (nodeIndex !== null) {
			const newSelectedIndex = nodeIndex[0] + jump;

			if (isOverflowing(newSelectedIndex)) {
				unselect();
				if (isLastChild()) {
					unselect();
				} else {
					next();
					selectFirstChild();
				}
			} else {
				unselect();
				select(newSelectedIndex);
			}
			break;
		}
	}
}

export function previous(jump: number = steps) {
	for (const nodeType of order.toReversed()) {
		const nodeIndex = selection.value[nodeType];
		if (nodeIndex !== null) {
			const newSelectedIndex = nodeIndex[0] - jump;

			if (isUnderflowing(newSelectedIndex)) {
				unselect();
				if (isFirstChild()) {
					unselect();
				} else {
					previous();
					selectLastChild();
				}
			} else {
				unselect();
				select(newSelectedIndex);
			}
			break;
		}
	}
}

export function unselect() {
	for (const nodeType of order.toReversed()) {
		if (selection.value[nodeType] !== null) {
			setSetting(nodeType, JSON.stringify(null));
			selection.value[nodeType] = null;
			break;
		}
	}
}

export function unselectUntilType(nodeType: NodeType) {
	const startIndex = order.indexOf(nodeType) + 1;

	for (let i = startIndex; i < order.length; ++i) {
		const currentType = order[i];
		setSetting(currentType, JSON.stringify(null));
		selection.value[currentType] = null;
	}
}
