
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
    export let ariaLabel = 'location filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M11.194 16c1.524-1.373 3.806-4.484 3.806-8.106 0-2.703-2.239-4.894-5-4.894s-5 2.191-5 4.894c0 3.622 2.282 6.733 3.806 8.106h-3.056a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.056Zm.806-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#5C5F62"/></svg>