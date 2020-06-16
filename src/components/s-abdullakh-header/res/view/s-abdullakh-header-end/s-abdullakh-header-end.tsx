import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
// import {AbdullakhHeaderEnd} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-header-end',
  styleUrl: 's-abdullakh-header-end.css',
  shadow: false,
})
export class SAbdullakhHeaderEnd implements ComponentInterface {
  /**
   * number
   * */
  @Prop() phoneNumber: string;

  /**
   * клик по элементy HeaderEnd компонента header
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <div
        class="phone_number"
        onClick={() => {
          this.clickOnHeader.emit(this.phoneNumber)
        }}>
        {this.phoneNumber}
      </div>
    );
  }

}
