import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-product-presentation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-product-presentation></s-abdullakh-product-presentation>');

    const element = await page.find('s-abdullakh-product-presentation');
    expect(element).toHaveClass('hydrated');
  });
});
