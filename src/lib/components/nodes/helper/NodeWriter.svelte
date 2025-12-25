<script lang="ts">
	import type { Basenode } from '$lib/models/helpers/basenode.model';
	import type { Text } from '$lib/models/contents/text.model';
	import type { Tag } from '$lib/models/contents/tag.model';
	import { multilingualTexts } from '$lib/states/contents/multilingual-text.svelte';
	import { languages } from '$lib/states/contents/languages.svelte';
	import { statuses } from '$lib/states/contents/statuses.svelte';
	import {
		libraries,
		collections,
		books,
		parts,
		chapters,
		sections,
		paragraphs,
		clauses
	} from '$lib/states/nodes/nodes.svelte';
	import { capitalize } from '$lib/utilities/strings/capitalize';
	import { onMount } from 'svelte';
	import { collection, getDocs, getFirestore } from 'firebase/firestore';

	let {
		node = null,
		nodeType = 'library',
		isSaved = $bindable(false)
	}: {
		node?: Basenode | null;
		nodeType?: string;
		isSaved?: boolean;
	} = $props();

	const isNew = node === null;

	let editableNode = $state<Basenode>(
		isNew
			? {
					id: '',
					users: [],
					type: nodeType,
					value: '',
					shown: true,
					tags: [],
					children: [],
					childrenTypes: getDefaultChildrenTypes(nodeType)
				}
			: $state.snapshot(node)
	);

	let availableLanguages = $state<Array<{ id: string; value: string }>>([]);
	let availableStatuses = $state<Array<{ id: string; value: string }>>([]);
	let availableTags = $state<Tag[]>([]);

	let textValues = $state<Record<string, Text>>({});
	let selectedTags = $state<string[]>(editableNode.tags || []);

	function getDefaultChildrenTypes(type: string): string[] {
		const hierarchyMap: Record<string, string[]> = {
			library: ['collection'],
			collection: ['book'],
			book: ['part', 'chapter'],
			part: ['chapter'],
			chapter: ['section'],
			section: ['paragraph'],
			paragraph: ['clause'],
			clause: []
		};
		return hierarchyMap[type] || [];
	}

	function getCollectionForType(type: string) {
		const collectionMap: Record<string, any> = {
			library: libraries,
			collection: collections,
			book: books,
			part: parts,
			chapter: chapters,
			section: sections,
			paragraph: paragraphs,
			clause: clauses
		};
		return collectionMap[type];
	}

	async function initializeTextValues() {
		if (isNew || !editableNode.value) {
			const newTexts: Record<string, Text> = {};
			for (const lang of availableLanguages) {
				newTexts[lang.value] = {
					value: '',
					status: '',
					strongWordsIndices: [],
					emphasizedWordsIndices: []
				};
			}
			textValues = newTexts;
		} else {
			const multilingualText = multilingualTexts.items[editableNode.value];
			if (multilingualText) {
				textValues = $state.snapshot(multilingualText.texts);
			}
		}
	}

	async function loadTags() {
		try {
			const db = getFirestore();
			const tagsCollection = collection(db, 'tags');
			const snapshot = await getDocs(tagsCollection);
			availableTags = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Tag));
		} catch (error) {
			console.error('Error loading tags:', error);
			availableTags = [];
		}
	}

	onMount(async () => {
		availableLanguages = await languages.getAll();
		availableStatuses = await statuses.getAll();
		await loadTags();

		await initializeTextValues();
	});

	async function save() {
		try {
			let multilingualTextId = editableNode.value;

			if (isNew || !multilingualTextId) {
				const newMultilingualText = await multilingualTexts.create({
					texts: textValues
				});
				if (newMultilingualText) {
					multilingualTextId = newMultilingualText.id;
				}
			} else {
				await multilingualTexts.update(multilingualTextId, {
					texts: textValues
				});
			}

			const updatedNode: Basenode = {
				...editableNode,
				value: multilingualTextId,
				tags: selectedTags
			};

			const collection = getCollectionForType(editableNode.type);

			if (isNew) {
				await collection.create(updatedNode);
			} else {
				await collection.update(updatedNode.id, updatedNode);
			}

			isSaved = true;
		} catch (error) {
			console.error('Error saving node:', error);
		}
	}

	function toggleTag(tagId: string) {
		if (selectedTags.includes(tagId)) {
			selectedTags = selectedTags.filter((t) => t !== tagId);
		} else {
			selectedTags = [...selectedTags, tagId];
		}
	}

	const nodeTypes = [
		'library',
		'collection',
		'book',
		'part',
		'chapter',
		'section',
		'paragraph',
		'clause'
	];
</script>

<div class="content">
	{#if isNew}
		<div class="field">
			<label class="label" for="node-type">Node Type</label>
			<div class="control">
				<div class="select is-fullwidth">
					<select id="node-type" bind:value={editableNode.type}>
						{#each nodeTypes as type}
							<option value={type}>{capitalize(type)}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	{/if}

	<div class="field">
		<label class="label">
			<input type="checkbox" bind:checked={editableNode.shown} />
			Shown
		</label>
	</div>

	{#if availableLanguages.length > 0}
		{#each availableLanguages as lang}
			<div class="field">
				<label class="label" for="text-{lang.value}">{capitalize(lang.value)}</label>
				<div class="control">
					<textarea
						id="text-{lang.value}"
						class="textarea"
						rows="3"
						bind:value={textValues[lang.value].value}
					></textarea>
				</div>
			</div>

			<div class="field">
				<label class="label" for="status-{lang.value}">Status ({lang.value})</label>
				<div class="control">
					<div class="select is-fullwidth">
						<select id="status-{lang.value}" bind:value={textValues[lang.value].status}>
							<option value="">No status</option>
							{#each availableStatuses as status}
								<option value={status.value}>{status.value}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		{/each}
	{/if}

	{#if availableTags.length > 0}
		<div class="field">
			<label class="label">Tags</label>
			<div class="control">
				<div class="tags">
					{#each availableTags as tag}
						<button
							class="tag is-medium {selectedTags.includes(tag.id) ? 'is-primary' : ''}"
							type="button"
							onclick={() => toggleTag(tag.id)}
						>
							{tag.value}
							{#if selectedTags.includes(tag.id)}
								<button class="delete is-small" type="button" onclick={() => toggleTag(tag.id)}
								></button>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}

	<div class="field">
		<label class="label" for="children-types">Allowed Children Types</label>
		<div class="control">
			<div class="tags">
				{#each editableNode.childrenTypes as childType}
					<span class="tag is-info">{childType}</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="field is-grouped is-grouped-right">
		<p class="control">
			<button class="button is-primary" onclick={save}>
				<span class="icon">
					<i class="fa-solid fa-floppy-disk"></i>
				</span>
				<span>Save</span>
			</button>
		</p>
	</div>
</div>
