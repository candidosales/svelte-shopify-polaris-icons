
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
    export let ariaLabel = 'behavior filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M9.75 3a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z" fill="#5C5F62"/><path d="M14.28 5.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z" fill="#5C5F62"/><path d="M7.28 12.22a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z" fill="#5C5F62"/><path d="M6.25 10.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5Z" fill="#5C5F62"/><path d="M7.03 7.03a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06Z" fill="#5C5F62"/><path d="M8.22 8.22a.75.75 0 0 1 .767-.181l7.5 2.5a.75.75 0 0 1 .293 1.241l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.241-.293l-2.5-7.5a.75.75 0 0 1 .18-.767Z" fill="#5C5F62"/></svg>