
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
    export let ariaLabel = 'nature';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M7.75 3.5a4.25 4.25 0 0 0-3.606 6.5 4.25 4.25 0 0 0 5.856 5.856 4.25 4.25 0 0 0 5.856-5.856 4.25 4.25 0 0 0-5.856-5.856 4.233 4.233 0 0 0-2.25-.644Zm-2.75 4.25a2.75 2.75 0 0 1 4.25-2.305v1.909a2.756 2.756 0 0 0-1.896 1.896h-1.91a2.734 2.734 0 0 1-.444-1.5Zm.445 3a2.75 2.75 0 0 0 3.805 3.805v-1.909a2.756 2.756 0 0 1-1.896-1.896h-1.91Zm3.305-.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm2 4.555v-1.909a2.756 2.756 0 0 0 1.896-1.896h1.91a2.75 2.75 0 0 1-3.805 3.805Zm3.805-5.305a2.75 2.75 0 0 0-3.805-3.805v1.909c.916.259 1.637.98 1.896 1.896h1.91Z" fill="#5C5F62"/></svg>