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
    export let ariaLabel = 'analytics table';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M5.5 16.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9Zm3.25-11.5h2.5v2h-2.5v-2Zm-1.5 0h-1.75a.5.5 0 0 0-.5.5v1.5h2.25v-2Zm0 3.5h-2.25v6a.5.5 0 0 0 .5.5h1.75v-6.5Zm1.5 6.5v-6.5h2.5v6.5h-2.5Zm4-8v-2h1.75a.5.5 0 0 1 .5.5v1.5h-2.25Zm0 1.5v6.5h1.75a.5.5 0 0 0 .5-.5v-6h-2.25Z" fill="#5C5F62"/></svg>