import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhHeaderCenter} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-header-center',
  styleUrl: 's-abdullakh-header-center.css',
  shadow: false,
})
export class SAbdullakhHeaderCenter implements ComponentInterface {
  /**
   * объект с данными и для элементов меню
   * */
  @Prop() arr: AbdullakhHeaderCenter;

  /**
   * клик по элементу HeaderCenter (меню) компонента header
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <div
        class="navbar_item"
        onClick={() => {
          this.clickOnHeader.emit(this.arr.linkName)
        }}>
        <a>
          {this.arr.linkName}
        </a>
      </div>
    );
  }

}
