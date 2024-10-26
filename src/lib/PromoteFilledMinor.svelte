
<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'promote filled',
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
><path d="M4.997 7.64a2.114 2.114 0 0 0 0 4.22l4.131.23a1 1 0 0 1 .57.218l4.115 3.292a.5.5 0 0 0 .812-.39v-10.92a.5.5 0 0 0-.812-.39l-4.115 3.292a1 1 0 0 1-.57.218l-4.131.23Z"/><path d="M6.5 13.196v2.804a1 1 0 0 0 1 1h.595a1 1 0 0 0 .995-.9l.248-2.479-.359-.287-2.479-.138Z"/><path d="M17.5 9.75a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.937Z"/></svg>