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
    export let ariaLabel = 'capital filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25s-5.25 1.903-5.25 4.25c0 2.141 1.956 3.913 4.501 4.207a.763.763 0 0 0-.001.043v4.25a.75.75 0 0 0 1.5 0v-4.25l-.001-.043Z" fill="#5C5F62"/><path d="M5 11.5c-.446 0-.872.083-1.265.235a3.5 3.5 0 0 0 4.53 4.53 3.5 3.5 0 0 0-3.265-4.765Z" fill="#5C5F62"/><path d="M15 11.5c.446 0 .872.083 1.265.235a3.5 3.5 0 0 1-4.53 4.53 3.5 3.5 0 0 1 3.265-4.765Z" fill="#5C5F62"/></svg>