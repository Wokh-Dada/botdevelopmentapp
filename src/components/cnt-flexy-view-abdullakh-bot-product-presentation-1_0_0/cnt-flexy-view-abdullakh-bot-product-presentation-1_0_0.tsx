import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-presentation-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-presentation-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotProductPresentation1_0_0 implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
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
      <cnt-flexy-view-abdullakh-bot-product-presentation
        payload={this.payload}
        onClickOnProductPresentation={(event) => this.clickOnProductPresentation(event)}
      />
    );
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log("clickOnProductPresentation:", detail);
  }
}
