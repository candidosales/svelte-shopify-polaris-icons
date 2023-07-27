
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
    export let ariaLabel = 'chat';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6 8a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M6.75 9.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M3 8.75a4.75 4.75 0 0 1 4.75-4.75h4.5a4.75 4.75 0 0 1 4.75 4.75v.75a4.75 4.75 0 0 1-4.75 4.75h-1.626l-3.178 2.353a.75.75 0 0 1-1.196-.603v-1.992a4.751 4.751 0 0 1-3.25-4.508v-.75Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v.75a3.251 3.251 0 0 0 2.64 3.193.75.75 0 0 1 .61.737v1.082l2.18-1.615a.75.75 0 0 1 .447-.147h1.873a3.25 3.25 0 0 0 3.25-3.25v-.75a3.25 3.25 0 0 0-3.25-3.25h-4.5Z" fill="#5C5F62"/></svg>