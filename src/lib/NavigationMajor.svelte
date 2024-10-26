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
	export let ariaLabel = 'navigation';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path
		fill-rule="evenodd"
		d="M13.28 6.72a.75.75 0 0 1 .19.742l-1.25 4.25a.75.75 0 0 1-.508.508l-4.25 1.25a.75.75 0 0 1-.932-.932l1.25-4.25a.75.75 0 0 1 .508-.508l4.25-1.25a.75.75 0 0 1 .742.19Zm-4.176 2.384-.747 2.539 2.539-.747-1.792-1.792Z"
		fill="#5C5F62"
	/><path
		fill-rule="evenodd"
		d="M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
		fill="#5C5F62"
	/></svg
>
