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
    export let ariaLabel = 'timeline attachment';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.75 4c-.69 0-1.25.56-1.25 1.25v9.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-9a.75.75 0 0 1 1.5 0v9a2.75 2.75 0 0 1-2.75 2.75h-6.5a2.75 2.75 0 0 1-2.75-2.75v-9.5a2.75 2.75 0 0 1 2.75-2.75h3a2.75 2.75 0 0 1 2.75 2.75v6.25a2.5 2.5 0 0 1-5 0v-5.5a.75.75 0 0 1 1.5 0v5.5a1 1 0 1 0 2 0v-6.25c0-.69-.56-1.25-1.25-1.25h-3Z" fill="#5C5F62"/></svg>