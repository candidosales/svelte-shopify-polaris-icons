
<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    export let role: string = 'img';
    const sizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8'
    };
    export let ariaLabel = 'cash pound';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10 6a1.75 1.75 0 0 0-1.75 1.75v1.5h-.75a.75.75 0 0 0 0 1.5h.75v1h-.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-2.25v-1h.75a.75.75 0 0 0 0-1.5h-.75v-1.5a.25.25 0 0 1 .25-.25h.75v.5a.75.75 0 0 0 1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-1Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#5C5F62"/></svg>