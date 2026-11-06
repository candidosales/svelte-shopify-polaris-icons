import { expect, test } from '@playwright/test';

test('clicking an icon opens the import drawer', async ({ page }, testInfo) => {
	const errors: string[] = [];
	page.on('pageerror', (e) => errors.push(e.message));

	await page.goto('/');
	await expect(page.locator('h1')).toHaveText('Welcome to Svelte Shopify Polaris Icons');

	const icons = page.locator('button:has(svg)');
	expect(await icons.count()).toBeGreaterThan(500);

	await page.getByRole('button', { name: 'Abandoned cart filled' }).click();
	await expect(page.getByText('How to import')).toBeVisible();
	await expect(page.locator('pre.w-full')).toContainText(
		"AbandonedCartFilledMajor\n} from 'svelte-shopify-polaris-icons'"
	);

	await page.screenshot({ path: testInfo.outputPath('drawer.png') });
	expect(errors).toEqual([]);
});
