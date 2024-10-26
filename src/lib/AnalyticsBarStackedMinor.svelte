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
    export let ariaLabel = 'analytics bar stacked';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M5.25 5.75a2.25 2.25 0 0 0-2.25 2.25v4a2.25 2.25 0 0 0 2.25 2.25h9.5a2.25 2.25 0 0 0 2.25-2.25v-4a2.25 2.25 0 0 0-2.25-2.25h-9.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h4.75v5.5h-4.75a.75.75 0 0 1-.75-.75v-4Zm8.5 4.75h1.75a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-1.75v5.5Z" fill="#5C5F62"/></svg>