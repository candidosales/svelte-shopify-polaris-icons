/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Icon {
		icon: SvelteComponentTyped;
		name: string;
		iconNameImport: string;
	}

	interface IconProps {
		size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role: string;
		ariaLabel: string;
	}
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
