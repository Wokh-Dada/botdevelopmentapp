import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-tariffs-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-tariffs.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotTariffs implements ComponentInterface {
  /**
   * данные компонента Tariffs
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
      <cnt-flexy-view-abdullakh-bot-tariffs_
        payload={this.payload}
        onClickOnTariffs={(event) => this.clickOnTariffs(event)}
      />
    );
  }
  /**
   * клик по элементам компонента Tariffs
   */
  public clickOnTariffs({detail}) {
    return console.log("Tariffs:", detail);
  }
}
