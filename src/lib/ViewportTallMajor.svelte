
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
    export let ariaLabel = 'viewport tall';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M9.25 9v-2.44l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v2.44a.75.75 0 0 1-1.5 0Z" fill="#5C5F62"/><path d="M5.75 16a2.75 2.75 0 0 1-2.75-2.75v-6.5a2.75 2.75 0 0 1 2.75-2.75h.875a.75.75 0 0 1 0 1.5h-.875c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h.875a.75.75 0 0 1 0 1.5h-.875Z" fill="#5C5F62"/><path d="M12.625 15.25a.75.75 0 0 1 .75-.75h.875c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-.875a.75.75 0 0 1 0-1.5h.875a2.75 2.75 0 0 1 2.75 2.75v6.5a2.75 2.75 0 0 1-2.75 2.75h-.875a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M9.25 13.44v-2.44a.75.75 0 0 1 1.5 0v2.44l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2.001a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72Z" fill="#5C5F62"/></svg>