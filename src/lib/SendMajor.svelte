
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
    export let ariaLabel = 'send';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="m4.798 9.657-1.964-5.374c-.306-.84.557-1.629 1.365-1.248l12.878 6.06a1 1 0 0 1 0 1.81l-12.878 6.06c-.808.38-1.671-.41-1.365-1.248l1.964-5.374a1 1 0 0 0 0-.686Zm1.409-.515-1.547-4.233 9.224 4.341h-7.64a2.507 2.507 0 0 0-.037-.108Zm.036 1.608a2.5 2.5 0 0 1-.036.108l-1.547 4.232 9.223-4.34h-7.64Z" fill="#5C5F62"/></svg>