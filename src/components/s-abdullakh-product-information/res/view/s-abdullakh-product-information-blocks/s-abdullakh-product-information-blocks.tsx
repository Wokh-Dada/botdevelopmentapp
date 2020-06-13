import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-information-blocks',
  styleUrl: 's-abdullakh-product-information-blocks.css',
  shadow: false,
})
export class SAbdullakhProductInformationBlocks implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <div class="ProductInfoBlock">
        <div>
          <div class="ProductInfoBlockOuterImgBlock">
            <div class="ProductInfoBlockOuterImg"
                 style={{backgroundImage: "url(" + this.arr.outerImg + ")"}}>
              <div class="ProductInfoBlockInnerImg"
                   style={{backgroundImage: "url(" + this.arr.innerImg + ")"}}>

              </div>
            </div>
          </div>
          <div class="ProductInfoTextBlock" innerHTML={this.arr.text}>

          </div>
          <div class="ProductInfoBtnBlock">
            <button class="ProductInfoBtn">
              {this.arr.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }

}
