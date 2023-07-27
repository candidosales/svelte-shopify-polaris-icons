
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
    export let ariaLabel = 'home filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M14 16h-2a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-4.257a3 3 0 0 1 .879-2.122l3.707-3.707a2 2 0 0 1 2.828 0l3.707 3.707a3 3 0 0 1 .879 2.122v4.257a2 2 0 0 1-2 2Z" fill="#5C5F62"/></svg>