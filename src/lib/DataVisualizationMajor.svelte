
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
    export let ariaLabel = 'data visualization';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M13.5 6.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" fill="#5C5F62"/><path d="M7.25 8.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M10.75 8a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M3.25 4.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5v6a3 3 0 0 1-2.877 2.998l.588 1.765a.75.75 0 1 1-1.422.474l-.746-2.237h-3.086l-.746 2.237a.75.75 0 1 1-1.423-.474l.589-1.765a3 3 0 0 1-2.877-2.998v-6a.75.75 0 0 1-.75-.75Zm2.25.75h9v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6Z" fill="#5C5F62"/></svg>