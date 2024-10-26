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
	export let ariaLabel = 'list filled';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M4 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#5C5F62" /><path
		d="M4 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		fill="#5C5F62"
	/><path d="M5.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#5C5F62" /><path
		d="M7.5 4a1 1 0 0 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z"
		fill="#5C5F62"
	/><path d="M6.5 10a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2h-8.5a1 1 0 0 1-1-1Z" fill="#5C5F62" /><path
		d="M7.5 14a1 1 0 1 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z"
		fill="#5C5F62"
	/></svg
>
