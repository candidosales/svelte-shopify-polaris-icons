
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
    export let ariaLabel = 'credit card percent';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M5.25 4a2.75 2.75 0 0 0-2.75 2.75v6.5a2.75 2.75 0 0 0 2.75 2.75h5.104a.75.75 0 0 0 0-1.5h-5.104c-.69 0-1.25-.56-1.25-1.25v-4h12a.75.75 0 0 0 1.5 0v-2.5a2.75 2.75 0 0 0-2.75-2.75h-9.5Zm10.75 3.25v-.5c0-.69-.56-1.25-1.25-1.25h-9.5c-.69 0-1.25.56-1.25 1.25v.5h12Z" fill="#5C5F62"/><path d="M16.47 11.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4Z" fill="#5C5F62"/><path d="M13 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#5C5F62"/><path d="M18 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/><path d="M6.25 11.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5h-2.75Z" fill="#5C5F62"/></svg>