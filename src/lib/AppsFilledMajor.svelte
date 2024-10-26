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
    export let ariaLabel = 'apps filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M13.5 3.25a1 1 0 0 1 1 1v1.25h1.25a1 1 0 1 1 0 2h-1.25v1.25a1 1 0 1 1-2 0v-1.25h-1.25a1 1 0 1 1 0-2h1.25v-1.25a1 1 0 0 1 1-1Z" fill="#5C5F62"/><path d="M5.75 4a1.75 1.75 0 0 0-1.75 1.75v2.75a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-2.75Z" fill="#5C5F62"/><path d="M5.75 16a1.75 1.75 0 0 1-1.75-1.75v-2.75a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2.75Z" fill="#5C5F62"/><path d="M14.25 16a1.75 1.75 0 0 0 1.75-1.75v-2.75a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2.75Z" fill="#5C5F62"/></svg>