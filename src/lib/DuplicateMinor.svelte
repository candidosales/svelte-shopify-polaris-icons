
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
    export let ariaLabel = 'duplicate';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M8.75 8.5a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M8.75 3.5a2.75 2.75 0 0 0-2.74 2.51 2.75 2.75 0 0 0-2.51 2.74v5a2.75 2.75 0 0 0 2.75 2.75h5a2.75 2.75 0 0 0 2.74-2.51 2.75 2.75 0 0 0 2.51-2.74v-5a2.75 2.75 0 0 0-2.75-2.75h-5Zm2.5 2.5h-3.725c.116-.57.62-1 1.225-1h5c.69 0 1.25.56 1.25 1.25v5c0 .605-.43 1.11-1 1.225v-3.725a2.75 2.75 0 0 0-2.75-2.75Zm-5 1.5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25h-5Z" fill="#5C5F62"/></svg>