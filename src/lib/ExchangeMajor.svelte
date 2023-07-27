
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
    export let ariaLabel = 'exchange';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M15.5 11.364a2.501 2.501 0 1 1-1.5 0v-2.364a2.25 2.25 0 0 0-2.25-2.25h-.44l.47.47a.75.75 0 0 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 1 1 1.06 1.06l-.47.47h.44a3.75 3.75 0 0 1 3.75 3.75v2.364Zm.25 2.386a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M6 11v-2.364a2.501 2.501 0 1 0-1.5 0v2.364a3.75 3.75 0 0 0 3.75 3.75h.44l-.47.47a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06l-1.75-1.75a.75.75 0 0 0-1.06 1.06l.47.47h-.44a2.25 2.25 0 0 1-2.25-2.25Zm.25-4.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/></svg>