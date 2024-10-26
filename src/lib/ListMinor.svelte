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
	export let ariaLabel = 'list';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#5C5F62" /><path
		d="M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
		fill="#5C5F62"
	/><path d="M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62" /><path
		d="M7.25 4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
		fill="#5C5F62"
	/><path
		d="M6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path d="M7.25 14.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="#5C5F62" /></svg
>
