
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
    export let ariaLabel = 'tiktok';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill="#5C5F62" fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm1.78 2.5c.14 1.26.85 2 2.06 2.08V9c-.7.07-1.32-.16-2.04-.6v2.65c0 3.36-3.67 4.4-5.14 2-.94-1.55-.36-4.27 2.67-4.37v1.49a4.8 4.8 0 0 0-.7.17c-.67.23-1.05.66-.95 1.41.2 1.45 2.86 1.88 2.64-.95V5.5h1.46Z"/></svg>
