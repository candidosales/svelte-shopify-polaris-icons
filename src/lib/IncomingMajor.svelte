
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
    export let ariaLabel = 'incoming';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M3.5 10.25a.75.75 0 0 1 1.5 0v3.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-7.5c0-.69-.56-1.25-1.25-1.25h-3.5a.75.75 0 0 1 0-1.5h3.5a2.75 2.75 0 0 1 2.75 2.75v7.5a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75v-3.5Z" fill="#5C5F62"/><path d="M6.75 11.5a.75.75 0 0 1 0-1.5h2.19l-4.97-4.97a.75.75 0 0 1 1.06-1.06l4.97 4.97v-2.19a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75h-4Z" fill="#5C5F62"/></svg>