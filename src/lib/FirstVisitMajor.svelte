
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
    export let ariaLabel = 'first visit';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="m8.8 8.69.7-.3v3.11h-1a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5h-1V8c0-.89-.92-1.5-1.74-1.14L8.2 7.3a.75.75 0 0 0 .6 1.38Z" fill="#5C5F62"/><path fill="#5C5F62" fill-rule="evenodd" d="M10 4a7.63 7.63 0 0 0-5.58 2.53 9.27 9.27 0 0 0-1.77 2.74c-.08.23-.15.49-.15.73s.07.5.15.73c.09.24.21.52.37.82.32.58.79 1.27 1.4 1.92A7.63 7.63 0 0 0 10 16a7.63 7.63 0 0 0 5.58-2.53 9.26 9.26 0 0 0 1.77-2.74c.08-.23.15-.49.15-.73s-.07-.5-.15-.73a9.27 9.27 0 0 0-1.77-2.74A7.63 7.63 0 0 0 10 4Zm-6 6 .07-.23a7.77 7.77 0 0 1 1.45-2.21A6.14 6.14 0 0 1 10 5.5c1.94 0 3.44.96 4.49 2.06a7.77 7.77 0 0 1 1.44 2.21L16 10l-.07.23a7.77 7.77 0 0 1-1.45 2.21A6.14 6.14 0 0 1 10 14.5a6.14 6.14 0 0 1-4.49-2.06 7.77 7.77 0 0 1-1.44-2.21L4 10Z"/></svg>