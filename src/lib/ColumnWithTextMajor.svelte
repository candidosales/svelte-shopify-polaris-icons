
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
    export let ariaLabel = 'column with text';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M3 5.75c0-.966.784-1.75 1.75-1.75h3.25c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3.25a1.75 1.75 0 0 1-1.75-1.75v-3Zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3.25a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25h-3.25Z" fill="#5C5F62"/><path d="M3 12.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5h-5.25a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M3.75 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5h-2.625Z" fill="#5C5F62"/><path d="M11 14.5a.75.75 0 0 0 0 1.5h2.625a.75.75 0 0 0 0-1.5h-2.625Z" fill="#5C5F62"/><path d="M11 11.75a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5h-5.25Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M12 4a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h3.25a1.75 1.75 0 0 0 1.75-1.75v-3a1.75 1.75 0 0 0-1.75-1.75h-3.25Zm-.25 1.75a.25.25 0 0 1 .25-.25h3.25a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-3.25a.25.25 0 0 1-.25-.25v-3Z" fill="#5C5F62"/></svg>