
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
    export let ariaLabel = 'team';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6 4a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M10 7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M11.75 6.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" fill="#5C5F62"/><path d="M14 9a.75.75 0 0 0 0 1.5h.75c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 0 1.5 0v-1.5a2.75 2.75 0 0 0-2.75-2.75h-.75Z" fill="#5C5F62"/><path d="M6.75 9.75a.75.75 0 0 0-.75-.75h-.75a2.75 2.75 0 0 0-2.75 2.75v1.5a.75.75 0 0 0 1.5 0v-1.5c0-.69.56-1.25 1.25-1.25h.75a.75.75 0 0 0 .75-.75Z" fill="#5C5F62"/><path d="M10.75 12a2.75 2.75 0 0 1 2.75 2.75v1a.75.75 0 0 1-1.5 0v-1c0-.69-.56-1.25-1.25-1.25h-1.5c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1a2.75 2.75 0 0 1 2.75-2.75h1.5Z" fill="#5C5F62"/></svg>