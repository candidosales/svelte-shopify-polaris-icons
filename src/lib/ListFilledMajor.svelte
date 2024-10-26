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
    export let ariaLabel = 'list filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M4 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#5C5F62"/><path d="M4 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#5C5F62"/><path d="M5.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#5C5F62"/><path d="M7.5 4a1 1 0 0 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z" fill="#5C5F62"/><path d="M6.5 10a1 1 0 0 1 1-1h8.5a1 1 0 1 1 0 2h-8.5a1 1 0 0 1-1-1Z" fill="#5C5F62"/><path d="M7.5 14a1 1 0 1 0 0 2h8.5a1 1 0 1 0 0-2h-8.5Z" fill="#5C5F62"/></svg>