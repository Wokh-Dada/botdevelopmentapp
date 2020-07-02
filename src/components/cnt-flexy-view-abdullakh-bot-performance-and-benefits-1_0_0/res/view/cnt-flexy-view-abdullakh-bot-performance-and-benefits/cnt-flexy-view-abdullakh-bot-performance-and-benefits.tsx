import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-performance-and-benefits',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-performance-and-benefits.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotPerformanceAndBenefits implements ComponentInterface {
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
             style={{backgroundImage: "url(" + StorageAbdullakhBot.prefix + this.payload.PerformanceandBenefitsbckgrnd + ")"}}>
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
      <cnt-flexy-view-abdullakh-bot-performance-information PerformanceInformation={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов компонента BenefitsBots
 */
const BenefitsBots = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-benefits-bots BenefitsBots={item}/>
    );
  })
}
