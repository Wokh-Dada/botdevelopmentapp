import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header-end',
  styleUrl: 's-abdullakh-header-end.css',
  shadow: false,
})
export class SAbdullakhHeaderEnd implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() arr: any;

  render() {
    return (
      <div class="phone_number">
        {this.arr.phoneNumber}
      </div>
    );
  }

}
