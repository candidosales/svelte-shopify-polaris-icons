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
	export let ariaLabel = 'bold';
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
		fill="#5C5F62"
		fill-rule="evenodd"
		d="M7 3c-.83 0-1.5.67-1.5 1.5v10.46c0 .85.69 1.54 1.54 1.54h4.46a4 4 0 0 0 2.32-7.26A4 4 0 0 0 10.5 3H7Zm3.5 5.5a1.5 1.5 0 0 0 0-3H8v3h2.5ZM8 11v3h3.5a1.5 1.5 0 0 0 0-3H8Z"
	/></svg
>
