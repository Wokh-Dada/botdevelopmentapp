import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-performance-and-benefits-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-performance-and-benefits-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhPerformanceAndBenefits1_0_0 implements ComponentInterface {
  /**
   * объект с массивами компонентов PerformanceInformation, BenefitsBots
   * */
  @Prop() payload: any;

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
      <section class="h-100">
        <div class="PerformanceandBenefitsbckgrnd"
             style={{backgroundImage: "url(" + this.payload.PerformanceandBenefitsbckgrnd + ")"}}>
          {/*background для компонента PerformanceAndBenefits*/}
        </div>
        <PerformanceInformation arr={this.payload.PerformanceInformation}/>
        <BenefitsBots arr={this.payload.BenefitsBots}/>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов компонента PerformanceInformation
 */
const PerformanceInformation = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-performance-information PerformanceInformation={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов компонента BenefitsBots
 */
const BenefitsBots = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-benefits-bots BenefitsBots={item}/>
    );
  })
}
