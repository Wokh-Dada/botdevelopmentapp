import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-presentation-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-presentation.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotProductPresentation implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
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
      <cnt-flexy-view-abdullakh-bot-product-presentation_
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
