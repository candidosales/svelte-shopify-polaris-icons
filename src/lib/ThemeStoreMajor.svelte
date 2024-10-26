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
    export let ariaLabel = 'theme store';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M7.25 3.5a3.75 3.75 0 0 0-3.75 3.75v5.5a3.75 3.75 0 0 0 3.75 3.75h4a.75.75 0 0 0 .75-.75v-10.75h.75a2.25 2.25 0 0 1 2.25 2.25v1a.75.75 0 0 0 1.5 0v-1a3.75 3.75 0 0 0-3.75-3.75h-5.5Zm3.25 6v5.5h-3.25a2.25 2.25 0 0 1-2.25-2.25v-3.25h5.5Zm0-4.5v3h-5.5v-.75a2.25 2.25 0 0 1 2.25-2.25h3.25Z" fill="#5C5F62"/><path d="M14 11.107a1.876 1.876 0 0 0 .625 3.643h.75a.375.375 0 0 1 0 .75h-1.875a.75.75 0 0 0 0 1.5h.5v.25a.75.75 0 0 0 1.5 0v-.254a1.875 1.875 0 0 0-.125-3.746h-.75a.375.375 0 0 1 0-.75h1.875a.75.75 0 0 0 0-1.5h-1v-.25a.75.75 0 0 0-1.5 0v.357Z" fill="#5C5F62"/></svg>