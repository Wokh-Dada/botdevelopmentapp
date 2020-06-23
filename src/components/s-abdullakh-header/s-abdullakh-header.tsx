import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhHeader} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-header',
  styleUrl: 's-abdullakh-header.css',
  shadow: false,
})
export class SAbdullakhHeader implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов header-start header-end
   * */
  @Prop() header: AbdullakhHeader;

  /**
   * клик по элементам компонента header
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {

    return (
      <header>
        <div class="container mt-2">
          <div class="header_menu">
            <div class="HeaderStart wow animate__animated animate__backInDown">
              <s-abdullakh-header-start logo={this.header.logoUrl}/>
            </div>
            <div class="HeaderCenter animate__animated animate__backInDown animate__delay-1s">
              <nav class="my_navbar">
                <ItemLink arr={this.header.menu}/>
                <div class="d-block d-md-none">
                  <s-abdullakh-header-end phoneNumber={this.header.phoneNumber}/>
                </div>
              </nav>
            </div>
            <div class="HeaderEnd d-md-block d-none animate__animated animate__backInDown animate__delay-2s">
              <s-abdullakh-header-end phoneNumber={this.header.phoneNumber}/>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const ItemLink = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-header-center arr={item}/>
    );
  })
}

