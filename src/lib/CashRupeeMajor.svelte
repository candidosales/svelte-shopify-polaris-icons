
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
    export let ariaLabel = 'cash rupee';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M11.889 13.893a.75.75 0 0 0-.246-1.032l-1.713-1.054a2.487 2.487 0 0 0 1.059-1.807h1.261a.75.75 0 0 0 0-1.5h-1.25v-.75h1.25a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 1 0 0 1.5h1.75v.75h-1.75a.75.75 0 0 0 0 1.5h1.721a.989.989 0 0 1-.96.75c-.902 0-1.237 1.184-.468 1.657l2.814 1.732a.75.75 0 0 0 1.032-.246Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#5C5F62"/></svg>