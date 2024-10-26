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
    export let ariaLabel = 'connect';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10.95 11a1.5 1.5 0 1 1 0 1.5h-4.7a2.75 2.75 0 0 1-2.75-2.75v-3.5a2.75 2.75 0 0 1 2.75-2.75h5.5a.75.75 0 0 1 0 1.5h-5.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h4.7Z" fill="#5C5F62"/><path d="M14 16.25a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.75 2.75 0 0 0-2.75-2.75h-4.7a1.5 1.5 0 1 0 0 1.5h4.7c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-5.5a.75.75 0 0 0 0 1.5h5.5Z" fill="#5C5F62"/></svg>