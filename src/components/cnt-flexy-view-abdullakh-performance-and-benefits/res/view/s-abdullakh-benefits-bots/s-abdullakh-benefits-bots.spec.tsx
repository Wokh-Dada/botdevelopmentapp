import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhBenefitsBots } from './s-abdullakh-benefits-bots';

describe('s-abdullakh-benefits-bots', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhBenefitsBots],
      html: `<s-abdullakh-benefits-bots></s-abdullakh-benefits-bots>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-benefits-bots>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-benefits-bots>
    `);
  });
});
