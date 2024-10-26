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
    export let ariaLabel = 'finances';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M9.755 3.145a1.25 1.25 0 0 1 1.008.015l5.654 2.591a1 1 0 0 1 .583.91v.59a1 1 0 0 1-1 1h-.5v3.749h.25a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1 0-1.5h.25v-3.75h-.5a1 1 0 0 1-1-1v-.584a1 1 0 0 1 .61-.921l6.145-2.6Zm.483 1.425-5.154 2.18h9.911l-4.757-2.18Zm3.762 7.43v-3.75h-1.5v3.75h1.5Zm-5-3.75h2v3.75h-2v-3.75Zm-1.5 3.75v-3.75h-1.5v3.75h1.5Z" fill="#5C5F62"/><path d="M3.5 15.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5h-11.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/></svg>