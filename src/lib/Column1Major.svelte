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
	export let ariaLabel = 'column1';
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
		d="M13 4.5h-6a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5Zm-6-1.5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-6Z"
		fill="#5C5F62"
	/></svg
>
