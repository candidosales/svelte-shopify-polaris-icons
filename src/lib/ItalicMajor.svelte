
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
    export let ariaLabel = 'italic';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill="#5C5F62" d="M7.5 4.25c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.34L9.63 15h2.12a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.34l2.28-10H8.25a.75.75 0 0 1-.75-.75Z"/></svg>