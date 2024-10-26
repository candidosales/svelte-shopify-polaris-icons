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
    export let ariaLabel = 'transaction fee pound';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M4 5.25a2.25 2.25 0 0 1 4.372-.75h3.256a2.251 2.251 0 1 1 0 1.5h-2.878v5.25c0 .69.56 1.25 1.25 1.25h.25a.75.75 0 0 1 0 1.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-3.984a2.25 2.25 0 0 1-3.25-2.016Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm7.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" fill="#5C5F62"/><path d="M15 8.75a1.75 1.75 0 0 0-1.75 1.75v2h-.5a.75.75 0 0 0 0 1.5h.5v1.5h-.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1.5v-1.5h.5a.75.75 0 0 0 0-1.5h-.5v-2a.25.25 0 0 1 .25-.25h.5v1a.75.75 0 0 0 1.5 0v-1.25c0-.69-.56-1.25-1.25-1.25h-.75Z" fill="#5C5F62"/></svg>