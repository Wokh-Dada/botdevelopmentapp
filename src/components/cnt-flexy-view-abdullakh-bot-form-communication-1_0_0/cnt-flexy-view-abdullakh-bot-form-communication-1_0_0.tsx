import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {formCommunication} from "../../utils/mock";
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form-communication-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form-communication-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotFormCommunication1_0_0 implements ComponentInterface {
  /**
   * данные компонента FormCommunication
   */
  @Prop() payload: any;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;


  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }

  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-form-communication
        payload={formCommunication}
      />
    );
  }

}
