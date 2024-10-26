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
	export let ariaLabel = 'circle chevron left';
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
		d="M11.78 6.47a.75.75 0 0 1 0 1.06l-2.47 2.47 2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
		fill="#5C5F62"
	/><path
		fill-rule="evenodd"
		d="M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
		fill="#5C5F62"
	/></svg
>
