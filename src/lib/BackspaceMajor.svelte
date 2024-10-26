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
    export let ariaLabel = 'backspace';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M14.03 7.47a.75.75 0 0 1 0 1.06l-1.47 1.47 1.47 1.47a.75.75 0 1 1-1.06 1.06l-1.47-1.47-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 1.06-1.06l1.47 1.47 1.47-1.47a.75.75 0 0 1 1.06 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M5.553 5.083a2.75 2.75 0 0 1 2.188-1.083h6.509a2.75 2.75 0 0 1 2.75 2.75v6.5a2.75 2.75 0 0 1-2.75 2.75h-6.51a2.75 2.75 0 0 1-2.187-1.083l-2.476-3.25a2.75 2.75 0 0 1 0-3.334l2.476-3.25Zm2.188.417c-.39 0-.758.182-.995.492l-2.476 3.25a1.25 1.25 0 0 0 0 1.516l2.476 3.25c.237.31.604.492.995.492h6.509c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25h-6.51Z" fill="#5C5F62"/></svg>