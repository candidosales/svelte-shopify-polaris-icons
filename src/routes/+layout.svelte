<script>
	import { page } from '$app/stores';
	import '../app.scss';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { data, children } = $props();

	let metaTags = $derived(deepMerge(data.baseMetaTags, $page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

{@render children?.()}
