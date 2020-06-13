import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-benefits-bots',
  styleUrl: 's-abdullakh-benefits-bots.css',
  shadow: false,
})
export class SAbdullakhBenefitsBots implements ComponentInterface {
  @Prop() BenefitsBots: any;

  render() {
    return (
      <section class="BenefitsBots">
        <div class="container">
          <div class="BenefitsBotsTitleBlock">
            <div class="BenefitsBotsTitle">
              {this.BenefitsBots.title}
            </div>
          </div>
          <div class="row">
            <BotsInfoBlocks arr={this.BenefitsBots.infoBlock} />
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const BotsInfoBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="col-4">
        <s-abdullakh-benefits-bots-block arr={item}/>
      </div>
    );
  })
}
