
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
    export let ariaLabel = 'tax filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M7.085 3.627c-.25-.564.227-1.127.844-1.127h4.142c.617 0 1.094.563.844 1.127-.416.936-1.124 1.65-1.973 1.957a5.307 5.307 0 0 1 4.06 3.45l1.108 3.13c.922 2.604-1.008 5.336-3.77 5.336h-4.68c-2.762 0-4.692-2.732-3.77-5.335l1.108-3.13a5.307 5.307 0 0 1 4.06-3.451c-.85-.308-1.557-1.02-1.973-1.957Zm.915 7.373a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.692-5.692a.625.625 0 0 1 0 .884l-4.5 4.5a.625.625 0 1 1-.884-.884l4.5-4.5a.625.625 0 0 1 .884 0Z" fill="#5C5F62"/></svg>