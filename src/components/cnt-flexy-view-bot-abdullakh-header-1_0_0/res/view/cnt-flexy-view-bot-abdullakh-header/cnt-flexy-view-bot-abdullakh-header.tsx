import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {CntFlexyViewCategoryForOwnerItemInterface} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-bot-abdullakh-header',
  styleUrl: 'cnt-flexy-view-bot-abdullakh-header.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhHeader implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов header-start header-end
   * */
  @Prop() categories : CntFlexyViewCategoryForOwnerItemInterface ;

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
              <s-abdullakh-header-start logo={this.categories.logoUrl}/>
            </div>
            <div class="HeaderCenter animate__animated animate__backInDown">
              <nav class="my_navbar">
                <ItemLink arr={this.categories.menu}/>
                <div class="d-block d-md-none">
                  <s-abdullakh-header-end phoneNumber={this.categories.phoneNumber}/>
                </div>
              </nav>
            </div>
            <div class="HeaderEnd d-md-block d-none animate__animated animate__backInDown">
              <s-abdullakh-header-end phoneNumber={this.categories.phoneNumber}/>
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

