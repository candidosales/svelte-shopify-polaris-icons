<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'add code',
		class: klass,
		...rest
	}: App.IconProps = $props();
	export let ariaLabel = 'customer minus';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M13.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" fill="#5C5F62" /><path
		fill-rule="evenodd"
		d="M5.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
		fill="#5C5F62"
	/><path
		fill-rule="evenodd"
		d="M9 11a6.273 6.273 0 0 1 5.484 3.227l.437.786a1.338 1.338 0 0 1-1.17 1.987h-9.502a1.338 1.338 0 0 1-1.17-1.987l.437-.786a6.273 6.273 0 0 1 5.484-3.227Zm0 1.5c-1.734 0-3.33.94-4.173 2.455l-.302.545h8.95l-.302-.545a4.773 4.773 0 0 0-4.173-2.455Z"
		fill="#5C5F62"
	/></svg
>
