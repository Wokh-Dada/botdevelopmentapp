import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation',
  styleUrl: 's-abdullakh-product-presentation.css',
  shadow: false,
})
export class SAbdullakhProductPresentation implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() ProductPresentation: any;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-6">
            <PresentationTitle arr={this.ProductPresentation.title} />
          </div>
          <div class="col-6">
            <s-abdullakh-product-presentation-img img={this.ProductPresentation.imgUrl} />
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const PresentationTitle = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-product-presentation-title arr={item}/>
    );
  })
}
