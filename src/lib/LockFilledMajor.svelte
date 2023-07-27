
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
    export let ariaLabel = 'lock filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.25 6.75v.345a3.001 3.001 0 0 0-2.25 2.905v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4a3.001 3.001 0 0 0-2.25-2.905v-.345a3.75 3.75 0 1 0-7.5 0Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.25h4.5v-.25a2.25 2.25 0 0 0-2.25-2.25Zm1.5 7.25a1.5 1.5 0 0 1-.75 1.3v.45a.75.75 0 0 1-1.5 0v-.45a1.5 1.5 0 1 1 2.25-1.3Z" fill="#5C5F62"/></svg>