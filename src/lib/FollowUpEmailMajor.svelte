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
    export let ariaLabel = 'follow up email';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M3 7.25a2.75 2.75 0 0 1 2.75-2.75h8.5a2.75 2.75 0 0 1 2.75 2.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h4.25a.75.75 0 0 1 0 1.5h-4.25a2.75 2.75 0 0 1-2.75-2.75v-5.5Z" fill="#5C5F62"/><path d="M11.75 14.25a.75.75 0 0 1 .75-.75h2.94l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.94a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M6.567 7.57a.75.75 0 0 0-.634 1.36l3.538 1.651a1.25 1.25 0 0 0 1.058 0l3.538-1.651a.75.75 0 0 0-.634-1.36l-3.433 1.603-3.433-1.602Z" fill="#5C5F62"/></svg>