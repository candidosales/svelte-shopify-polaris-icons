
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
    export let ariaLabel = 'capital';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M10.749 11.957c2.545-.294 4.501-2.066 4.501-4.207 0-2.347-2.35-4.25-5.25-4.25s-5.25 1.903-5.25 4.25c0 2.141 1.956 3.913 4.501 4.207a.763.763 0 0 0-.001.043v4.25a.75.75 0 0 0 1.5 0v-4.25l-.001-.043Zm-.749-1.457c2.383 0 3.75-1.512 3.75-2.75s-1.367-2.75-3.75-2.75-3.75 1.512-3.75 2.75 1.367 2.75 3.75 2.75Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M8.5 15c0 .446-.083.872-.235 1.265a3.5 3.5 0 0 1-4.53-4.53 3.5 3.5 0 0 1 4.765 3.265Zm-3.5-2a2 2 0 0 1 2 2 2 2 0 0 1-2-2Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M11.5 15c0 .446.083.872.235 1.265a3.5 3.5 0 0 0 4.53-4.53 3.5 3.5 0 0 0-4.765 3.265Zm3.5-2a2 2 0 0 0-2 2 2 2 0 0 0 2-2Z" fill="#5C5F62"/></svg>