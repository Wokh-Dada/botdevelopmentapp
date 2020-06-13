import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-transition-create-bot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-transition-create-bot></s-abdullakh-transition-create-bot>');

    const element = await page.find('s-abdullakh-transition-create-bot');
    expect(element).toHaveClass('hydrated');
  });
});
