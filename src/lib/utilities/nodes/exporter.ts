import { getCollectionForNodeType } from '$lib/states/nodes.svelte';
import { order } from '$lib/utilities/nodes/order';
import { downloadZip } from 'client-zip';
import fileSaver from 'file-saver';

export async function download() {
	const files = await Promise.all(
		order.map(async (nodeType) => ({
			name: `structure/${getCollectionForNodeType(nodeType).name}.json`,
			lastModified: new Date(),
			input: new Response(
				JSON.stringify(await getCollectionForNodeType(nodeType).getAll(), null, 2)
			)
		}))
	);

	const blob = await downloadZip(files).blob();
	const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');

	fileSaver.saveAs(blob, `${timestamp}-Libraries.gom`);
}
