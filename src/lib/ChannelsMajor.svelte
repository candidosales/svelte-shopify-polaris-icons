
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
    export let ariaLabel = 'channels';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.25 3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.25v1.5h-.25a2.75 2.75 0 0 0-2.75 2.75v2a2.75 2.75 0 0 0 2.75 2.75h2a2.75 2.75 0 0 0 2.75-2.75v-.25h1.5v.25a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.25h-1.5v-.25c0-.487-.127-.944-.348-1.34l2.909-2.91h1.939a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.94l-2.91 2.908a2.738 2.738 0 0 0-1.34-.348h-.25v-1.5h.25a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2Zm.5 1.5v1h1v-1h-1Zm-.5 5.5c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-2Zm7.75-4.5v-1h1v1h-1Zm0 6.25v1h1v-1h-1Z" fill="#5C5F62"/></svg>