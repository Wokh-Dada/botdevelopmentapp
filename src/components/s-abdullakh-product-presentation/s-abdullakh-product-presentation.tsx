import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhProductPresentation} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-product-presentation',
  styleUrl: 's-abdullakh-product-presentation.css',
  shadow: false,
})
export class SAbdullakhProductPresentation implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() ProductPresentation: SSAbdullakhProductPresentation;

  /**
   * клик по элементам компонента ProductPresentation
   * */
  @Event() clickOnProductPresentation: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <PresentationTitle arr={this.ProductPresentation.title} img={this.ProductPresentation} />
          </div>
          <div class="col-lg-6 d-lg-flex d-none">
            <s-abdullakh-product-presentation-img img={this.ProductPresentation} />
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
      <s-abdullakh-product-presentation-title arr={item} img={props.img} />
    );
  })
}
