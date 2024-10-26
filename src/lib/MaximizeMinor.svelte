
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'maximize',
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
><path d="M12.75 3.5a.75.75 0 0 0 0 1.5h1.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3Z" fill="#5C5F62"/><path d="M7.25 16.5a.75.75 0 0 0 0-1.5h-1.19l3.22-3.22a.75.75 0 1 0-1.06-1.06l-3.22 3.22v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3Z" fill="#5C5F62"/></svg>