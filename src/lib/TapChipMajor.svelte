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
	export let ariaLabel = 'tap chip';
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
		d="M10 4.25a3.25 3.25 0 0 0-3.25 3.25.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-3.25-3.25Zm-4 11.25v-4.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v4.25h-8Zm-1.5-4.25v5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-5a2.25 2.25 0 0 0-2.25-2.25h-6.5a2.25 2.25 0 0 0-2.25 2.25Zm3.5 2a1 1 0 1 0 2 0v-.75a1 1 0 1 0-2 0v.75Zm1.25-5.75a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0Z"
		fill="#5C5F62"
	/></svg
>
