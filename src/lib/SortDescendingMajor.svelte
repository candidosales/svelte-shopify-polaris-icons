
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
    export let ariaLabel = 'sort descending';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-opacity="0.33" fill-rule="evenodd" d="M9.11612 4.82315C9.60427 4.33499 10.3957 4.33499 10.8839 4.82315L13.5303 7.46959C13.8232 7.76249 13.8232 8.23736 13.5303 8.53025C13.2374 8.82315 12.7626 8.82315 12.4697 8.53025L10 6.06058L7.53033 8.53025C7.23744 8.82315 6.76256 8.82315 6.46967 8.53025C6.17678 8.23736 6.17678 7.76249 6.46967 7.46959L9.11612 4.82315Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M9.11612 15.1769C9.60427 15.665 10.3957 15.665 10.8839 15.1769L13.5303 12.5304C13.8232 12.2375 13.8232 11.7626 13.5303 11.4697C13.2374 11.1769 12.7626 11.1769 12.4697 11.4697L10 13.9394L7.53033 11.4697C7.23744 11.1769 6.76256 11.1769 6.46967 11.4697C6.17678 11.7626 6.17678 12.2375 6.46967 12.5304L9.11612 15.1769Z" fill="#5C5F62"/></svg>
