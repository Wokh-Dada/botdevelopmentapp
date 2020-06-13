import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-information',
  styleUrl: 's-abdullakh-product-information.css',
  shadow: false,
})
export class SAbdullakhProductInformation implements ComponentInterface {
  @Prop() ProductInformation: any;

  render() {
    return (
      <div class="container ProductInformation">
        <div class="ProductInfoTitle">
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
      <div class="col-4 mb-5">
        <s-abdullakh-product-information-blocks arr={item}/>
      </div>
    );
  })
}
