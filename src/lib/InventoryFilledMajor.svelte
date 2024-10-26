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
    export let ariaLabel = 'inventory filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M8.77 3.406a2.25 2.25 0 0 1 2.46 0l3.569 2.328a3.75 3.75 0 0 1 1.701 3.141v6.875c0 .69-.56 1.25-1.25 1.25h-10.5c-.69 0-1.25-.56-1.25-1.25v-6.875a3.75 3.75 0 0 1 1.702-3.141l3.569-2.328Zm2.73 4.594a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2.5Zm-2 4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2.5Zm3.5-.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .5-.5h2Z" fill="#5C5F62"/></svg>