import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-consultation-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-consultation.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotConsultation implements ComponentInterface {
  /**
   * данные компонента Consultation
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
      <cnt-flexy-view-abdullakh-bot-consultation_
        payload={this.payload}
        onClickOnConsultation={(event) => this.clickOnConsultation(event)}
      />
    );
  }

  /**
   * клик по элементам компонента Consultation
   */
  public clickOnConsultation({detail}) {
    return console.log("Consultation:", detail);
  }
}
