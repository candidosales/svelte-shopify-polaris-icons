
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
    export let ariaLabel = 'billing statement yen filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M5.32 16.467a.5.5 0 0 1-.32-.467v-11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.872.334l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.744 0l-1.506-1.674a.495.495 0 0 0-.3-.16h-.144a.495.495 0 0 0-.3.16l-1.506 1.674a.5.5 0 0 1-.551.133Zm2.116-10.96a.75.75 0 0 1 1.058-.071l1.506 1.317 1.506-1.317a.75.75 0 0 1 .988 1.128l-1.744 1.526v.41h1.25a.75.75 0 0 1 0 1.5h-1.25v.5h1.25a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0v-.5h-1.25a.75.75 0 0 1 0-1.5h1.25v-.5h-1.25a.75.75 0 1 1 0-1.5h1.25v-.41l-1.744-1.526a.75.75 0 0 1-.07-1.058Z" fill="#5C5F62"/></svg>