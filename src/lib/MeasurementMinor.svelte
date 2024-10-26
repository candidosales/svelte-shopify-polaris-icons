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
	export let ariaLabel = 'measurement';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M11.75 5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Z" fill="#5C5F62" /><path
		d="M15.75 6.5a.75.75 0 0 1-.75-.75v-.5a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-.75.75Z"
		fill="#5C5F62"
	/><path
		d="M15.75 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"
		fill="#5C5F62"
	/><path
		d="M6.25 12a.75.75 0 0 1-.75-.75v-5.19l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.19a.75.75 0 0 1-.75.75Z"
		fill="#5C5F62"
	/><path
		d="M8.75 13a.75.75 0 0 0 0 1.5h5.19l-.97.97a.75.75 0 1 0 1.06 1.06l2.25-2.25a.75.75 0 0 0 0-1.06l-2.25-2.25a.75.75 0 1 0-1.06 1.06l.97.97h-5.19Z"
		fill="#5C5F62"
	/></svg
>
