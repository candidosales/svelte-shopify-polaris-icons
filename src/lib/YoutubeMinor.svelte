
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
    export let ariaLabel = 'youtube';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill="#5C5F62" d="M8.96 8.52v2.83l2.7-1.41-2.7-1.42Z"/><path fill="#5C5F62" fill-rule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm4.5 4.03c.3.3.4 1 .4 1s.1.81.1 1.63v.76c0 .82-.1 1.63-.1 1.63s-.1.7-.4 1c-.34.36-.72.4-.94.42h-.06c-1.4.11-3.5.11-3.5.11s-2.6-.02-3.4-.1l-.14-.02c-.25-.03-.65-.08-.96-.4-.3-.31-.4-1-.4-1s-.1-.82-.1-1.64v-.76c0-.82.1-1.63.1-1.63s.1-.7.4-1a1.37 1.37 0 0 1 1-.43c1.4-.1 3.5-.1 3.5-.1s2.1 0 3.5.1h.06c.22.03.6.07.94.43Z"/></svg>