import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation-img',
  styleUrl: 's-abdullakh-product-presentation-img.css',
  shadow: false,
})
export class SAbdullakhProductPresentationImg implements ComponentInterface {
  /**
   * массив для вывода url img в компоненете ProductPresentationImg
   * */
  @Prop() img: string;

  render() {
    return (
      <div class="presentationImg"
           style={{backgroundImage: "url(" + this.img + ")"}}>

      </div>
    );
  }
}
