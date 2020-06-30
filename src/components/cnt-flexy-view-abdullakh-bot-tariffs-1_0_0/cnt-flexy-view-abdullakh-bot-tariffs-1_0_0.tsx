import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-tariffs-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-tariffs-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotTariffs1_0_0 implements ComponentInterface {
  /**
   * данные компонента Tariffs
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
      <cnt-flexy-view-abdullakh-bot-tariffs
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
