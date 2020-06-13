import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import { markdown } from "markdown";

@Component({
  tag: 's-abdullakh-product-presentation-title',
  styleUrl: 's-abdullakh-product-presentation-title.css',
  shadow: false,
})
export class SAbdullakhProductPresentationTitle implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() arr: any;

  render() {
    return (
      <div class="presentationTitleBlock">
        <div class="presentationTitleInBlock">
          <div class="presentationTitle" innerHTML={markdown.toHTML(this.arr.text)}>
            <div class="presentationTitleUnderlineBlock">
              <div class="presentationTitleUnderline"
                   style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}>

              </div>
            </div>
          </div>
          <div class="presentationTitlePrice">
            {this.arr.behindText}<span> {this.arr.price}</span>
          </div>
          <div class="presentationBtnBlock">
            <button class="presentationBtn">
              {this.arr.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }

}
