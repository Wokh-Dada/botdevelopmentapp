import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-header></s-abdullakh-header>');

    const element = await page.find('s-abdullakh-header');
    expect(element).toHaveClass('hydrated');
  });
});
