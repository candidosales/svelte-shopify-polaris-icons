<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import IconsList from '../components/IconsList.svelte';
	import { MAJOR_ICONS, MINOR_ICONS } from '../data/icons';
	import Hero from '../components/Hero.svelte';

	// Query results
	let filteredMajorIcons: App.Icon[] = [];
	let filteredMinorIcons: App.Icon[] = [];
	let searchTerm = '';

	const searchBooks = () => {
		filteredMajorIcons = MAJOR_ICONS.filter((majorIcon) => {
			let iconName = majorIcon.name.toLowerCase();
			return iconName.includes(searchTerm.toLowerCase());
		});

		filteredMinorIcons = MINOR_ICONS.filter((minorIcon) => {
			let iconName = minorIcon.name.toLowerCase();
			return iconName.includes(searchTerm.toLowerCase());
		});
	};
</script>

<MetaTags
	title="Svelte Shopify Polaris Icons"
	description="Svelte Shopify Polaris Icons"
	canonical="https://svelte-shopify-polaris-icons.vercel.app"
	openGraph={{
		url: 'https://svelte-shopify-polaris-icons.vercel.app',
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
	<Hero totalIcons={MAJOR_ICONS.length + MINOR_ICONS.length} />

	<div
		class="pointer-events-none sticky top-0 z-50 -mb-10 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12"
	>
		<div class="relative">
			<div
				class="pointer-events-auto relative bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] border border-solid border-slate-200 rounded-full"
			>
				<div class="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row sm:items-center">
					<div class="relative flex-auto">
						<input
							type="search"
							aria-label="Search all icons"
							placeholder="Search all icons..."
							class="border-0 block w-full appearance-none rounded-lg bg-transparent py-4 pl-9 pr-4 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none"
							autocomplete="off"
							bind:value={searchTerm}
							on:input={searchBooks}
						/><svg
							viewBox="0 0 20 20"
							aria-hidden="true"
							class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 fill-slate-500 transition"
							><path
								d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
							></path></svg
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<h2>Major icons</h2>
	{#if filteredMajorIcons.length > 0}
		<IconsList icons={filteredMajorIcons} />
	{:else}
		<IconsList icons={MAJOR_ICONS} />
	{/if}
	<h2>Minor icons</h2>
	{#if filteredMinorIcons.length > 0}
		<IconsList icons={filteredMinorIcons} />
	{:else}
		<IconsList icons={MINOR_ICONS} />
	{/if}
</div>
