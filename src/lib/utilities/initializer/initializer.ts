import { multilingualTexts } from '$lib/states/multilingual-text.svelte';
import {
	books,
	chapters,
	clauses,
	collections,
	libraries,
	paragraphs,
	parts,
	sections
} from '$lib/states/nodes.svelte';
import {
	bookTheLiturgyAccordingToBasil,
	bookTheLiturgyAccordingToCyril,
	bookTheLiturgyAccordingToGregory,
	collectionTheLiturgicalDay,
	libraryTheLiturgicalLibraryOfTheCopticOrthodoxChurch,
	textLiturgyAccordingToCyril,
	textLiturgyAccordingToGregory,
	textTheLiturgicalDay,
	textTheLiturgicalLibraryOfTheCopticOrthodoxChurch,
	textTheLiturgyAccordingToBasil
} from '$lib/utilities/initializer/books';
import {
	chapterTheReconciliation,
	partLiturgyOfTheFaithful,
	sectionAnotherPrayerOfReconciliation,
	sectionAPrayerOfReconciliation,
	sectionAspasmosAdamForTheOrdinaryDays,
	textAnotherPrayerOfReconciliation,
	textAPrayerOfReconciliation,
	textAspasmosAdamForTheOrdinaryDays,
	textLiturgyOfTheFaithful,
	textTheReconciliation
} from '$lib/utilities/initializer/sections-the-liturgy-according-to-basil';
import { emptyText } from '$lib/utilities/initializer/shared/texts-empty';
import {
	clauseGodTheGreatTheEternal,
	paragraphInPrayerOfReconciliation,
	textGodTheGreatTheEternal
} from './sections/section-a-prayer-of-reconciliation';
import {
	clauseTheAbbotSays,
	clauseTheAnagnostistSays,
	clauseTheArchdeaconSays,
	clauseTheBishopSays,
	clauseTheDeaconSays,
	clauseTheHegumenSays,
	clauseTheHighestPriestlyOrderPresentSays,
	clauseTheHypodeaconSays,
	clauseTheMetropolitanSays,
	clauseTheMonkToBeSays,
	clauseTheNunToBeSays,
	clauseThePatriarchSays,
	clauseThePeopleSays,
	clauseThePresbyterSays,
	clauseThePriestSays,
	clauseThePsaltistSays,
	textTheAbbotSays,
	textTheAnagnostistSays,
	textTheArchdeaconSays,
	textTheBishopSays,
	textTheDeaconSays,
	textTheHegumenSays,
	textTheHighestPriestlyOrderPresentSays,
	textTheHypodeaconSays,
	textTheMetropolitanSays,
	textTheMonkToBeSays,
	textTheNunToBeSays,
	textThePatriarchSays,
	textThePeopleSays,
	textThePresbyterSays,
	textThePriestSays,
	textThePsaltistSays
} from './shared/clauses-someone-says';
import { sectionTheCallToPrayer, textTheCallToPrayer } from './shared/section-the-call-to-prayer';

export async function initializeLibrary() {
	await multilingualTexts.createOrReplace(textTheCallToPrayer);
	await sections.createOrReplace(sectionTheCallToPrayer);

	await multilingualTexts.createOrReplace(textGodTheGreatTheEternal);
	await clauses.createOrReplace(clauseGodTheGreatTheEternal);

	await multilingualTexts.createOrReplace(emptyText);
	await paragraphs.createOrReplace(paragraphInPrayerOfReconciliation);

	await multilingualTexts.createOrReplace(textAPrayerOfReconciliation);
	await sections.createOrReplace(sectionAPrayerOfReconciliation);

	await multilingualTexts.createOrReplace(textAnotherPrayerOfReconciliation);
	await sections.createOrReplace(sectionAnotherPrayerOfReconciliation);

	await multilingualTexts.createOrReplace(textAspasmosAdamForTheOrdinaryDays);
	await sections.createOrReplace(sectionAspasmosAdamForTheOrdinaryDays);

	await multilingualTexts.createOrReplace(textTheReconciliation);
	await chapters.createOrReplace(chapterTheReconciliation);

	await multilingualTexts.createOrReplace(textLiturgyOfTheFaithful);
	await parts.createOrReplace(partLiturgyOfTheFaithful);

	await multilingualTexts.createOrReplace(textTheLiturgyAccordingToBasil);
	await books.createOrReplace(bookTheLiturgyAccordingToBasil);

	await multilingualTexts.createOrReplace(textLiturgyAccordingToGregory);
	await books.createOrReplace(bookTheLiturgyAccordingToGregory);

	await multilingualTexts.createOrReplace(textLiturgyAccordingToCyril);
	await books.createOrReplace(bookTheLiturgyAccordingToCyril);

	await multilingualTexts.createOrReplace(textTheLiturgicalDay);
	await collections.createOrReplace(collectionTheLiturgicalDay);

	await multilingualTexts.createOrReplace(textTheLiturgicalLibraryOfTheCopticOrthodoxChurch);
	await libraries.createOrReplace(libraryTheLiturgicalLibraryOfTheCopticOrthodoxChurch);

	await multilingualTexts.createOrReplace(textThePatriarchSays);
	await clauses.createOrReplace(clauseThePatriarchSays);

	await multilingualTexts.createOrReplace(textTheMetropolitanSays);
	await clauses.createOrReplace(clauseTheMetropolitanSays);

	await multilingualTexts.createOrReplace(textTheBishopSays);
	await clauses.createOrReplace(clauseTheBishopSays);

	await multilingualTexts.createOrReplace(textTheHegumenSays);
	await clauses.createOrReplace(clauseTheHegumenSays);

	await multilingualTexts.createOrReplace(textThePresbyterSays);
	await clauses.createOrReplace(clauseThePresbyterSays);

	await multilingualTexts.createOrReplace(textTheHighestPriestlyOrderPresentSays);
	await clauses.createOrReplace(clauseTheHighestPriestlyOrderPresentSays);

	await multilingualTexts.createOrReplace(textThePriestSays);
	await clauses.createOrReplace(clauseThePriestSays);

	await multilingualTexts.createOrReplace(textTheArchdeaconSays);
	await clauses.createOrReplace(clauseTheArchdeaconSays);

	await multilingualTexts.createOrReplace(textTheDeaconSays);
	await clauses.createOrReplace(clauseTheDeaconSays);

	await multilingualTexts.createOrReplace(textTheHypodeaconSays);
	await clauses.createOrReplace(clauseTheHypodeaconSays);

	await multilingualTexts.createOrReplace(textTheAnagnostistSays);
	await clauses.createOrReplace(clauseTheAnagnostistSays);

	await multilingualTexts.createOrReplace(textThePsaltistSays);
	await clauses.createOrReplace(clauseThePsaltistSays);

	await multilingualTexts.createOrReplace(textThePeopleSays);
	await clauses.createOrReplace(clauseThePeopleSays);

	await multilingualTexts.createOrReplace(textTheAbbotSays);
	await clauses.createOrReplace(clauseTheAbbotSays);

	await multilingualTexts.createOrReplace(textTheMonkToBeSays);
	await clauses.createOrReplace(clauseTheMonkToBeSays);

	await multilingualTexts.createOrReplace(textTheNunToBeSays);
	await clauses.createOrReplace(clauseTheNunToBeSays);
}
