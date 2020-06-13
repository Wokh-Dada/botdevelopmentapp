import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhConsultation } from './s-abdullakh-consultation';

describe('s-abdullakh-consultation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhConsultation],
      html: `<s-abdullakh-consultation></s-abdullakh-consultation>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-consultation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-consultation>
    `);
  });
});
