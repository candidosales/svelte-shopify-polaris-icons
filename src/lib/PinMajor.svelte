
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
    export let ariaLabel = 'pin';
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...$$restProps}
    class={twMerge('shrink-0', sizes[size], $$props.class)}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 20 20"
><path fill-rule="evenodd" d="M6.5 5v.5c0 .495.24.934.61 1.207.22.163.374.436.294.698l-.838 2.741a.5.5 0 01-.478.354H6A1.5 1.5 0 004.5 12v1A1.5 1.5 0 006 14.5h8a1.5 1.5 0 001.5-1.5v-1a1.5 1.5 0 00-1.5-1.5h-.088a.5.5 0 01-.479-.354l-.837-2.74c-.08-.263.074-.536.295-.7.37-.272.609-.711.609-1.206V5A1.5 1.5 0 0012 3.5H8A1.5 1.5 0 006.5 5z" fill="#5C5F62"/><path fill-rule="evenodd" d="M8 5v.5c0-.001 0-.001 0 0 .489.362 1.18 1.227.839 2.343L8 10.584A2 2 0 016.088 12H6v1h8v-1h-.088a2 2 0 01-1.913-1.416l-.838-2.74c-.34-1.117.35-1.982.838-2.343L12 5.5v0V5H8zm0 .502zM6.5 5.5V5A1.5 1.5 0 018 3.5h4A1.5 1.5 0 0113.5 5v.5c0 .495-.24.934-.61 1.207-.22.163-.374.436-.294.698l.838 2.741a.5.5 0 00.478.354H14a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 13v-1A1.5 1.5 0 016 10.5h.088a.5.5 0 00.478-.354l.838-2.74c.08-.263-.074-.536-.295-.7A1.498 1.498 0 016.5 5.5z" fill="#5C5F62"/><path fill-rule="evenodd" d="M8.928 13.265A.75.75 0 019.5 13h1a.75.75 0 01.74.873l-.5 3a.75.75 0 01-1.48 0l-.5-3a.75.75 0 01.168-.608z" fill="#5C5F62"/></svg>