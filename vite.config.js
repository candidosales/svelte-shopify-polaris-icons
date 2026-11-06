import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';
import tailwindcss from '@tailwindcss/vite';

/** @type {import('vitest/config').ViteUserConfig} */
const config = {
	plugins: [tailwindcss(), sveltekit({ preprocess: vitePreprocess(), adapter: adapter() })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
