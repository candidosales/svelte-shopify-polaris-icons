
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
    export let ariaLabel = 'label printer';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M14 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/><path d="M6.75 5.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" fill="#5C5F62"/><path d="M8.5 13.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M9.25 10.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M14 13.989v.511a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.511a2.75 2.75 0 0 1-2.5-2.739v-5a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5a2.75 2.75 0 0 1-2.5 2.739Zm-7.75-8.989c-.69 0-1.25.56-1.25 1.25v5c0 .605.43 1.11 1 1.225v-2.475a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.475c.57-.116 1-.62 1-1.225v-5c0-.69-.56-1.25-1.25-1.25h-7.5Zm1.75 4.5h4a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5Z" fill="#5C5F62"/></svg>