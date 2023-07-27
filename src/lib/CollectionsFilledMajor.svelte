
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
    export let ariaLabel = 'collections filled';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M7.517 4.348a3.75 3.75 0 0 1 2.652-1.098h1.831a2.75 2.75 0 0 1 2.75 2.75v2.039a3.25 3.25 0 0 1-.952 2.298l-3.956 3.956a2.5 2.5 0 0 1-3.536 0l-2.422-2.422a2.75 2.75 0 0 1 0-3.89l3.633-3.633Zm3.983 3.152a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#5C5F62"/><path d="M17.5 6.25a.75.75 0 0 0-1.5 0v3.029c0 .468-.188.917-.521 1.245l-4.756 4.692a.75.75 0 1 0 1.054 1.068l4.755-4.692a3.25 3.25 0 0 0 .968-2.313v-3.029Z" fill="#5C5F62"/></svg>