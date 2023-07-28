<script lang="ts">
	export let icons: App.Icon[] = [];

	import { Drawer, CloseButton } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	let hiddenDrawer = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	const template = `import {
	{{iconNameImport}}
} from 'svelte-shopify-polaris-icons';`;

	let templateImport = '';

	function openDrawer(iconNameImport: string): void {
		hiddenDrawer = false;
		templateImport = template.replace('{{iconNameImport}}', iconNameImport);
		console.log(templateImport);
	}
</script>

<div class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5 mb-8">
	{#each icons as i}
		<button
			class="flex flex-row text-left p-4 border border-solid border-slate-200 rounded-md cursor-pointer"
			on:click={() => openDrawer(i.iconNameImport)}
		>
			<svelte:component this={i.icon} class="mr-2" />
			<p class="text-sm mt-0 mb-0 text-slate-800">{i.name}</p>
		</button>
	{/each}
</div>

<Drawer
	placement="right"
	transitionType="fly"
	{transitionParams}
	bind:hidden={hiddenDrawer}
	id="sidebar1"
>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="inline-flex items-center text-base font-semibold text-gray-800 dark:text-gray-400"
		>
			How to import
		</h5>
		<CloseButton on:click={() => (hiddenDrawer = true)} class="mb-4 dark:text-white" />
	</div>
	<p class="text-sm text-slate-600">Import the icon from svelte-shopify-polaris-icons:</p>
	<pre>{templateImport}</pre>
</Drawer>
