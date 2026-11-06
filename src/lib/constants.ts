import type { SVGAttributes } from 'svelte/elements';

export const ICON_SIZES = {
	xs: 'w-3 h-3',
	sm: 'w-4 h-4',
	md: 'w-5 h-5',
	lg: 'w-6 h-6',
	xl: 'w-8 h-8'
};

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'class'> {
	size?: keyof typeof ICON_SIZES;
	ariaLabel?: string;
	class?: string;
}
