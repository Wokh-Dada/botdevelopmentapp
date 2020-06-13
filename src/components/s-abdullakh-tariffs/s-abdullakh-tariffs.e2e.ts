import { newE2EPage } from '@stencil/core/testing';

describe('s-abdullakh-tariffs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-abdullakh-tariffs></s-abdullakh-tariffs>');

    const element = await page.find('s-abdullakh-tariffs');
    expect(element).toHaveClass('hydrated');
  });
});
