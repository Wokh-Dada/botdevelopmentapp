import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhProductInformation} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-product-information',
  styleUrl: 's-abdullakh-product-information.css',
  shadow: false,
})
export class SAbdullakhProductInformation implements ComponentInterface {
  /**
   * данные из объекта для компонента ProductInformation
   * */
  @Prop() ProductInformation: SSAbdullakhProductInformation;

  /**
   * клик по элементам компонента ProductInformation
   * */
  @Event() clickOnProductInformation: EventEmitter;

  render() {
    return (
      <div class="container ProductInformation">
        <div class="ProductInfoTitle" onClick={() => this.clickOnProductInformation.emit(this.ProductInformation.title)}>
          {this.ProductInformation.title}
        </div>
        <div class="row justify-content-center">
          <ProductInfoBlock arr={this.ProductInformation.infoBlock}/>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const ProductInfoBlock = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg-4 col-md-6 col-12 mb-5">
        <s-abdullakh-product-information-blocks arr={item}/>
      </div>
    );
  })
}
