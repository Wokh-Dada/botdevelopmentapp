import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-product-information', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-product-information></s-abdullakh-product-information>');

    const element = await page.find('s-abdullakh-product-information');
    expect(element).toHaveClass('hydrated');
  });
});
