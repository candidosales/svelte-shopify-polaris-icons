
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
    export let ariaLabel = 'file filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M9 3h-2.75a1.75 1.75 0 0 0-1.75 1.75v10.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-5.795h-4.87a1.625 1.625 0 0 1-1.626-1.624l-.003-4.831Zm-1.975 11c0-.483.392-.875.875-.875h4.2a.875.875 0 0 1 0 1.75h-4.2a.875.875 0 0 1-.875-.875Z" fill="#5C5F62"/><path d="M15.35 8.205h-4.72a.375.375 0 0 1-.376-.375l-.003-4.699c.212.087.407.216.572.382l4.164 4.164c.154.154.276.333.363.528Z" fill="#5C5F62"/></svg>