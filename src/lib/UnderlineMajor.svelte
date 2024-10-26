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
    export let ariaLabel = 'underline';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill="#5C5F62" d="M7.25 3.75a.75.75 0 0 0-1.5 0v6a4.25 4.25 0 0 0 8.5 0v-6a.75.75 0 0 0-1.5 0v6a2.75 2.75 0 1 1-5.5 0v-6Zm-2.5 11.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-10.5Z"/></svg>