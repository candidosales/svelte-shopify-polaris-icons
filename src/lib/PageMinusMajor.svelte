
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
    export let ariaLabel = 'page minus';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M5.5 5.75c0-.69.56-1.25 1.25-1.25h2.75v3.25c0 .966.784 1.75 1.75 1.75h3.25v1.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.22-.53l-5-5a.75.75 0 0 0-.53-.22h-3.5a2.75 2.75 0 0 0-2.75 2.75v8.5a2.75 2.75 0 0 0 2.75 2.75h4.25a.75.75 0 0 0 0-1.5h-4.25c-.69 0-1.25-.56-1.25-1.25v-8.5Zm7.94 2.25-2.44-2.44v2.19c0 .138.112.25.25.25h2.19Z" fill="#5C5F62"/><path d="M12.25 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z" fill="#5C5F62"/></svg>