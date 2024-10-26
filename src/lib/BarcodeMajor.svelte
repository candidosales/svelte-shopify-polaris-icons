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
    export let ariaLabel = 'barcode';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M4.5 6.25a.75.75 0 0 1 .75-.75h.487a.75.75 0 1 0 0-1.5h-.487a2.25 2.25 0 0 0-2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5Z" fill="#5C5F62"/><path d="M4.5 13.76c0 .414.336.75.75.75h.5a.75.75 0 0 1 0 1.5h-.5a2.25 2.25 0 0 1-2.25-2.25v-.5a.75.75 0 0 1 1.5 0v.5Z" fill="#5C5F62"/><path d="M14.75 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5a2.25 2.25 0 0 0-2.25-2.25h-.5a.75.75 0 0 0 0 1.5h.5Z" fill="#5C5F62"/><path d="M15.5 13.76a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5h.5a2.25 2.25 0 0 0 2.25-2.25v-.5a.75.75 0 0 0-1.5 0v.5Z" fill="#5C5F62"/><path d="M6 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Z" fill="#5C5F62"/><path d="M10.5 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z" fill="#5C5F62"/><path d="M8 7.625a.625.625 0 1 1 1.25 0v4.75a.625.625 0 1 1-1.25 0v-4.75Z" fill="#5C5F62"/><path d="M13 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z" fill="#5C5F62"/></svg>