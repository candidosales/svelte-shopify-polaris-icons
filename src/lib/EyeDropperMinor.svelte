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
    export let ariaLabel = 'eye dropper';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="m14.42 9.116 1.401-1.401a2.5 2.5 0 0 0-3.535-3.536l-.743.743-.007.007-.652.652-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06-5.644 5.645a2.5 2.5 0 1 0 3.535 3.535l5.645-5.644 1.06 1.06a.75.75 0 0 0 1.061-1.06l-1.06-1.06Zm-2.122 0-5.644 5.645a1 1 0 0 1-1.414-1.415l5.644-5.644 1.414 1.414Z" fill="#5C5F62"/></svg>