
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'time decay model',
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
><path d="M16.75 4.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0v-11.5Z" fill="#5C5F62"/><path d="M4.75 13.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z" fill="#5C5F62"/><path d="M8 10a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M12.75 7.75a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8Z" fill="#5C5F62"/></svg>