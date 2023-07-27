<script lang="ts">
	import IconsList from '../components/IconsList.svelte';
	import { MAJOR_ICONS, MINOR_ICONS } from '../data/icons';
</script>

<div class="relative max-w-7xl mx-auto px-4 sm:px-6 mt-20 prose">
	<h1>[WIP] Welcome to your Svelte Shopify Polaris Icons</h1>
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
