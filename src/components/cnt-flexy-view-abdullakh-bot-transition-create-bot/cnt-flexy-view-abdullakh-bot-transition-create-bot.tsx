import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-transition-create-bot-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-transition-create-bot.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotTransitionCreateBot implements ComponentInterface {
  /**
   * массив для вывода элементов TransitionCreateBot
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
    console.log(this.pathToAssets)
    return (
      <cnt-flexy-view-abdullakh-bot-transition-create-bot_
        payload={this.payload}
        onClickOnTransitionCreateBot={(event) => this.clickOnTransitionCreateBot(event)}
      />
    );
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnTransitionCreateBot({detail}) {
    return console.log("clickOnTransitionCreateBot:", detail);
  }
}
