
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
    export let ariaLabel = 'buy button button layout';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v1a.75.75 0 0 1-1.5 0v-1Zm1.75 11.25a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 1 1.5 0v1c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-1Zm11.25-11.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 0 0 1.5h1a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1Zm0 9.5a1.75 1.75 0 0 1-1.75 1.75h-1a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 1 1.5 0v1Zm-5.5-9.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Zm.75 10.75a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-5.75-8.25a2.5 2.5 0 0 0 0 5h8a2.5 2.5 0 0 0 0-5h-8Zm-1 2.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z" fill="#5C5F62"/></svg>