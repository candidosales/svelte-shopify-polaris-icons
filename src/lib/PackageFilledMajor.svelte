
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
    export let ariaLabel = 'package filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M15.884 6.625a2.75 2.75 0 0 0-.434-.858l-.8-1.067c-.33-.44-.85-.7-1.4-.7h-2.625v2.625h5.259Z" fill="#5C5F62"/><path d="M9.375 4h-2.524a1.75 1.75 0 0 0-1.358.646l-.877 1.08a2.75 2.75 0 0 0-.486.899h5.245v-2.625Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M4 7.875h12v6.375a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75v-6.375Zm2.5 4.875v-2a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/></svg>