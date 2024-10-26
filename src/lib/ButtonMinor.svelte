<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->

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
    export let ariaLabel = 'button';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6.75 4a3.75 3.75 0 0 0-3.75 3.75v2.5a3.75 3.75 0 0 0 3.75 3.75h1.5a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-2.25-2.25v-2.5a2.25 2.25 0 0 1 2.25-2.25h6.5a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5a3.75 3.75 0 0 0-3.75-3.75h-6.5Z" fill="#5C5F62"/><path d="M9.464 8.464a.75.75 0 0 1 .78-.176l6.01 2.12a.75.75 0 0 1 .281 1.238l-1.237 1.238 1.414 1.414a.75.75 0 0 1 0 1.06l-.353.354a.75.75 0 0 1-1.06 0l-1.415-1.414-1.238 1.238a.75.75 0 0 1-1.237-.281l-2.121-6.01a.75.75 0 0 1 .176-.78Z" fill="#5C5F62"/></svg>