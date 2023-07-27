
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
    export let ariaLabel = 'volume';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M13.5 5v3.042a3 3 0 0 0 .137.895l1.552 4.966a2 2 0 0 1-1.91 2.597h-6.559a2 2 0 0 1-1.909-2.597l1.552-4.966a3 3 0 0 0 .137-.895v-3.042h-.5a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5h-.5Zm-5.5 3.042v-3.042h4v2.25h-.75a.75.75 0 0 0 0 1.5h.806c.034.214.084.427.149.634l.27.866h-4.95l.27-.866a4.5 4.5 0 0 0 .205-1.342Zm-.944 3.708h5.888l.813 2.6a.5.5 0 0 1-.477.65h-6.56a.5.5 0 0 1-.477-.65l.813-2.6Z" fill="#5C5F62"/></svg>