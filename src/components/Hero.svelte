<script lang="ts">
	import Github from './Github.svelte';

	interface Props {
		totalIcons?: number;
	}

	let { totalIcons = 0 }: Props = $props();
</script>

<div class="flex flex-col-reverse md:flex-row">
	<div>
		<div
			class="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start"
		>
			<p>{totalIcons} icons</p>
			<svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current"
				><circle cx="1" cy="1" r="1"></circle></svg
			>
			<p>MIT license</p>
		</div>
		<h1 class="font-medium">Welcome to Svelte Shopify Polaris Icons</h1>
		<p class="text-slate-600 mb-2 text-md">Installation</p>
		<pre class="mt-0">pnpm i -D svelte-shopify-polaris-icons</pre>
		<div class="mt-4 mb-8 flex justify-center gap-8 lg:justify-start">
			<a
				class="rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5 no-underline"
				href="https://github.com/candidosales/svelte-shopify-polaris-icons"
				target="_blank"><Github />Documentation</a
			>
		</div>
	</div>
	<img class="m-0" width="616" height="308" alt="Svelte Shopify" src="/svelte-shopify.png" />
</div>
