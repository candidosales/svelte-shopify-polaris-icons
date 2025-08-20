<script lang="ts">
	import { Drawer, CloseButton, Clipboard, Tooltip } from 'flowbite-svelte';
	import { CheckOutline, ClipboardCleanSolid } from 'flowbite-svelte-icons';

	import { sineIn } from 'svelte/easing';
	interface Props {
		icons?: App.Icon[];
	}

	let { icons = [] }: Props = $props();
	let open = $state(false);
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	const template = `import {
	{{iconNameImport}}
} from 'svelte-shopify-polaris-icons';`;

	let templateImport = $state('');

	function openDrawer(iconNameImport: string): void {
		open = true;
		templateImport = template.replace('{{iconNameImport}}', iconNameImport);
		console.log(templateImport);
	}
</script>

<div class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5 mb-8">
	{#each icons as i}
		<button
			class="flex flex-row text-left p-4 border border-solid border-slate-200 rounded-md cursor-pointer"
			onclick={() => openDrawer(i.iconNameImport)}
		>
			<i.icon class="mr-2" />
			<p class="text-sm mt-0 mb-0 text-slate-800">{i.name}</p>
		</button>
	{/each}
</div>

<Drawer placement="right" {transitionParams} bind:open id="sidebar1" class="w-xl">
	<div class="flex justify-between">
		<h5
			id="drawer-label"
			class="inline-flex items-center text-base font-semibold text-gray-800 dark:text-gray-400"
		>
			How to import
		</h5>
		<CloseButton onclick={() => (open = false)} class="mb-4 dark:text-white cursor-pointer" />
	</div>
	<p class="text-sm text-slate-600">
		Import the icon from <a
			class="underline underline-offset-4 after:content-['_↗']"
			href="https://github.com/candidosales/svelte-shopify-polaris-icons"
			target="_blank">svelte-shopify-polaris-icons</a
		>:
	</p>
	<div class="flex w-full">
		<pre class="w-full">{templateImport}</pre>
		<Clipboard bind:value={templateImport} embedded class="cursor-pointer">
			{#snippet children(success)}
				<Tooltip isOpen={success}>{success ? 'Copied' : 'Copy to clipboard'}</Tooltip>
				{#if success}<CheckOutline />{:else}<ClipboardCleanSolid />{/if}
			{/snippet}
		</Clipboard>
	</div>
</Drawer>
