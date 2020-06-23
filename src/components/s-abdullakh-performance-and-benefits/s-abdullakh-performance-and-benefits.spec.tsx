import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhPerformanceAndBenefits } from './s-abdullakh-performance-and-benefits';

describe('s-abdullakh-performance-and-benefits', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhPerformanceAndBenefits],
      html: `<s-abdullakh-performance-and-benefits></s-abdullakh-performance-and-benefits>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-performance-and-benefits>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-performance-and-benefits>
    `);
  });
});
