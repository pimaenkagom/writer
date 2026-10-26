import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
import '$lib/utilities/initializer/books';
import '$lib/utilities/initializer/occasions/occasion-the-annunciation-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-month-of-koiak';
import '$lib/utilities/initializer/occasions/occasion-the-nativity-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-paramoun-of-the-nativity-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-fast-before-the-feast-of-the-nativity-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-circumcision-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-presentation-of-christ-in-the-temple';
import '$lib/utilities/initializer/occasions/occasion-the-entry-of-christ-into-egypt';
import '$lib/utilities/initializer/occasions/occasion-the-paramoun-of-the-theophany';
import '$lib/utilities/initializer/occasions/occasion-the-theophany';
import '$lib/utilities/initializer/occasions/occasion-the-blessing-of-the-wedding-at-cana-of-galilee-by-jesus-christ';
import '$lib/utilities/initializer/occasions/occasion-the-transfiguration-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-fast-and-the-pascha-of-jonah';
import '$lib/utilities/initializer/occasions/occasion-the-great-fast';
import '$lib/utilities/initializer/occasions/occasion-the-saturday-of-lazarus';
import '$lib/utilities/initializer/occasions/occasion-the-entry-of-christ-into-jerusalem';
import '$lib/utilities/initializer/occasions/occasion-maundy-thursday';
import '$lib/utilities/initializer/occasions/occasion-the-saturday-of-the-apocalypse';
import '$lib/utilities/initializer/occasions/occasion-the-resurrection-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-sunday-of-thomas';
import '$lib/utilities/initializer/occasions/occasion-the-ascension-of-christ';
import '$lib/utilities/initializer/occasions/occasion-the-descent-of-the-holy-spirit';
import '$lib/utilities/initializer/occasions/occasion-the-fast-of-the-apostles';
import '$lib/utilities/initializer/occasions/occasion-the-cross';
import '$lib/utilities/initializer/occasions/occasion-the-crown-of-the-year';
import '$lib/utilities/initializer/occasions/occasion-the-ordinary-days';
import '$lib/utilities/initializer/part-the-liturgy-of-the-word';
import '$lib/utilities/initializer/part-the-offering-of-the-lamb';
import '$lib/utilities/initializer/part-the-reception-of-a-hierarch';
import { pendingNodes, pendingTexts } from '$lib/utilities/initializer/registry';
import '$lib/utilities/initializer/sections-the-liturgy-according-to-basil';
import '$lib/utilities/initializer/sections/section-a-prayer-of-reconciliation';
import '$lib/utilities/initializer/shared/clauses-someone-says';
import '$lib/utilities/initializer/shared/section-hymn-a-star-rose-in-the-east';
import '$lib/utilities/initializer/shared/section-hymn-truly-blessed';
import '$lib/utilities/initializer/shared/section-the-call-to-prayer';
import '$lib/utilities/initializer/shared/section-the-response-of-the-people-we-worship-you-o-christ';
import '$lib/utilities/initializer/shared/sections-the-offering-of-incense';
import '$lib/utilities/initializer/shared/texts-empty';

export async function initializeLibrary() {
	for (const text of pendingTexts) {
		await multilingualTexts.createOrReplace(text);
	}

	for (const node of pendingNodes) {
		await getCollectionForNodeType(node.type).createOrReplace(node);
	}
}
