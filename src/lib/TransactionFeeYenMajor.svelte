
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
    export let ariaLabel = 'transaction fee yen';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.25 3a2.25 2.25 0 1 0 1 4.266v3.984a2.75 2.75 0 0 0 2.75 2.75h.25a.75.75 0 0 0 0-1.5h-.25c-.69 0-1.25-.56-1.25-1.25v-5.25h2.878a2.251 2.251 0 1 0 0-1.5h-3.256a2.25 2.25 0 0 0-2.122-1.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm7.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" fill="#5C5F62"/><path d="M12.994 9.186a.75.75 0 0 0-.988 1.128l1.744 1.526v.41h-1a.75.75 0 0 0 0 1.5h1v.5h-1a.75.75 0 0 0 0 1.5h1v.5a.75.75 0 0 0 1.5 0v-.5h1a.75.75 0 0 0 0-1.5h-1v-.5h1a.75.75 0 0 0 0-1.5h-1v-.41l1.744-1.526a.75.75 0 1 0-.988-1.128l-1.506 1.317-1.506-1.317Z" fill="#5C5F62"/></svg>