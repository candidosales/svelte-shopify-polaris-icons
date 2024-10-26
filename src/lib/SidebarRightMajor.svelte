
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'sidebar right',
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
><path fill-rule="evenodd" d="M13.75 16.5a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-1.5Zm-.25-1.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v9.5Z" fill="#5C5F62"/><path d="M5.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 1 1.5 0v.5c0 .138.112.25.25.25h.5a.75.75 0 0 1 0 1.5h-.5Z" fill="#5C5F62"/><path d="M8.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25h-.5a.75.75 0 0 0 0 1.5h.5Z" fill="#5C5F62"/><path d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5Z" fill="#5C5F62"/><path d="M10.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-.5a.75.75 0 0 0 0 1.5h.5a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5Z" fill="#5C5F62"/><path d="M4.25 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M10.5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" fill="#5C5F62"/></svg>