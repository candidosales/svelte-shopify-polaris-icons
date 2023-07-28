<script lang="ts">
	export let icons: App.Icon[] = [];
</script>

<div class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5 mb-8">
	{#each icons as i}
		<div
			class="flex flex-col items-center p-4 border border-solid border-slate-200 rounded-md cursor-pointer"
		>
			<div class="flex flex-row">
				<svelte:component this={i.icon} class="mr-2" />
				<p class="text-sm mt-0 mb-0 text-slate-800">{i.name}</p>
			</div>

			<p class="text-xs mt-0 mb-0 text-slate-400">{i.iconNameImport}</p>
		</div>
	{/each}
</div>
