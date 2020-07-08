import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhProductPresentation} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-presentation_',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-presentation_.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotProductPresentation_ implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() payload: SSAbdullakhProductPresentation;

  /**
   * клик по элементам компонента ProductPresentation
   * */
  @Event() clickOnProductPresentation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-5 col-12">
            <PresentationTitle arr={this.payload.title} img={this.payload} />
          </div>
          <div class="col-lg-7 d-lg-flex d-none">
            <cnt-flexy-view-abdullakh-bot-product-presentation-img img={this.payload} />
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов ProductPresentationTitle
 */
const PresentationTitle = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-product-presentation-title arr={item} img={props.img} />
    );
  })
}
