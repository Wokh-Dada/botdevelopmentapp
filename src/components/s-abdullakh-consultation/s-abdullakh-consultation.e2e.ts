import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-consultation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-consultation></s-abdullakh-consultation>');

    const element = await page.find('s-abdullakh-consultation');
    expect(element).toHaveClass('hydrated');
  });
});
