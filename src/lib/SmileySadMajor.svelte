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
    export let ariaLabel = 'smiley sad';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M15.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm1.5 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-7.957 2.69a2.5 2.5 0 0 1 2.725.542.75.75 0 1 0 1.06-1.06 3.998 3.998 0 0 0-5.656 0 .75.75 0 1 0 1.06 1.06 2.5 2.5 0 0 1 .811-.542Zm1.707-4.94a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Zm-2.25-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z" fill="#5C5F62"/></svg>