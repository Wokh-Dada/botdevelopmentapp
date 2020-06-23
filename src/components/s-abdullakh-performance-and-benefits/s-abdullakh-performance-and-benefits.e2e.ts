import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-performance-and-benefits', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-performance-and-benefits></s-abdullakh-performance-and-benefits>');

    const element = await page.find('s-abdullakh-performance-and-benefits');
    expect(element).toHaveClass('hydrated');
  });
});
