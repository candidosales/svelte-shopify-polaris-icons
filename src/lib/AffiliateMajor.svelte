
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
    export let ariaLabel = 'affiliate';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M16.5 6a2.5 2.5 0 0 1-3.656 2.217l-2.896 2.896c.35.544.552 1.192.552 1.887v.023l1.148.128a2.501 2.501 0 1 1-.062 1.502l-1.419-.158v-.005a3.5 3.5 0 1 1-4.372-4.777l-.17-1.24a2.5 2.5 0 1 1 1.483-.231l.173 1.27a3.48 3.48 0 0 1 1.606.54l2.896-2.896a2.5 2.5 0 1 1 4.717-1.156Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/></svg>