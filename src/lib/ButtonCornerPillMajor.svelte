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
	export let ariaLabel = 'button corner pill';
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
		d="M12.25 5a7.25 7.25 0 0 0-7.25 7.25v3.5a.75.75 0 0 1-1.5 0v-3.5a8.75 8.75 0 0 1 8.75-8.75h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
		fill="#5C5F62"
	/></svg
>
