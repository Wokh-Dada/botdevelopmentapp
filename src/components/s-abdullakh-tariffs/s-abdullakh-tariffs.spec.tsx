import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhTariffs } from './s-abdullakh-tariffs';

describe('s-abdullakh-tariffs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhTariffs],
      html: `<s-abdullakh-tariffs></s-abdullakh-tariffs>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-tariffs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-tariffs>
    `);
  });
});
