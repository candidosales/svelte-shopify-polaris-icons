
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
    export let ariaLabel = 'metafields';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M4 6v1.5h-.5a1 1 0 00-1 1v6a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-6a1 1 0 00-1-1H16V6a1 1 0 00-1-1h-3a1 1 0 00-1 1v1.5H9V6a1 1 0 00-1-1H5a1 1 0 00-1 1zm1.5.5v1h2v-1h-2zm7 1h2v-1h-2v1zM4 9v4.5h12V9H4z" fill="#5C5F62"/></svg>