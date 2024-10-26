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
    export let ariaLabel = 'plan filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="m14.208 4.688 1.533-2.3a.25.25 0 0 0-.208-.388h-3.066a.25.25 0 0 0-.208.389l1.533 2.299a.25.25 0 0 0 .416 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M11.25 7c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25v8.75c0 .69-.56 1.25-1.25 1.25h-11.5c-.69 0-1.25-.56-1.25-1.25v-2.75c0-.69.56-1.25 1.25-1.25h2.75v-1.75c0-.69.56-1.25 1.25-1.25h3v-1.75Zm1.5.25v2.25h1.5v-2.25h-1.5Zm-4.25 3h1.5v2.25h-1.5v-2.25Zm-4 3h1.5v2.25h-1.5v-2.25Z" fill="#5C5F62"/></svg>