
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
    export let ariaLabel = 'vocabulary';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6.75 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" fill="#5C5F62"/><path d="M6.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" fill="#5C5F62"/><path d="M6.75 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" fill="#5C5F62"/><path d="M12 6.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path d="M12 9.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" fill="#5C5F62"/><path fill-rule="evenodd" d="M7.586 3.5c.87 0 1.714.273 2.414.771a4.164 4.164 0 0 1 2.414-.771h2.336c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-.238a9.25 9.25 0 0 0-3.161.557l-1.095.398a.75.75 0 0 1-.493.007l-1.46-.487a9.25 9.25 0 0 0-2.926-.475h-.127a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h2.336Zm-2.586 1.75a.25.25 0 0 1 .25-.25h2.336c.608 0 1.194.208 1.664.584v10.125l-.473-.157a10.75 10.75 0 0 0-3.4-.552h-.127a.25.25 0 0 1-.25-.25v-9.5Zm5.75 10.43v-10.096a2.664 2.664 0 0 1 1.664-.584h2.336a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25h-.238a10.75 10.75 0 0 0-3.674.647l-.088.032Z" fill="#5C5F62"/></svg>