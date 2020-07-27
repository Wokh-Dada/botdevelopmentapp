import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-information-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-information.css',
  shadow: false,
  scoped: false
})
export class CntFlexyViewAbdullakhBotProductInformation implements ComponentInterface {
  /**
   * данные из объекта для компонента ProductInformation
   * */
  @Prop() payload: any;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  /**
   * префикс путь к картинкам
   * */
  @Prop() pathToAssets: string;

  /**
   * присваивание переданного пути общей переменной для вызова в любом месте
   * */
  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }
  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-product-information_
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
