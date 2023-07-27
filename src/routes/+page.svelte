<script>
	import AbandonedCartFilledMajor from '$lib/AbandonedCartFilledMajor.svelte';
	import AbandonedCartMajor from '$lib/AbandonedCartMajor.svelte';
	import AccessibilityMajor from '$lib/AccessibilityMajor.svelte';
	import ActivitiesMajor from '$lib/ActivitiesMajor.svelte';
	import AddCodeMajor from '$lib/AddCodeMajor.svelte';
	import AddImageMajor from '$lib/AddImageMajor.svelte';

	const majorIcons = [
		{
			icon: AbandonedCartFilledMajor,
			name: 'Abandoned cart filled'
		},
		{
			icon: AbandonedCartMajor,
			name: 'Abandoned cart'
		},
		{
			icon: AccessibilityMajor,
			name: 'Accessibility'
		},
		{
			icon: ActivitiesMajor,
			name: 'Activities'
		},
		{
			icon: AddCodeMajor,
			name: 'Add code'
		},
		{
			icon: AddImageMajor,
			name: 'Add image'
		}
	];
</script>

<div class="relative max-w-7xl mx-auto px-4 sm:px-6 mt-20 prose">
	<h1>[WIP] Welcome to your Svelte Shopify Polaris Icons</h1>
	<p class="text-slate-600 mb-2 text-md">Installation</p>
	<pre class="mt-0">pnpm i -D svelte-shopify-polaris-icons</pre>

	<h2>Major icons</h2>

	<div
		class="lg:gap-x-8 lg:grid-cols-5 mb-8 sm:gap-x-6 sm:gap-y-8 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-4"
	>
		{#each majorIcons as i}
			<div
				class="flex flex-col items-center p-10 border border-solid border-slate-200 rounded-md cursor-pointer"
			>
				<svelte:component this={i.icon} />
				<p class="text-sm">{i.name}</p>
			</div>
		{/each}
	</div>
	<h2>Minor icons</h2>
</div>
