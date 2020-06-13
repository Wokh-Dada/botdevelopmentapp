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
              Преимущества чат-ботов
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="BenefitsBotsBlock">
                <div class="BenefitsBotsBlock_imgBlock">
                  <div class="BenefitsBotsBlock_outer_img"
                       style={{backgroundImage: "url(" + this.BenefitsBots.outerImg + ")"}}>
                    <div class="BenefitsBotsBlock_inner_img"
                         style={{backgroundImage: "url(" + this.BenefitsBots.innerImg + ")"}}>
                    </div>
                  </div>
                </div>
                <div class="BenefitsBotsBlock_content">
                  <div class="BenefitsBotsBlock_content_title">
                    Низкая цена
                  </div>
                  <div class="BenefitsBotsBlock_content_text">
                    Бот поможет оптимизировать затраты на сотрудников
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

}
