
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
    export let ariaLabel = 'detailed pop up';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M5.25 3.5a1.75 1.75 0 0 0-1.75 1.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M11.25 3.5a2.75 2.75 0 0 0-2.75 2.75v2.5a2.75 2.75 0 0 0 2.75 2.75h2.5a2.75 2.75 0 0 0 2.75-2.75v-2.5a2.75 2.75 0 0 0-2.75-2.75h-2.5Zm-1.25 2.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-2.5c-.69 0-1.25-.56-1.25-1.25v-2.5Z" fill="#5C5F62"/><path d="M4.25 12.5a.75.75 0 0 1 .75.75v1.5c0 .138.112.25.25.25h1.5a.75.75 0 0 1 0 1.5h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M16.5 13.25a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5a1.75 1.75 0 0 0 1.75-1.75v-1.5Z" fill="#5C5F62"/><path d="M4.25 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M9 15a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="#5C5F62"/></svg>