import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-universal-footer-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-universal-footer-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhUniversalFooter1_0_0 implements ComponentInterface {

  @Prop() categories: any;

  render() {
    return (
      <cnt-flexy-view-abdullakh-universal-footer footerIcons={this.categories}/>
    );
  }
}
