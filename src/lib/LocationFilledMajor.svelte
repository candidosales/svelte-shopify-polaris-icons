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
	export let ariaLabel = 'location filled';
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
		d="M11.194 16c1.524-1.373 3.806-4.484 3.806-8.106 0-2.703-2.239-4.894-5-4.894s-5 2.191-5 4.894c0 3.622 2.282 6.733 3.806 8.106h-3.056a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.056Zm.806-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
		fill="#5C5F62"
	/></svg
>
