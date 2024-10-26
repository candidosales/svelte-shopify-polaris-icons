
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'text alignment left',
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
><path d="M3.75 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5h-12.5Z" fill="#5C5F62"/><path d="M4 7.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z" fill="#5C5F62"/><path d="M3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M4 14.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z" fill="#5C5F62"/></svg>