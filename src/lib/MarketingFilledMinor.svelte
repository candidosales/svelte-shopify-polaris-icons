
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
    export let ariaLabel = 'marketing filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5Z" fill="#5C5F62"/><path d="M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97 1.25 1.25 0 1 1 1.455-1.405Z" fill="#5C5F62"/><path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z" fill="#5C5F62"/></svg>