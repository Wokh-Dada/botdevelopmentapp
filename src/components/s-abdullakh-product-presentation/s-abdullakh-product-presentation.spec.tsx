import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhProductPresentation } from './s-abdullakh-product-presentation';

describe('s-abdullakh-product-presentation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhProductPresentation],
      html: `<s-abdullakh-product-presentation></s-abdullakh-product-presentation>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-product-presentation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-product-presentation>
    `);
  });
});
