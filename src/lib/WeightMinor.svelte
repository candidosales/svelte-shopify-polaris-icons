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
    export let ariaLabel = 'weight';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M4.75 3.75a.75.75 0 0 0-1.5 0c0 .966.784 1.75 1.75 1.75h4.25v1.5h-3.5a2.25 2.25 0 0 0-2.25 2.25v5a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-3.5v-1.5h4.25a1.75 1.75 0 0 0 1.75-1.75.75.75 0 0 0-1.5 0 .25.25 0 0 1-.25.25h-10a.25.25 0 0 1-.25-.25Zm.25 5.5a.75.75 0 0 1 .75-.75h4.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6h4.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-5Zm5 3.75a1.5 1.5 0 0 0 1.478-1.756l-.998.832a.75.75 0 1 1-.96-1.152l.998-.832a1.5 1.5 0 1 0-.518 2.908Z" fill="#5C5F62"/></svg>