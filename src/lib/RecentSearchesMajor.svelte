
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
    export let ariaLabel = 'recent searches';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M9.75 6.5a.75.75 0 0 0-1.5 0v2.5c0 .284.16.544.415.67l1.5.75a.75.75 0 1 0 .67-1.34l-1.085-.544v-2.036Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M9 14.5c1.248 0 2.4-.416 3.323-1.117l2.897 2.897a.75.75 0 1 0 1.06-1.06l-2.897-2.897a5.5 5.5 0 1 0-4.383 2.177Zm0-1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#5C5F62"/></svg>