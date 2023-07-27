# Svelte Shopify Polaris Icons

Inspired by [Flowbite Svelte Icons](https://github.com/themesberg/flowbite-svelte-icons).

## Installing

If you're seeing this, you've probably already done this step. Congrats!

```bash
pnpm i -D svelte-shopify-polaris-icons
```

## Usage

In a svelte file:

```html
<script>
	import { AbandonedCartFilledMajor } from 'svelte-shopify-polaris-icons';
</script>

<AbandonedCartFilledMajor />
```

## Props

### Outline

- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
- role: string = 'img';
- strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | null | undefined = 'round';
- strokeLinejoin: 'round' | 'inherit' | 'miter' | 'bevel' | null | undefined = 'round';
- strokeWidth = '2';
- ariaLabel = 'icon file name';

### Solid

- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
- role: string = 'img';
- ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

The following table provides details about the available sizes for icons:

| Size | CSS Classes |
| ---- | ----------- |
| xs   | 'w-3 h-3'   |
| sm   | 'w-4 h-4'   |
| md   | 'w-5 h-6'   |
| lg   | 'w-6 h-6'   |
| xl   | 'w-8 h-8'   |

To change the size of an icon, use the `size` prop and specify the desired size. For example:

```html
<AbandonedCartFilledMajor size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<AbandonedCartFilledMajor class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<AbandonedCartFilledMajor size="md" class="text-red-700 dark:text-green-300 inline m-1" />

<div class="text-red-700 dark:text-green-300 inline m-1">
	<AbandonedCartFilledMajor size="md" />
</div>
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AbandonedCartFilledMajor class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AbandonedCartFilledMajor ariaLabel="address card solid" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<AbandonedCartFilledMajor tabindex="-1" />
```

## Using svelte:component

```html
<script>
	import { AbandonedCartFilledMajor } from 'svelte-shopify-polaris-icons';
</script>

<svelte:component this="{AbandonedCartFilledMajor}" />
```

## Using onMount

```html
<script>
	import { AbandonedCartFilledMajor } from 'svelte-shopify-polaris-icons';
	import { onMount } from 'svelte';
	const props = {
		size: '50',
		color: '#ff0000'
	};
	onMount(() => {
		const icon = new AbandonedCartFilledMajor({ target: document.body, props });
	});
</script>
```
