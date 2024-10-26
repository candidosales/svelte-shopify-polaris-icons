
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'template',
		class: klass,
		...rest
	}: App.IconProps = $props();
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...rest}
    class={twMerge('shrink-0', ICON_SIZES[size], klass)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M3.5 7.25a3.75 3.75 0 0 1 3.75-3.75h5.5a3.75 3.75 0 0 1 3.75 3.75v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5a3.75 3.75 0 0 1-3.75-3.75v-5.5Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5Zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75v-5.75Zm1.5 5.75v-5.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25h-.25Z"/></svg>