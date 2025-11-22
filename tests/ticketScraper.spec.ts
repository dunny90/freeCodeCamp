import { test, expect } from '@playwright/test';

test('eTickets landing page loads', async({page}) => {
    await page.goto('https://www.eticketing.co.uk/nottinghamforest/Events');

    await expect(page).toHaveTitle('Online Ticket Office - eTickets');
});

test('Apply product type filter', async({page}) => {
    await page.goto('https://www.eticketing.co.uk/nottinghamforest/Events');
    
    await page.getByRole('checkbox', {name : '     Premier League - Away' }).check();

    await expect(page).toHaveTitle('Online Ticket Office - eTickets');
});