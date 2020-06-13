import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhProductInformation } from './s-abdullakh-product-information';

describe('s-abdullakh-product-information', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhProductInformation],
      html: `<s-abdullakh-product-information></s-abdullakh-product-information>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-product-information>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-product-information>
    `);
  });
});
