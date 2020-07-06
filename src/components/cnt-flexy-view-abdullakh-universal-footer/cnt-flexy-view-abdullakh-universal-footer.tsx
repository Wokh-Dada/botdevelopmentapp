import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-universal-footer-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-universal-footer.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhUniversalFooter implements ComponentInterface {

  @Prop() categories: any;

  render() {
    return (
      <cnt-flexy-view-abdullakh-universal-footer_ footerIcons={this.categories}/>
    );
  }
}
