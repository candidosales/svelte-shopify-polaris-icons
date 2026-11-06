import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: 'Svelte Shopify Polaris Icons',
		description: 'A set of Shopify Polaris Icons to use in your Svelte project',
		openGraph: {
			title: 'Svelte Shopify Polaris Icons',
			description: 'A set of Shopify Polaris Icons to use in your Svelte project'
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags
	};
};
