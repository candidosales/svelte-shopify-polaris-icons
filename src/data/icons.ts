import {
	AbandonedCartMajor,
	AccessibilityMajor,
	ActivitiesMajor,
	AbandonedCartFilledMajor,
	AddCodeMajor,
	AddImageMajor,
	AdjustMinor,
	AlertMinor,
	AddMajor,
	AddNoteMajor,
	AddProductMajor,
	AffiliateMajor
} from '$lib';

export const MAJOR_ICONS: App.Icon[] = [
	{
		icon: AbandonedCartFilledMajor,
		name: 'Abandoned cart filled'
	},
	{
		icon: AbandonedCartMajor,
		name: 'Abandoned cart'
	},
	{
		icon: AccessibilityMajor,
		name: 'Accessibility'
	},
	{
		icon: ActivitiesMajor,
		name: 'Activities'
	},
	{
		icon: AddCodeMajor,
		name: 'Add code'
	},
	{
		icon: AddImageMajor,
		name: 'Add image'
	},
	{
		icon: AddMajor,
		name: 'Add'
	},
	{
		icon: AddNoteMajor,
		name: 'Add note'
	},
	{
		icon: AddProductMajor,
		name: 'Add product'
	},
	{
		icon: AffiliateMajor,
		name: 'Affiliate'
	}
];

export const MINOR_ICONS: App.Icon[] = [
	{
		icon: AdjustMinor,
		name: 'Adjust'
	},
	{
		icon: AlertMinor,
		name: 'Alert'
	}
];
