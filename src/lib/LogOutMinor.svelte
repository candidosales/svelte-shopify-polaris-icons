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
    export let ariaLabel = 'log out';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M9.75 3a2.25 2.25 0 0 0-2.25 2.25.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 2.25 2.25h4a2.25 2.25 0 0 0 2.25-2.25v-9.5a2.25 2.25 0 0 0-2.25-2.25h-4Z" fill="#5C5F62"/><path d="M12.25 10.75a.75.75 0 0 0 0-1.5h-5.69l.97-.97a.75.75 0 0 0-1.06-1.06l-2.25 2.25a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h5.69Z" fill="#5C5F62"/></svg>