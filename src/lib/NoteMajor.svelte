
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
    export let ariaLabel = 'note';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6.55 7.25a.7.7 0 0 1 .7-.7h5.5a.7.7 0 0 1 0 1.4h-5.5a.7.7 0 0 1-.7-.7Z" fill="#5C5F62"/><path d="M7 9.05a.7.7 0 0 0 0 1.4h2.25a.7.7 0 1 0 0-1.4h-2.25Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M3.5 6.25a2.75 2.75 0 0 1 2.75-2.75h7.5a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-.22.53l-4 4a.75.75 0 0 1-.53.22h-5.5a2.75 2.75 0 0 1-2.75-2.75v-7.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v7.5c0 .69.56 1.25 1.25 1.25h4.75v-2.25c0-.966.784-1.75 1.75-1.75h2.25v-4.75c0-.69-.56-1.25-1.25-1.25h-7.5Zm7.69 7.5h-1.19a.25.25 0 0 0-.25.25v1.19l1.44-1.44Z" fill="#5C5F62"/></svg>