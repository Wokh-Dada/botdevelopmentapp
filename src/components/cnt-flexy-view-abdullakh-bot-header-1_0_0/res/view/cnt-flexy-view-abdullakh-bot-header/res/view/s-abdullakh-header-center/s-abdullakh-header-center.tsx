import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhHeaderCenter} from "./interface/common.interface";
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

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
      <div class="navbar_item"
        onClick={() => {
          this.clickOnHeader.emit(this.arr.linkName)
        }}
      >
        <a href={hrefBlock(this.arr.linkName)}>
          {this.arr.linkName}
        </a>
        <div class="menu_line"
             style={{backgroundImage: "url(" + StorageAbdullakhBot.prefix + this.arr.menuLine + ")"}}>

        </div>
      </div>
    );
  }

}

/**
 * функция для присваисвания href объекта
 * */
function hrefBlock(x) {
  switch (x) {
    case 'Возможности':
      return '#productInformation';

    case 'Преимущества':
      return '#benefitsBots';

    case 'Для кого':
      return '#performanceInformation';
  }
}
