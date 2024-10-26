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
    export let ariaLabel = 'app extension';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M12.28 8.78a.75.75 0 0 1-1.06-1.06l3.22-3.22h-1.19a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-1.19l-3.22 3.22Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M5.75 3.5a2.25 2.25 0 0 0-2.25 2.25v2.75a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.75Zm-.75 2.25a.75.75 0 0 1 .75-.75h2.25v3h-3v-2.25Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M3.5 14.25a2.25 2.25 0 0 0 2.25 2.25h2.75a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.75Zm2.25.75a.75.75 0 0 1-.75-.75v-2.25h3v3h-2.25Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M14.25 16.5a2.25 2.25 0 0 0 2.25-2.25v-2.75a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.75Zm.75-2.25a.75.75 0 0 1-.75.75h-2.25v-3h3v2.25Z" fill="#5C5F62"/></svg>