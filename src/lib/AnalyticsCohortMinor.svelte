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
    export let ariaLabel = 'analytics cohort';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M4.5 3.25c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-2.75h2.75c.69 0 1.25-.56 1.25-1.25v-2.75h2.75c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-11Zm4.25 8h2.5v-2.5h-2.5v2.5Zm-4 1.5v2.5h2.5v-2.5h-2.5Zm0-1.5h2.5v-2.5h-2.5v2.5Zm6.5-4h-2.5v-2.5h2.5v2.5Zm-6.5 0h2.5v-2.5h-2.5v2.5Zm10.5 0h-2.5v-2.5h2.5v2.5Z" fill="#5C5F62"/></svg>