<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { ICON_SIZES } from '../constants';
	let {
		size = 'md',
		role = 'img',
		ariaLabel = 'add code',
		class: klass,
		...rest
	}: App.IconProps = $props();
	export let ariaLabel = 'star outline';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	{...rest}
	class={twMerge('shrink-0', ICON_SIZES[size], klass)}
	{role}
	aria-label={ariaLabel}
	viewBox="0 0 20 20"
	><path
		fill-rule="evenodd"
		d="M8.872 4.123c.453-.95 1.803-.95 2.256 0l1.39 2.912 3.199.421c1.042.138 1.46 1.422.697 2.146l-2.34 2.222.587 3.172c.192 1.034-.901 1.828-1.825 1.327l-2.836-1.54-2.836 1.54c-.924.501-2.017-.293-1.825-1.327l.587-3.172-2.34-2.222c-.762-.724-.345-2.008.697-2.146l3.2-.421 1.389-2.912Zm1.128 1.119-1.222 2.561a1.25 1.25 0 0 1-.965.701l-2.814.371 2.058 1.954c.307.292.446.718.369 1.134l-.517 2.791 2.495-1.354a1.25 1.25 0 0 1 1.192 0l2.495 1.354-.517-2.79a1.25 1.25 0 0 1 .369-1.135l2.058-1.954-2.814-.37a1.25 1.25 0 0 1-.965-.702l-1.222-2.561Z"
		fill="#5C5F62"
	/></svg
>
