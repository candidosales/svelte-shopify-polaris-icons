
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'store details filled',
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
><path d="M5 3.25a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75h-2Z"/><path d="M5 11.25a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75h-2Z"/><path d="M10 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"/><path d="M10.75 6.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"/><path d="M10 12.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"/><path d="M10.75 14.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"/></svg>