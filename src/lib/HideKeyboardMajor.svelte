
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
    export let ariaLabel = 'hide keyboard';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="m4.24 12.487-1.043 1.044a.81.81 0 0 0-.022.023 2.74 2.74 0 0 1-.675-1.804v-3.5a2.75 2.75 0 0 1 2.75-2.75h5.978l-1.5 1.5h-4.478c-.69 0-1.25.56-1.25 1.25v3.5c0 .276.09.53.24.737Z" fill="#5C5F62"/><path d="m8.728 8-1.127 1.127a.75.75 0 0 1 .649-1.127h.478Z" fill="#5C5F62"/><path d="M12.5 11.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M14.25 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M14.598 4.25a.276.276 0 0 1-.006.007l-10.335 10.335-.006.006a.75.75 0 0 0 1.066 1.055l1.154-1.153h8.279a2.75 2.75 0 0 0 2.75-2.75v-3.5a2.751 2.751 0 0 0-2.105-2.674l.258-.259a.75.75 0 0 0-1.055-1.066Zm.152 8.75h-6.78l1-1h2.28a.75.75 0 0 0 0-1.5h-.78l1-1h.28a.75.75 0 0 0 .71-.99l1.51-1.51h.78c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25Z" fill="#5C5F62"/><path d="M5.25 8a.75.75 0 1 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" fill="#5C5F62"/></svg>