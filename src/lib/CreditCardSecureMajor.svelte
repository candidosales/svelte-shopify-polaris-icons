
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
    export let ariaLabel = 'credit card secure';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M2.5 6.75a2.75 2.75 0 0 1 2.75-2.75h9.5a2.75 2.75 0 0 1 2.75 2.75v1.25a.75.75 0 0 1-1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-9.5c-.69 0-1.25.56-1.25 1.25v.5h8a1 1 0 1 1 0 2h-8v4c0 .69.56 1.25 1.25 1.25h4.052a.75.75 0 0 1 0 1.5h-4.052a2.75 2.75 0 0 1-2.75-2.75v-6.5Z" fill="#5C5F62"/><path d="M5.75 11.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M13 12.25a1 1 0 0 0-1 1v2.75a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.75a1 1 0 0 0-1-1v-.75a2 2 0 1 0-4 0v.75Zm2.5 0v-.75a.5.5 0 0 0-1 0v.75h1Z" fill="#5C5F62"/></svg>