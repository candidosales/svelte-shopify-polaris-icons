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
    export let ariaLabel = 'template';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M3.5 7.25a3.75 3.75 0 0 1 3.75-3.75h5.5a3.75 3.75 0 0 1 3.75 3.75v5.5a3.75 3.75 0 0 1-3.75 3.75h-5.5a3.75 3.75 0 0 1-3.75-3.75v-5.5Zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v.5h10v-.5a2.25 2.25 0 0 0-2.25-2.25h-5.5Zm3.75 4.25h-6v3.5a2.25 2.25 0 0 0 2.25 2.25h3.75v-5.75Zm1.5 5.75v-5.75h2.5v3.5a2.25 2.25 0 0 1-2.25 2.25h-.25Z" fill="#5C5F62"/></svg>