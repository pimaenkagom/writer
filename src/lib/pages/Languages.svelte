<script lang="ts">
	import {
		delimiter,
		getAvailablesLanguages,
		getSelectedLanguages
	} from '$lib/states/contents/languages.svelte';
	import { setSetting } from '$lib/states/helpers/settings.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import { flip } from 'svelte/animate';

	let draggedIndex: number | null = $state(null);

	function deactivate(language: string) {
		const newSelected = getSelectedLanguages().filter((lang) => lang !== language);
		setSetting('languages', newSelected.join(delimiter));
	}

	function activate(language: string) {
		const newSelected = [...getSelectedLanguages(), language];
		setSetting('languages', newSelected.join(delimiter));
	}

	function handleDragStart(event: DragEvent, index: number) {
		draggedIndex = index;
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
		}
	}

	function handleDragOver(e: DragEvent, index: number) {
		e.preventDefault();
		if (draggedIndex === null || draggedIndex === index) {
			return;
		}

		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const midpoint = rect.top + rect.height / 2;

		const movingDown = draggedIndex < index;
		if (movingDown && e.clientY < midpoint) return;
		if (!movingDown && e.clientY > midpoint) return;

		const newLanguages = [...getSelectedLanguages()];
		const [draggedItem] = newLanguages.splice(draggedIndex, 1);
		newLanguages.splice(index, 0, draggedItem);

		setSetting('languages', newLanguages.join(delimiter));
		draggedIndex = index;
	}

	function handleDragEnd() {
		draggedIndex = null;
		// Hier könntest du die neue Reihenfolge speichern, z.B. in Settings
	}

	$effect(() => {
		setSetting('languages', getSelectedLanguages().join(delimiter));
	});
</script>

<div role="list">
	{#each getSelectedLanguages() as language, index (language)}
		<div
			class="box is-grabbable"
			class:dragging={draggedIndex === index}
			role="listitem"
			draggable="true"
			ondragstart={(e) => handleDragStart(e, index)}
			ondragover={(e) => handleDragOver(e, index)}
			ondragend={handleDragEnd}
			animate:flip={{ duration: 200 }}
		>
			<div class="media">
				<div class="media-content">
					{capitalize(language)}
				</div>
				<div class="media-right">
					<button title={language} onclick={() => deactivate(language)}>
						<span class="icon">
							<i class="fa-solid fa-eye-slash"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	{/each}
	{#each getAvailablesLanguages() as language (language)}
		<div class="box">
			<div class="media">
				<div class="media-content">
					{capitalize(language)}
				</div>
				<div class="media-right">
					<button title={language} onclick={() => activate(language)}>
						<span class="icon">
							<i class="fa-solid fa-eye"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.is-grabbable {
		cursor: grab;
	}

	.is-grabbable:active {
		cursor: grabbing;
	}

	.is-grabbable.dragging {
		opacity: 0.5;
	}
</style>
