import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-information-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-information-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotProductInformation1_0_0 implements ComponentInterface {
  /**
   * данные из объекта для компонента ProductInformation
   * */
  @Prop() payload: any;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }
  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-product-information
        ProductInformation={this.payload}
        onClickOnProductInformation={(event) => this.clickOnProductInformation(event)}
      />
    );
  }

  /**
   * клик по элементам компонента product-information
   */
  public clickOnProductInformation({detail}) {
    return console.log("clickOnProductInformation:", detail);
  }

}
