import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhFormCommunication } from './s-abdullakh-form-communication';

describe('s-abdullakh-form-communication', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhFormCommunication],
      html: `<s-abdullakh-form-communication></s-abdullakh-form-communication>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-form-communication>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-form-communication>
    `);
  });
});
