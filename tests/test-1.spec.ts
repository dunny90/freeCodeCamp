import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ticketmastersportuk.queue-it.net/softblock/?c=ticketmastersportuk&e=n2muw5kxhk1g7mwh7d8k&t=https%3A%2F%2Fwww.eticketing.co.uk%2Fnottinghamforest%2FEvents&cid=en-GB&enqueuetoken=eyJ0eXAiOiJRVDEiLCJlbmMiOiJBRVMyNTYiLCJpc3MiOjE3NjM3NjI0OTkwMDAsImV4cCI6MTc2Mzc2Mjc5OTAwMCwidGkiOiI3OTRhNWYxYi1lOWFmLTQ5NDAtOWVmNS02YmNkMGI0OTJlYjUiLCJjIjoidGlja2V0bWFzdGVyc3BvcnR1ayIsImUiOiJuMm11dzVreGhrMWc3bXdoN2Q4ayIsImlwIjoiMTU3LjUyLjY3LjM5In0.WCbX-O9W7V57bfw3oUw_6ErW67sfO5Z6bduiuhES4xYDCSi5nDfp8i_egjAX6m-w.SNk_woJ97hkSG5Ffm6lHSbjpLrMFz1GFfiKZ55DqO2Q&rticr=0');
  await page.getByRole('textbox', { name: 'Enter the code from the' }).click();
  await page.getByRole('textbox', { name: 'Enter the code from the' }).fill('9K316G');
  await page.getByRole('button', { name: 'I\'m not a robot' }).click();
  await page.getByRole('checkbox', { name: 'Premier League - Away' }).check();
  await page.getByRole('link', { name: 'Click here ' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('dunny90@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Asengineer1');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
});
await page.getByRole('button', { name: 'Log in' }).click();