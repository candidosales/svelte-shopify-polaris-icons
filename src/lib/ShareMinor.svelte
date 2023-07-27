
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
    export let ariaLabel = 'share';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M10.75 12.75a.75.75 0 0 1-1.5 0v-6.69l-1.22 1.22a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06l-1.22-1.22v6.69Z" fill="#5C5F62"/><path d="M16.5 10.25a2.25 2.25 0 0 0-2.25-2.25h-.07a.75.75 0 0 0 0 1.5h.07a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h.07a.75.75 0 0 0 0-1.5h-.07a2.25 2.25 0 0 0-2.25 2.25v4a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25v-4Z" fill="#5C5F62"/></svg>