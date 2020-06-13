import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-performance-information', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-performance-information></s-abdullakh-performance-information>');

    const element = await page.find('s-abdullakh-performance-information');
    expect(element).toHaveClass('hydrated');
  });
});
