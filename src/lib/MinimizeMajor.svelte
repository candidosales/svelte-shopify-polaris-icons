
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
    export let ariaLabel = 'minimize';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M13.75 9.5a.75.75 0 0 0 0-1.5h-.69l3.22-3.22a.75.75 0 0 0-1.06-1.06l-3.22 3.22v-.69a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2.5Z" fill="#5C5F62"/><path d="M6.25 10.5a.75.75 0 0 0 0 1.5h.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l3.22-3.22v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5Z" fill="#5C5F62"/></svg>