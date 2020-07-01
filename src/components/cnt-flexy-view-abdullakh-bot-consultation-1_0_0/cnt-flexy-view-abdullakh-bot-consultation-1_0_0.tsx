import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-consultation-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-consultation-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotConsultation1_0_0 implements ComponentInterface {
  /**
   * данные компонента Consultation
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
      <cnt-flexy-view-abdullakh-bot-consultation
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
