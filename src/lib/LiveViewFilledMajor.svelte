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
	export let ariaLabel = 'live view filled';
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
		d="M4.523 6.28a5.25 5.25 0 0 0 0 7.425.75.75 0 1 1-1.06 1.06 6.75 6.75 0 0 1 0-9.545.75.75 0 0 1 1.06 1.06Z"
		fill="#5C5F62"
	/><path d="M10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" fill="#5C5F62" /><path
		d="M15.462 13.705a5.25 5.25 0 0 0 0-7.425.75.75 0 1 1 1.061-1.06 6.75 6.75 0 0 1 0 9.546.75.75 0 0 1-1.06-1.061Z"
		fill="#5C5F62"
	/><path
		d="M6.79 8.048a2.75 2.75 0 0 0 0 3.89.75.75 0 1 1-1.06 1.06 4.25 4.25 0 0 1 0-6.01.75.75 0 1 1 1.06 1.06Z"
		fill="#5C5F62"
	/><path
		d="M13.194 11.937a2.75 2.75 0 0 0 0-3.889.75.75 0 1 1 1.061-1.06 4.25 4.25 0 0 1 0 6.01.75.75 0 0 1-1.06-1.06Z"
		fill="#5C5F62"
	/></svg
>
