import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-benefits-bots-block',
  styleUrl: 's-abdullakh-benefits-bots-block.css',
  shadow: false,
})
export class SAbdullakhBenefitsBotsBlock implements ComponentInterface {
  /**
   * данные переданные методом map компоненту BenefitsBotsBlock
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента BenefitsBots
   * */
  @Event() clickOnBenefitsBots: EventEmitter;

  render() {
    return (
      <div class="BenefitsBotsBlockPosition">
        <div class="BenefitsBotsBlock">
          <div class="BenefitsBotsBlock_imgBlock">
            <div class="BenefitsBotsBlock_outer_img" style={{backgroundImage: "url(" + this.arr.outerImg + ")"}}
                 onClick={() => this.clickOnBenefitsBots.emit(this.arr.outerImg)}>
              {/*вывод внешней background картинки*/}
              <div class="BenefitsBotsBlock_inner_img" style={{backgroundImage: "url(" + this.arr.innerImg + ")"}}
                   onClick={() => this.clickOnBenefitsBots.emit(this.arr.innerImg)}>
                {/*вывод внутренней background картинки*/}
              </div>
            </div>
          </div>
          <div class="BenefitsBotsBlock_content">
            <div class="BenefitsBotsBlock_content_title" onClick={() => this.clickOnBenefitsBots.emit(this.arr.title)}>
              {this.arr.title}
            </div>
            <div class="BenefitsBotsBlock_content_text" onClick={() => this.clickOnBenefitsBots.emit(this.arr.text)}>
              {this.arr.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

