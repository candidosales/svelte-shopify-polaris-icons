
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'balance filled',
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
><path fill-rule="evenodd" d="M3.5 5.75v8.5a2.25 2.25 0 0 0 2.25 2.25h8.25a2.25 2.25 0 0 0 2.25-2.25v-.854a1.25 1.25 0 0 0 .75-1.146v-2a1.25 1.25 0 0 0-.75-1.146v-.604a2.25 2.25 0 0 0-2.25-2.25h-.5v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5a2.25 2.25 0 0 0-2.25 2.25Zm2.25-.75a.75.75 0 0 0-.75.75v.5h7v-.5a.75.75 0 0 0-.75-.75h-5.5Zm9.75 5.5h-3.75v1.5h3.75v-1.5Z"/></svg>