import { newSpecPage } from '@stencil/core/testing';
import { SAbdullakhTransitionCreateBot } from './s-abdullakh-transition-create-bot';

describe('s-abdullakh-transition-create-bot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAbdullakhTransitionCreateBot],
      html: `<s-abdullakh-transition-create-bot></s-abdullakh-transition-create-bot>`,
    });
    expect(page.root).toEqualHtml(`
      <s-abdullakh-transition-create-bot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-abdullakh-transition-create-bot>
    `);
  });
});
