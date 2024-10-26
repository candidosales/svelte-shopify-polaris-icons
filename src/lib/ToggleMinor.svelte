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
	export let ariaLabel = 'toggle';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#5C5F62" /><path
		fill-rule="evenodd"
		d="M8 4.5a5.5 5.5 0 1 0 0 11h4a5.5 5.5 0 1 0 0-11h-4Zm-4 5.5a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-4-4Z"
		fill="#5C5F62"
	/></svg
>
