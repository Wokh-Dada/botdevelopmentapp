import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhProductInformation} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-information_',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-information_.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotProductInformation_ implements ComponentInterface {
  /**
   * данные из объекта для компонента ProductInformation
   * */
  @Prop() ProductInformation: SSAbdullakhProductInformation;

  /**
   * клик по элементам компонента ProductInformation
   * */
  @Event() clickOnProductInformation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <div class="container ProductInformation" id="productInformation">
        <div class="ProductInfoTitle wow animate__animated animate__fadeInRightBig"
             onClick={() => this.clickOnProductInformation.emit(this.ProductInformation.title)}>
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
* компонентная функция для вывода блоков компонента product-information-blocks
 */
const ProductInfoBlock = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg-4 col-md-6 col-12 mb-5">
        <cnt-flexy-view-abdullakh-bot-product-information-blocks arr={item}/>
      </div>
    );
  })
}
