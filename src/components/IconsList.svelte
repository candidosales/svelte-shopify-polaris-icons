<script lang="ts">
	export let icons: App.Icon[] = [];
</script>

<div class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5 mb-8">
	{#each icons as i}
		<div
			class="flex flex-col items-center p-10 border border-solid border-slate-200 rounded-md cursor-pointer"
		>
			<svelte:component this={i.icon} />
			<p class="text-sm">{i.name}</p>
		</div>
	{/each}
</div>
