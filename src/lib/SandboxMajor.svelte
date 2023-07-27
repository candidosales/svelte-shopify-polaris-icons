
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
    export let ariaLabel = 'sandbox';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M9.605 3.362a.75.75 0 0 1 .79 0l5.25 3.25a.75.75 0 0 1 .345.763c.006.04.01.082.01.125v5.5a.75.75 0 0 1-.355.638l-5.25 3.25a.75.75 0 0 1-.79 0l-5.25-3.25a.75.75 0 0 1-.355-.638v-5.5c0-.043.004-.085.01-.125a.75.75 0 0 1 .345-.763l5.25-3.25Zm1.145 7.556 3.75-2.322v3.986l-3.75 2.322v-3.986Zm-1.5 0-3.75-2.322v3.986l3.75 2.322v-3.986Zm-3.075-3.668 3.825 2.368 3.825-2.368-3.825-2.368-3.825 2.368Z" fill="#5C5F62"/></svg>