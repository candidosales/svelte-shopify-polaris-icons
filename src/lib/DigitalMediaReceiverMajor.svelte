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
	export let ariaLabel = 'digital media receiver';
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
		d="M9.25 4a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 5.75 5.75.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-4.25-4.25.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path d="M6.75 12.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="#5C5F62" /><path
		fill-rule="evenodd"
		d="M10 8.25a.75.75 0 0 1 .75.75v1.499h4c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.784-1.75 1.75-1.75h4v-1.499a.75.75 0 0 1 .75-.75Zm-4.75 3.749a.25.25 0 0 0-.25.25v2.5c0 .139.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-9.5Z"
		fill="#5C5F62"
	/><path
		d="M10 5.75a.75.75 0 0 0 0 1.5 1.75 1.75 0 0 1 1.75 1.75.75.75 0 0 0 1.5 0 3.25 3.25 0 0 0-3.25-3.25Z"
		fill="#5C5F62"
	/></svg
>
