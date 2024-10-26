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
	export let ariaLabel = 'first click model';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path d="M4.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z" fill="#5C5F62" /><path
		d="M8 9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
		fill="#5C5F62"
	/><path d="M12.75 9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z" fill="#5C5F62" /><path
		d="M16.75 9.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
		fill="#5C5F62"
	/></svg
>
