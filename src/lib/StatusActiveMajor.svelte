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
	export let ariaLabel = 'status active';
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
		d="M4.63 8.81a5.5 5.5 0 0 1 6.56-4.18.75.75 0 0 0 .325-1.464 7 7 0 1 0 5.32 8.35.75.75 0 0 0-1.465-.325 5.5 5.5 0 1 1-10.74-2.38Z"
		fill="#5C5F62"
	/><path
		d="M16.03 6.78a.75.75 0 0 0-1.06-1.06l-4.97 4.97-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.5-5.5Z"
		fill="#5C5F62"
	/></svg
>
