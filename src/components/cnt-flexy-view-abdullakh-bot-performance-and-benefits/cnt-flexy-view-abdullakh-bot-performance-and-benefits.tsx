import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-performance-and-benefits.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotPerformanceAndBenefits implements ComponentInterface {
  /**
   * объект с массивами компонентов PerformanceInformation, BenefitsBots
   * */
  @Prop() payload: any;

  /**
   * открытие формы связи
   * */
  @Event() openForm: EventEmitter;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }
  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-performance-and-benefits_
        payload={this.payload}
        onClickOnPerformanceAndBenefits={(event) => this.clickOnPerformanceAndBenefits(event)}
      />
    );
  }

  /**
   * клик по элементам компонента PerformanceAndBenefits
   */
  public clickOnPerformanceAndBenefits({detail}) {
    return console.log("PerformanceInformation:", detail);
  }
}
