
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
    export let ariaLabel = 'credit card cancel';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M2.75 7.25a2.75 2.75 0 0 1 2.75-2.75h9.5a2.75 2.75 0 0 1 2.75 2.75v2.5a.75.75 0 0 1-1.5 0v-.5h-12v3.5c0 .69.56 1.25 1.25 1.25h5.02a.75.75 0 0 1 0 1.5h-5.02a2.75 2.75 0 0 1-2.75-2.75v-5.5Zm12.25-1.25c.69 0 1.25.56 1.25 1.25h-12c0-.69.56-1.25 1.25-1.25h9.5Z" fill="#5C5F62"/><path d="M6.25 11.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5h-2.75Z" fill="#5C5F62"/><path d="M16.78 11.72a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0Z" fill="#5C5F62"/></svg>