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
	export let ariaLabel = 'cash yen';
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
		d="M7.436 6.506a.75.75 0 0 1 1.058-.07l1.506 1.317 1.506-1.317a.75.75 0 0 1 .988 1.128l-1.744 1.526v.41h1.25a.75.75 0 0 1 0 1.5h-1.25v.5h1.25a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.41l-1.744-1.526a.75.75 0 0 1-.07-1.058Z"
		fill="#5C5F62"
	/><path
		fill-rule="evenodd"
		d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"
		fill="#5C5F62"
	/></svg
>
