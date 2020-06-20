import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-form-communication', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-form-communication></s-abdullakh-form-communication>');

    const element = await page.find('s-abdullakh-form-communication');
    expect(element).toHaveClass('hydrated');
  });
});
