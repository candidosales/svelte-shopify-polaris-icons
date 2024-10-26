
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'button corner rounded',
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
><path fill-rule="evenodd" d="M8.25 5a3.25 3.25 0 0 0-3.25 3.25v7.5a.75.75 0 0 1-1.5 0v-7.5a4.75 4.75 0 0 1 4.75-4.75h7.5a.75.75 0 0 1 0 1.5h-7.5Z" fill="#5C5F62"/></svg>