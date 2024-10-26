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
	export let ariaLabel = 'sandbox';
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
		d="M9.605 3.362a.75.75 0 0 1 .79 0l5.25 3.25a.75.75 0 0 1 .345.763c.006.04.01.082.01.125v5.5a.75.75 0 0 1-.355.638l-5.25 3.25a.75.75 0 0 1-.79 0l-5.25-3.25a.75.75 0 0 1-.355-.638v-5.5c0-.043.004-.085.01-.125a.75.75 0 0 1 .345-.763l5.25-3.25Zm1.145 7.556 3.75-2.322v3.986l-3.75 2.322v-3.986Zm-1.5 0-3.75-2.322v3.986l3.75 2.322v-3.986Zm-3.075-3.668 3.825 2.368 3.825-2.368-3.825-2.368-3.825 2.368Z"
		fill="#5C5F62"
	/></svg
>
