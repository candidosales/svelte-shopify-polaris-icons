
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
    export let ariaLabel = 'featured collection';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M12.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M10.169 3a3.75 3.75 0 0 0-2.652 1.098l-3.883 3.883a2.75 2.75 0 0 0 0 3.89l2.672 2.672a2.5 2.5 0 0 0 3.536 0l4.206-4.206a3.25 3.25 0 0 0 .952-2.298v-2.289a2.75 2.75 0 0 0-2.75-2.75h-2.081Zm-1.591 2.159a2.25 2.25 0 0 1 1.59-.659h2.082c.69 0 1.25.56 1.25 1.25v2.289c0 .464-.184.909-.513 1.237l-4.206 4.206a1 1 0 0 1-1.414 0l-2.672-2.672a1.25 1.25 0 0 1 0-1.768l3.883-3.883Z" fill="#5C5F62"/><path d="M17.5 6.25a.75.75 0 0 0-1.5 0v3.029c0 .468-.188.917-.521 1.245l-.63.623a.75.75 0 0 0 1.053 1.067l.63-.622a3.25 3.25 0 0 0 .968-2.313v-3.029Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M11.825 13.556a1.964 1.964 0 0 1 2.575-.142 1.964 1.964 0 0 1 2.575.142 1.9 1.9 0 0 1 0 2.724l-1.7 1.664a1.25 1.25 0 0 1-1.75 0l-1.7-1.664a1.9 1.9 0 0 1 0-2.724Zm1.05 1.072a.463.463 0 0 1 .639 0l.362.354a.75.75 0 0 0 1.049 0l.361-.354a.463.463 0 0 1 .64 0 .4.4 0 0 1 0 .58l-1.526 1.493-1.526-1.493a.4.4 0 0 1 0-.58Z" fill="#5C5F62"/></svg>