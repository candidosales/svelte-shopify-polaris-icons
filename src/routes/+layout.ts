import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
  const baseMetaTags = Object.freeze({
    title: 'Svelte Shopify Polaris Icons',
    description: 'A set of Shopify Polaris Icons to use in your Svelte project',
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      locale: 'en_IE',
      title: 'Svelte Shopify Polaris Icons',
      description: 'A set of Shopify Polaris Icons to use in your Svelte project',
      siteName: 'Svelte Shopify Polaris Icons',
      images: [
        {
			url: 'https://svelte-shopify-polaris-icons.vercel.app/cover-open-graph-1200-600.png',
			width: 1200,
			height: 600,
			alt: 'Svelte Shopify Polaris Icons cover'
		}
      ]
    },
	twitter: {
		site: '@site',
		cardType: 'summary_large_image',
		title: 'Svelte Shopify Polaris Icons',
		description: 'A set of Shopify Polaris Icons to use in your Svelte project',
		image: 'https://svelte-shopify-polaris-icons.vercel.app/cover-open-graph-1200-600.png',
		imageAlt: 'Svelte Shopify Polaris Icons cover'
	}
  }) satisfies MetaTagsProps;

  return {
    baseMetaTags
  };
};