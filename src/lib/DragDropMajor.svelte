
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
    export let ariaLabel = 'drag drop';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path d="M6.25 3.5a2.75 2.75 0 0 0-2.75 2.75.75.75 0 0 0 1.5 0c0-.69.56-1.25 1.25-1.25a.75.75 0 0 0 0-1.5Z" fill="#5C5F62"/><path d="M3.5 13.75a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0Z" fill="#5C5F62"/><path d="M13.75 3.5a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1 0-1.5Z" fill="#5C5F62"/><path d="M5 9a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" fill="#5C5F62"/><path d="M11.75 4.25a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z" fill="#5C5F62"/><path d="M7.75 6a1.75 1.75 0 0 0-1.75 1.75v4.5c0 .966.784 1.75 1.75 1.75h1.25a.75.75 0 0 0 0-1.5h-1.25a.25.25 0 0 1-.25-.25v-4.5a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25v1.25a.75.75 0 0 0 1.5 0v-1.25a1.75 1.75 0 0 0-1.75-1.75h-4.5Z" fill="#5C5F62"/><path d="M11.065 10.46a.5.5 0 0 0-.606.605l1.122 4.51a.5.5 0 0 0 .838.234l1.165-1.165.84.841a.5.5 0 0 0 .708 0l.353-.353a.5.5 0 0 0 0-.707l-.84-.841 1.164-1.165a.5.5 0 0 0-.233-.838l-4.51-1.122Z" fill="#5C5F62"/></svg>