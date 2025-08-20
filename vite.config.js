import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [tailwindcss(), sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
};

export default config;
