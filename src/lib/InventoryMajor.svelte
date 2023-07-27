
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
    export let ariaLabel = 'inventory';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M11.265 2.953a2.25 2.25 0 0 0-2.53 0l-4.094 2.784a3.75 3.75 0 0 0-1.641 3.1v7.413a.75.75 0 0 0 1.5 0v-7.412c0-.745.369-1.442.985-1.86l4.093-2.784a.75.75 0 0 1 .844 0l4.093 2.783a2.25 2.25 0 0 1 .985 1.86v7.413a.75.75 0 0 0 1.5 0v-7.412a3.75 3.75 0 0 0-1.641-3.101l-4.094-2.784Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M10 16.968a1 1 0 0 1-.25.032h-3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h.75v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h.75a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-.25-.032Zm.75-3.968v2.5h2v-2.5h-2Zm-1.5 2.5v-2.5h-2v2.5h2Zm1.75-4v-2.5h-2v2.5h2Z" fill="#5C5F62"/></svg>