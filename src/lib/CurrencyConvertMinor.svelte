
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
    export let ariaLabel = 'currency convert';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10.25 7a.75.75 0 0 1 .75-.75h3.69l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-3.69a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M7.25 5.25a.75.75 0 0 0-1.5 0v.75h-.375a2.375 2.375 0 0 0 0 4.75h1.28a.875.875 0 1 1 0 1.75h-2.905a.75.75 0 0 0 0 1.5h1v.75a.75.75 0 0 0 1.5 0v-.75h.404a2.375 2.375 0 0 0 0-4.75h-1.279a.875.875 0 0 1 0-1.75h2.904a.75.75 0 1 0 0-1.5h-1.029v-.75Z" fill="#5C5F62"/><path d="M12.81 13.75h3.69a.75.75 0 0 0 0-1.5h-3.69l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72Z" fill="#5C5F62"/></svg>