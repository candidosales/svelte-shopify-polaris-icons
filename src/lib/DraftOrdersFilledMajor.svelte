
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
    export let ariaLabel = 'draft orders filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M16.704 1.104a.5.5 0 0 0-.707 0l-.957.957 1.768 1.767.957-.957a.5.5 0 0 0 0-.707l-1.06-1.06Z" fill="#5C5F62"/><path d="m16.1 4.536-1.767-1.768-3.83 3.83a2 2 0 0 0-.585 1.348l-.026.772a.25.25 0 0 0 .258.258l.772-.025a2 2 0 0 0 1.348-.585l3.83-3.83Z" fill="#5C5F62"/><path d="M5.739 6.067a1.25 1.25 0 0 1 1.237-1.067h3.774a.75.75 0 0 0 0-1.5h-3.774a2.75 2.75 0 0 0-2.72 2.347l-.662 4.46a8.75 8.75 0 0 0-.094 1.282v1.661a3.25 3.25 0 0 0 3.25 3.25h6.5a3.25 3.25 0 0 0 3.25-3.25v-1.66c0-.43-.032-.858-.095-1.283l-.413-2.792a.75.75 0 0 0-1.484.22l.336 2.265h-2.484a1.25 1.25 0 0 0-1.185.855l-.159.474a.25.25 0 0 1-.237.171h-1.558a.25.25 0 0 1-.237-.17l-.159-.475a1.25 1.25 0 0 0-1.185-.855h-2.484l.583-3.933Z" fill="#5C5F62"/></svg>