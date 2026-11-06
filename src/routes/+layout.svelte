<script>
	import { page } from '$app/state';
	import '../app.css';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { data, children } = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

{@render children?.()}
