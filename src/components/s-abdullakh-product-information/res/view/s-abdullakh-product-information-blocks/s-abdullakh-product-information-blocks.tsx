import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-information-blocks',
  styleUrl: 's-abdullakh-product-information-blocks.css',
  shadow: false,
})
export class SAbdullakhProductInformationBlocks implements ComponentInterface {
  /**
   * объект с данными и для элементов компонента ProductInformationBlocks
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента ProductInformation
   * */
  @Event() clickOnProductInformation: EventEmitter;


  render() {
    return (
      <div class="ProductInfoBlock">
        <div>
          <div class="ProductInfoBlockOuterImgBlock">
            <div
              class="ProductInfoBlockOuterImg"
              style={{backgroundImage: "url(" + this.arr.outerImg + ")"}}
              onClick={() => this.clickOnProductInformation.emit(this.arr.outerImg)}>

              <div
                class="ProductInfoBlockInnerImg"
                style={{backgroundImage: "url(" + this.arr.innerImg + ")"}}
                onClick={() => this.clickOnProductInformation.emit(this.arr.innerImg)}>

              </div>
            </div>
          </div>
          <div class="ProductInfoTextBlock" innerHTML={this.arr.text}
               onClick={() => this.clickOnProductInformation.emit(this.arr.text)}>

          </div>
          <div class="ProductInfoBtnBlock">
            <button class="ProductInfoBtn" onClick={() => this.clickOnProductInformation.emit(this.arr.btnText)}>
              {this.arr.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
