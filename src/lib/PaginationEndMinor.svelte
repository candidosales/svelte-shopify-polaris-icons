
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'pagination end',
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
><path fill-rule="evenodd" d="M5.454 13.736a.75.75 0 1 0 1.092 1.028l4-4.25a.75.75 0 0 0 0-1.028l-4-4.25a.75.75 0 1 0-1.092 1.028l3.516 3.736-3.516 3.736Zm9.296-7.986a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z"/></svg>