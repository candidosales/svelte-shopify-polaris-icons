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
	export let ariaLabel = 'referral code';
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
		d="M3 7.25a.75.75 0 0 0 0 1.5h.25v3.25a.75.75 0 0 0 1.5 0v-3.25a1.5 1.5 0 0 0-1.5-1.5h-.25Z"
		fill="#5C5F62"
	/><path
		d="M7 7.25a.75.75 0 0 0 0 1.5h.818l-.993 2.111a1.5 1.5 0 0 0 1.357 2.139h.818a.75.75 0 0 0 0-1.5h-.818l.993-2.111a1.5 1.5 0 0 0-1.357-2.139h-.818Z"
		fill="#5C5F62"
	/><path
		d="M14.25 12.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
		fill="#5C5F62"
	/><path
		d="M11 7.25a.75.75 0 0 0 0 1.5h.818l-.31.66a1.5 1.5 0 0 0 .131 1.504l.414.586h-1.303a.75.75 0 0 0 0 1.5h1.303c1.216 0 1.926-1.371 1.225-2.365l-.414-.586.311-.66a1.5 1.5 0 0 0-1.357-2.139h-.818Z"
		fill="#5C5F62"
	/></svg
>
