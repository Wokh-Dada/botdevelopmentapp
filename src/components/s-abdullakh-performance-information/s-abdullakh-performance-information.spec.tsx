import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhPerformanceInformation } from './s-abdullakh-performance-information';

describe('s-abdullakh-performance-information', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhPerformanceInformation],
      html: `<s-abdullakh-performance-information></s-abdullakh-performance-information>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-performance-information>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-performance-information>
    `);
  });
});
