import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-benefits-bots-block',
  styleUrl: 's-abdullakh-benefits-bots-block.css',
  shadow: false,
})
export class SAbdullakhBenefitsBots implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <div class="BenefitsBotsBlock">
        <div class="BenefitsBotsBlock_imgBlock">
          <div class="BenefitsBotsBlock_outer_img"
               style={{backgroundImage: "url(" + this.arr.outerImg + ")"}}>
            <div class="BenefitsBotsBlock_inner_img"
                 style={{backgroundImage: "url(" + this.arr.innerImg + ")"}}>
            </div>
          </div>
        </div>
        <div class="BenefitsBotsBlock_content">
          <div class="BenefitsBotsBlock_content_title">
            {this.arr.title}
          </div>
          <div class="BenefitsBotsBlock_content_text">
            {this.arr.text}
          </div>
        </div>
      </div>
    );
  }
}

