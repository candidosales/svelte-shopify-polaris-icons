
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
    export let ariaLabel = 'image alt';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.678 6.929a.75.75 0 0 0-1.356 0l-2.25 4.75a.75.75 0 0 0 1.356.642l.389-.821h2.366l.39.821a.75.75 0 0 0 1.355-.642l-2.25-4.75Zm-.205 3.071-.473-.998-.473.998h.946Z" fill="#5C5F62"/><path d="M10.25 6.75a.75.75 0 0 1 .75.75v3.75h1.5a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M13 6.75a.75.75 0 0 0 0 1.5h1v3.75a.75.75 0 0 0 1.5 0v-3.75h1a.75.75 0 0 0 0-1.5h-3.5Z" fill="#5C5F62"/></svg>