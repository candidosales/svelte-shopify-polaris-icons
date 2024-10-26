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
    export let ariaLabel = 'mark paid';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M13.28 7.78a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M4 16a1.5 1.5 0 0 0 2.615 1.003l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.23 0l1.135-1.26 1.135 1.26a1.5 1.5 0 0 0 2.615-1.003v-11a2.5 2.5 0 0 0-2.5-2.5h-7a2.5 2.5 0 0 0-2.5 2.5v11Zm2.5-12a1 1 0 0 0-1 1v11l1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674 1.507-1.674a1 1 0 0 1 1.486 0l1.507 1.674v-11a1 1 0 0 0-1-1h-7Z" fill="#5C5F62"/></svg>