import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhBenefitsBots} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-benefits-bots',
  styleUrl: 's-abdullakh-benefits-bots.css',
  shadow: false,
})
export class SAbdullakhBenefitsBots implements ComponentInterface {
  /**
   * объект с массивом и данными BenefitsBots
   * */
  @Prop() BenefitsBots: SSAbdullakhBenefitsBots;

  /**
   * клик по элементам компонента BenefitsBots
   * */
  @Event() clickOnBenefitsBots: EventEmitter;

  render() {
    return (
      <section class="BenefitsBots" id="benefitsBots">
        <div class="container">
          <div class="BenefitsBotsTitleBlock wow animate__animated animate__backInUp">
            <div class="BenefitsBotsTitle" onClick={() => this.clickOnBenefitsBots.emit(this.BenefitsBots.title)}>
              {this.BenefitsBots.title}
            </div>
          </div>
          <div class="row">
            <BotsInfoBlocks arr={this.BenefitsBots.infoBlock}/>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода блоков подкомпонента BenefitsBots компонента BenefitsBots
 */
const BotsInfoBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-lg-4 col-12">
        <s-abdullakh-benefits-bots-block arr={item}/>
      </div>
    );
  })
}
