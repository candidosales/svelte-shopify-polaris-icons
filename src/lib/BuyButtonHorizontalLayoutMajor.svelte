
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
    export let ariaLabel = 'buy button horizontal layout';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0v-1Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M6.5 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 1.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z" fill="#5C5F62"/><path d="M11 8.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M11.75 10.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" fill="#5C5F62"/><path d="M3.5 14.75c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25v-1a.75.75 0 0 0-1.5 0v1Z" fill="#5C5F62"/><path d="M14.75 3.5c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 1-1.5 0v-1a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1Z" fill="#5C5F62"/><path d="M14.75 16.5a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1a.75.75 0 0 0 0 1.5h1Z" fill="#5C5F62"/><path d="M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z" fill="#5C5F62"/><path d="M11 16.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z" fill="#5C5F62"/></svg>