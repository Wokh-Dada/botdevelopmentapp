import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 's-abdullakh-performance-and-benefits',
  styleUrl: 's-abdullakh-performance-and-benefits.css',
  shadow: false,
})
export class SAbdullakhPerformanceAndBenefits implements ComponentInterface {
  /**
   * объект с массивами компонентов PerformanceInformation, BenefitsBots
   * */
  @Prop() PerformanceAndBenefits: any;

  /**
   * клик по элементам компонента PerformanceAndBenefits
   * */
  @Event() clickOnPerformanceAndBenefits: EventEmitter;

  /**
   * открытие формы связи
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <section class="h-100" >
        <div class="PerformanceandBenefitsbckgrnd" style={{backgroundImage: "url(" + this.PerformanceAndBenefits.PerformanceandBenefitsbckgrnd + ")"}}>

        </div>
        <PerformanceInformation arr={this.PerformanceAndBenefits.PerformanceInformation}/>
        <BenefitsBots arr={this.PerformanceAndBenefits.BenefitsBots}/>

      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const PerformanceInformation = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-performance-information PerformanceInformation={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const BenefitsBots = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-benefits-bots BenefitsBots={item}/>
    );
  })
}
