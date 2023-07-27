<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import IconsList from '../components/IconsList.svelte';
	import { MAJOR_ICONS, MINOR_ICONS } from '../data/icons';
</script>

<MetaTags
	title="Svelte Shopify Polaris Icons"
	description="Svelte Shopify Polaris Icons"
	canonical="https://svelte-shopify-polaris-icons.vercel.app/"
	openGraph={{
		url: 'https://svelte-shopify-polaris-icons.vercel.app/',
		title: 'Svelte Shopify Polaris Icons',
		description: 'Svelte Shopify Polaris Icons',
		images: [
			{
				url: 'https://svelte-shopify-polaris-icons.vercel.app/cover-open-graph-1200-600.png',
				width: 1200,
				height: 600,
				alt: 'Svelte Shopify Polaris Icons cover'
			}
		],
		site_name: 'Svelte Shopify Polaris Icons'
	}}
	twitter={{
		handle: '@candidosales',
		site: '@site',
		cardType: 'summary_large_image',
		title: 'Svelte Shopify Polaris Icons',
		description: 'Svelte Shopify Polaris Icons',
		image: 'https://svelte-shopify-polaris-icons.vercel.app/cover-open-graph-1200-600.png',
		imageAlt: 'Svelte Shopify Polaris Icons cover'
	}}
/>
<div class="relative max-w-7xl mx-auto px-4 sm:px-6 mt-20 prose">
	<h1>Welcome to Svelte Shopify Polaris Icons</h1>
	<p class="text-slate-600 mb-2 text-md">Installation</p>
	<pre class="mt-0">pnpm i -D svelte-shopify-polaris-icons</pre>
	<p class="text-slate-600 mb-2 text-md">
		See the documentation <a
			class="underline underline-offset-4 after:content-['_↗']"
			href="https://github.com/candidosales/svelte-shopify-polaris-icons"
			target="_blank">here</a
		>.
	</p>

	<h2>Major icons</h2>
	<IconsList icons={MAJOR_ICONS} />
	<h2>Minor icons</h2>
	<IconsList icons={MINOR_ICONS} />
</div>
