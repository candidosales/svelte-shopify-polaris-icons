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
	export let ariaLabel = 'viewport short';
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
		d="M10 4a.75.75 0 0 0-.75.75v2.44l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72v-2.44a.75.75 0 0 0-.75-.75Z"
		fill="#5C5F62"
	/><path
		d="M4.75 12.25a1.75 1.75 0 0 1-1.75-1.75v-1c0-.966.784-1.75 1.75-1.75h1.875a.75.75 0 0 1 0 1.5h-1.875a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1.875a.75.75 0 0 1 0 1.5h-1.875Z"
		fill="#5C5F62"
	/><path
		d="M12.625 11.5a.75.75 0 0 1 .75-.75h1.875a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-1.875a.75.75 0 0 1 0-1.5h1.875c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1.875a.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path
		d="M9.25 15.25a.75.75 0 0 0 1.5 0v-2.44l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v2.44Z"
		fill="#5C5F62"
	/></svg
>
