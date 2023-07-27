
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
    export let ariaLabel = 'title';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M4 4.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75h-3.5v8.75h1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.25v-8.75h-3.5v.75a.75.75 0 0 1-1.5 0v-1.5Z" fill="#5C5F62"/></svg>