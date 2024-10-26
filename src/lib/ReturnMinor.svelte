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
    export let ariaLabel = 'return';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10.75 12c.241 0 .334 0 .41-.004a3.25 3.25 0 0 0 3.086-3.087c.004-.075.004-.168.004-.409 0-.241 0-.334-.004-.41a3.25 3.25 0 0 0-3.087-3.086 9.616 9.616 0 0 0-.409-.004h-1.5a.75.75 0 0 1 0-1.5h1.524c.21 0 .342 0 .46.006a4.75 4.75 0 0 1 4.51 4.51c.006.118.006.25.006.46v.048c0 .21 0 .342-.006.46a4.75 4.75 0 0 1-4.51 4.51c-.118.006-.25.006-.46.006h-3.963l1.72 1.72a.75.75 0 1 1-1.061 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h3.94Z" fill="#5C5F62"/></svg>