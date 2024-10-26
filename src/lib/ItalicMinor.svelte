
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'italic',
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
><path fill="#5C5F62" d="M7.5 4.25c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.34L9.63 15h2.12a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.34l2.28-10H8.25a.75.75 0 0 1-.75-.75Z"/></svg>