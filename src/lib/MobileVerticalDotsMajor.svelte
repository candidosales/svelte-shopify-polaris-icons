
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'mobile vertical dots',
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
><path d="M11.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#5C5F62"/><path d="M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#5C5F62"/><path d="M11.5 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#5C5F62"/></svg>