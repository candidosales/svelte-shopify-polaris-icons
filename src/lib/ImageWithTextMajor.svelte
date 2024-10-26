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
	export let ariaLabel = 'image with text';
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
		d="M5.5 3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3Zm3 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
		fill="#5C5F62"
	/><path
		d="M3.5 15.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path d="M4.25 11.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5h-11.5Z" fill="#5C5F62" /><path
		d="M11.25 8.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5h-3.75a.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path d="M12 4.5a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5h-3.75Z" fill="#5C5F62" /></svg
>
