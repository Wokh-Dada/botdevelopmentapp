import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhHeader } from './s-abdullakh-header';

describe('s-abdullakh-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhHeader],
      html: `<s-abdullakh-header></s-abdullakh-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-header>
    `);
  });
});
