
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
    export let ariaLabel = 'email';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6.567 7.57a.75.75 0 0 0-.634 1.36l3.538 1.651a1.25 1.25 0 0 0 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36l-3.433 1.603-3.433-1.602Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M6.75 4.5a3.75 3.75 0 0 0-3.75 3.75v3.5a3.75 3.75 0 0 0 3.75 3.75h6.5a3.75 3.75 0 0 0 3.75-3.75v-3.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v3.5a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25v-3.5Z" fill="#5C5F62"/></svg>