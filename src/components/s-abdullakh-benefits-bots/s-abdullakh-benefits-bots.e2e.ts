import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-benefits-bots', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-benefits-bots></s-abdullakh-benefits-bots>');

    const element = await page.find('s-abdullakh-benefits-bots');
    expect(element).toHaveClass('hydrated');
  });
});
