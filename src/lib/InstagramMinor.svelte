
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
    export let ariaLabel = 'instagram';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill="#5C5F62" d="M8.27 10a1.73 1.73 0 1 1 3.46 0 1.73 1.73 0 0 1-3.46 0Z"/><path fill="#5C5F62" fill-rule="evenodd" d="M7.92 6.2c-.95 0-1.73.77-1.73 1.72v4.16c0 .95.78 1.73 1.73 1.73h4.16c.95 0 1.73-.78 1.73-1.73V7.92c0-.95-.78-1.73-1.73-1.73H7.92Zm4.68 1.72a.52.52 0 1 0 0-1.03.52.52 0 0 0 0 1.03ZM7.58 10a2.43 2.43 0 1 0 4.85 0 2.43 2.43 0 0 0-4.85 0Z"/><path fill="#5C5F62" fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-4.5 9.08a2.43 2.43 0 0 0 2.42 2.42h4.16a2.43 2.43 0 0 0 2.42-2.42V7.92a2.43 2.43 0 0 0-2.42-2.42H7.92A2.43 2.43 0 0 0 5.5 7.92v4.16Z"/></svg>
