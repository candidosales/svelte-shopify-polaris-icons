
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
    export let ariaLabel = 'replay';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M11.53 3.47a.75.75 0 1 0-1.06 1.06l1.72 1.72h-2.69a5 5 0 0 0 0 10h.5a4.75 4.75 0 0 0 4.75-4.75.75.75 0 0 0-1.5 0 3.25 3.25 0 0 1-3.25 3.25h-.5a3.5 3.5 0 1 1 0-7h2.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z" fill="#5C5F62"/></svg>