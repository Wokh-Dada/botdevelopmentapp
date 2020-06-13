import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header-center',
  styleUrl: 's-abdullakh-header-center.css',
  shadow: false,
})
export class SAbdullakhHeaderCenter implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() arr: any;

  render() {
    return (
      <div class="navbar_item">
        <a>
          {this.arr.linkName}
        </a>
      </div>
    );
  }

}
