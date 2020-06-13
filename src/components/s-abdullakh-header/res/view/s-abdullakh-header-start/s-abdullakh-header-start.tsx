import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header-start',
  styleUrl: 's-abdullakh-header-start.css',
  shadow: false,
})
export class SAbdullakhHeaderStart implements ComponentInterface {
  /**
   * объект с url logo
   * */
  @Prop() arr: any;

  render() {
    return (
      <div class="logo d-flex justify-content-start"
           style={{backgroundImage: "url(" + this.arr.logoUrl + ")"}}>

      </div>
    );
  }

}
